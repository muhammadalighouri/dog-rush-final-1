import { RPC_URLS } from '../constants/chains'
import addressData from '../solidity/constants/addresses.json'

import tokenABIData from '../solidity/build/contracts/TestToken.json'
import presaleABIData from '../solidity/build/contracts/TokenSale.json'

const { abi: tokenABI } = tokenABIData
const { abi: presaleABI } = presaleABIData
const { presale: presaleContractAddress } = addressData
const { token: tokenContractAddress } = addressData
const { usdt: usdtContractAddress } = addressData
// import { presale as presaleContractAddress } from '../solidity/constants/addresses.json'

const getCurrentConnection = (chainId, abi, contractAddress, library) => {
    const _rpcUrl = RPC_URLS[chainId]

    const Web3 = require('web3')

    const web3 = library
        ? new Web3(library.provider)
        : new Web3(new Web3.providers.HttpProvider(_rpcUrl))

    return new web3.eth.Contract(abi, contractAddress)
}

export const presaleContract = (chainId, library) => {
    const address = presaleContractAddress[chainId]
    const abi = presaleABI
    const connection = getCurrentConnection(chainId, abi, address, library)
    return connection
}

export const tokenContract = (chainId, library) => {
    const address = tokenContractAddress[chainId]
    const abi = tokenABI

    const connection = getCurrentConnection(chainId, abi, address, library)
    return connection
}

export const usdtContract = (chainId, library) => {
    const address = usdtContractAddress[chainId]
    const abi = tokenABI

    const connection = getCurrentConnection(chainId, abi, address, library)
    return connection
}

export const sendTransaction = async (fn, options) => {
    const gasLimit = await fn.estimateGas(options)
    return fn.send({ ...options, gasLimit })
}

export const approveERC20IfNotApproved = async (
    instance,
    spender,
    amount,
    options,
) => {
    if (
        (await instance.methods.allowance(options.from, spender).call()) <
        amount
    )
        return sendTransaction(
            instance.methods.approve(spender, amount),
            options,
        )

    return amount
}
