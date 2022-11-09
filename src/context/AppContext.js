/* eslint-disable react-hooks/exhaustive-deps */
import WalletConnect from '@walletconnect/web3-provider'
import { ethers } from 'ethers'
import { createContext, useEffect, useState } from 'react'
import Web3Modal from 'web3modal'
import {
    addEthereumChainParameter,
    chainIdToUse,
    CHAIN_IDS_TO_NAMES,
} from '../constants/chains'
import { handleSwitchChain } from '../utils/connection'

export const AppContext = createContext()

const providerOptions = {
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: process.env.REACT_APP_INFURA_ID,
            rpc: {
                1: addEthereumChainParameter[1].rpcUrls[0],
                80001: addEthereumChainParameter[80001].rpcUrls[0],
                137: addEthereumChainParameter[137].rpcUrls[0],
                5: addEthereumChainParameter[5].rpcUrls[0],
            },
        },
    },
}

export const AppcontextProvider = ({ children }) => {
    const [account, setAccount] = useState()
    const [networkId, setNetworkId] = useState()
    const [provider, setProvider] = useState()
    const [library, setLibrary] = useState()
    const [network, setNetwork] = useState()
    const [openModal, setOpenModal] = useState(false)
    const [openSeaModal, setOpenSeaModel] = useState(false)

    const web3Modal = new Web3Modal({
        cacheProvider: true,
        providerOptions, // required
        theme: 'dark',
    })

    const connectWallet = async (switchChain) => {
        try {
            const provider = await web3Modal.connect()
            if (
                switchChain &&
                +networkId !== +chainIdToUse() &&
                web3Modal.cachedProvider
            ) {
                await handleSwitchChain(chainIdToUse(), provider)
            }
            const library = new ethers.providers.Web3Provider(provider)
            const accounts = await library.listAccounts()
            const network = await library.getNetwork()
            setProvider(provider)
            setLibrary(library)
            setNetwork(network)
            setNetworkId(network.chainId)
            if (network.chainId === chainIdToUse()) {
                if (accounts.length !== 0) setAccount(accounts[0])
                return Promise.resolve({
                    message: 'success',
                    account: accounts[0],
                })
            } else {
                setAccount()
                return Promise.reject({
                    message: `Please change the network to ${
                        CHAIN_IDS_TO_NAMES[chainIdToUse()]
                    }.`,
                })
            }
        } catch (error) {
            console.log(error)
            return Promise.reject({ message: 'Something went wrong.' })
        }
    }

    useEffect(() => {
        ;(async () => {
            if (+networkId !== +chainIdToUse() && web3Modal.cachedProvider) {
                await handleSwitchChain(chainIdToUse(), provider)
                connectWallet()
            }
        })()
    }, [networkId, web3Modal.cachedProvider])

    useEffect(() => {
        if (provider?.on) {
            const handleAccountsChanged = (accounts) => {
                setAccount(accounts[0])
            }

            const handleChainChanged = (chainId) => {
                setNetworkId(chainId)
            }

            const handleDisconnect = () => {
                disconnectWallet()
            }

            provider.on('accountsChanged', handleAccountsChanged)
            provider.on('chainChanged', handleChainChanged)
            provider.on('disconnect', handleDisconnect)

            return () => {
                if (provider.removeListener) {
                    provider.removeListener(
                        'accountsChanged',
                        handleAccountsChanged,
                    )
                    provider.removeListener('chainChanged', handleChainChanged)
                    provider.removeListener('disconnect', handleDisconnect)
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provider])

    const eagerConnect = async () => {
        if (web3Modal.cachedProvider) {
            connectWallet()
        }
    }

    useEffect(() => {
        eagerConnect()
    }, [])

    const refreshState = () => {
        setAccount()
        setNetworkId()
        setNetwork()
    }

    const disconnectWallet = async () => {
        try {
            if (provider?.disconnect) {
                provider.disconnect()
            }

            if (library?.provider?.disconnect) {
                library.provider.disconnect()
            }
        } catch {
            // do nothing
        }

        web3Modal.clearCachedProvider()
        refreshState()
    }

    const getAccBalance = async () => {
        if (library) {
            if (account) {
                return await library.getBalance(account)
            }
        }
    }

    return (
        <AppContext.Provider
            value={{
                connectWallet,
                eagerConnect,
                disconnectWallet,
                getAccBalance,
                account,
                library,
                provider,
                networkId,
                network,
                openModal,
                setOpenModal,
                openSeaModal,
                setOpenSeaModel,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
