import { useCallback, useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import Web3 from 'web3'
import { chainIdToUse } from '../constants/chains'
import { AppContext } from '../context/AppContext'
import addressData from '../solidity/constants/addresses.json'
import { percentage, returnToZeroString, trimToDecimalPlaces } from '../utils'
import { handleSwitchChain } from '../utils/connection'
import {
    approveERC20IfNotApproved,
    presaleContract,
    sendTransaction,
    tokenContract,
    usdtContract,
} from '../utils/contracts'
import { parseProviderErrorMessage } from '../utils/errorHandlers'

const topOption = [
    {
        value: 'ETH',
        label: 'ETH',
    },
    {
        value: 'USDT',
        label: 'USDT',
    },
]
const bottomOption = [
    {
        value: 'DR',
        label: 'DR',
    },
    {
        value: 'other',
        label: 'other',
    },
]

const initialInputValues = {
    source: '',
    destination: '',
}

const SOURCE_CURRENCY_INPUT = 'source-currency-input'
const DESTINATION_CURRENCY_INPUT = 'destination-currency-input'

const MAX_INVESTMENT = Web3.utils.toWei('2500000')

const MintGrid = () => {
    // const [img, setImg] = useState()
    const [selectedOptionTop, setSelectedOptionTop] = useState(topOption[0])
    // const [selectedOptionBottom, setSelectedOptionBottom] = useState()

    const { account, library, provider, connectWallet, getAccBalance } =
        useContext(AppContext)

    const [totalInvestment, setTotalInvestment] = useState()

    const [ethPrice, setEthPrice] = useState()

    const [inputValues, setInputValues] = useState(initialInputValues)

    useEffect(() => {
        setInputValues(initialInputValues)
    }, [selectedOptionTop])

    const [balances, setBalances] = useState()

    const [lastUpdateTime, setLastUpdateTime] = useState(0)

    const [pending, setPending] = useState(false)

    const loadTotalInvestment = async () => {
        const _totalInvestment = await presaleContract(chainIdToUse())
            .methods.totalInvestment()
            .call()

        setTotalInvestment(_totalInvestment)
    }

    useEffect(() => {
        ;(async () => {
            try {
                loadTokenPrices()
                loadTotalInvestment()
            } catch {
                // do nothing
            }
        })()
    }, [])

    const loadTokenPrices = useCallback(async () => {
        const notExpired = () => {
            const now = Date.now()
            return now - lastUpdateTime < 60 * 1e3 // 60 seconds
        }

        if (ethPrice && notExpired()) return ethPrice

        setLastUpdateTime(Date.now())

        const ethToUsd = await presaleContract(chainIdToUse())
            .methods.getLatestPrice()
            .call()

        const prices = { price: ethToUsd, decimal: 8 }

        setEthPrice(prices)

        return prices
    }, [lastUpdateTime])

    const convert = async (e) => {
        let { name, value } = e.target

        if (isNaN(value)) {
            return
        }

        const _prices = await loadTokenPrices()

        const ethToUsd = _prices.price / 10 ** _prices.decimal

        if (name === SOURCE_CURRENCY_INPUT) {
            setInputValues({
                source: value,
                destination: trimToDecimalPlaces(
                    selectedOptionTop?.label === 'USDT'
                        ? value * '200'
                        : value * (ethToUsd * 200),
                    18,
                ),
            })
        } else {
            setInputValues({
                source: trimToDecimalPlaces(
                    selectedOptionTop?.label === 'USDT'
                        ? value / 200
                        : value / (200 * ethToUsd),
                    18,
                ),
                destination: value,
            })
        }
    }

    const loadBalances = async () => {
        const { _hex: ETHBalance } = await getAccBalance()

        const tokenBalance = await tokenContract(chainIdToUse())
            .methods.balanceOf(account)
            .call()

        const USDTBalance = await usdtContract(chainIdToUse())
            .methods.balanceOf(account)
            .call()

        const user = await presaleContract(chainIdToUse())
            .methods.user(account)
            .call()

        const raisedBalance = user.lockedAmount

        const Web3 = require('web3')

        setBalances({
            ETHBalance,
            humanFriendlyEthBalance: trimToDecimalPlaces(
                Web3.utils.fromWei(ETHBalance),
                6,
            ),

            tokenBalance,
            humanFriendlyTokenBalance: trimToDecimalPlaces(
                Web3.utils.fromWei(tokenBalance),
                6,
            ),

            raisedBalance,
            humanFriendlyRaisedBalance: Web3.utils.fromWei(raisedBalance),

            USDTBalance,
            humanFriendlyUSDTBalance: trimToDecimalPlaces(
                Web3.utils.fromWei(USDTBalance, 'Mwei'),
                6,
            ),
        })
    }

    useEffect(() => {
        if (!library || !account) return

        loadBalances()
    }, [library, account])

    const max = (_input) => {
        if (!account || !balances) return
        if (_input === 'source') {
            let _sourceValue
            if (selectedOptionTop?.label === 'ETH') {
                _sourceValue = trimToDecimalPlaces(
                    Web3.utils.fromWei(balances.ETHBalance),
                    18,
                )
                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            } else if (selectedOptionTop?.label === 'USDT') {
                _sourceValue = trimToDecimalPlaces(
                    Web3.utils.fromWei(balances.USDTBalance, 'Mwei'),
                    18,
                )

                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            }

            convert({
                target: {
                    name: SOURCE_CURRENCY_INPUT,
                    value: _sourceValue,
                },
            })
        } else if (_input === 'destination') {
            let _destValue = trimToDecimalPlaces(
                Web3.utils.fromWei(balances.tokenBalance),
                18,
            )

            setInputValues((prev) => ({
                ...prev,
                destination: _destValue,
            }))

            convert({
                target: {
                    name: DESTINATION_CURRENCY_INPUT,
                    value: _destValue,
                },
            })
        }
    }

    const half = (_input) => {
        if (!account || !balances) return
        if (_input === 'source') {
            let _sourceValue
            if (selectedOptionTop?.label === 'ETH') {
                _sourceValue = trimToDecimalPlaces(
                    (Web3.utils.fromWei(balances.ETHBalance) / 2).toString(),
                    18,
                )
                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            } else if (selectedOptionTop?.label === 'USDT') {
                _sourceValue = trimToDecimalPlaces(
                    (
                        Web3.utils.fromWei(balances.USDTBalance, 'Mwei') / 2
                    ).toString(),
                    18,
                )
                setInputValues((prev) => ({
                    ...prev,
                    source: _sourceValue,
                }))
            }

            convert({
                target: {
                    name: SOURCE_CURRENCY_INPUT,
                    value: _sourceValue,
                },
            })
        } else if (_input === 'destination') {
            // TODO Use avaialble supply instead of balance

            let _destValue = trimToDecimalPlaces(
                (Web3.utils.fromWei(balances.tokenBalance) / 2).toString(),
                18,
            )

            setInputValues((prev) => ({
                ...prev,
                destination: _destValue,
            }))

            convert({
                target: {
                    name: DESTINATION_CURRENCY_INPUT,
                    value: _destValue,
                },
            })
        }
    }

    const handleBuy = async () => {
        setPending(true)
        try {
            if (!account) {
                throw new Error('You need to connect before you can purchase!')
            }

            if (!inputValues.source) {
                throw new Error('Please input a value to convert')
            }

            await handleSwitchChain(chainIdToUse(), provider)

            if (selectedOptionTop.label === 'USDT') {
                const valueToSend = Web3.utils.toWei(
                    inputValues.source,
                    'ether',
                )

                await approveERC20IfNotApproved(
                    usdtContract(chainIdToUse(), library),
                    addressData.presale[chainIdToUse()],
                    Web3.utils.toWei(inputValues.source, 'Mwei'),
                    { from: account },
                )

                await sendTransaction(
                    presaleContract(
                        chainIdToUse(),
                        library,
                    ).methods.purchaseTokensWithStableCoin(valueToSend),
                    { from: account },
                )
            } else if (selectedOptionTop.label === 'ETH') {
                const valueToSend = Web3.utils.toWei(inputValues.source)

                await sendTransaction(
                    presaleContract(
                        chainIdToUse(),
                        library,
                    ).methods.purchaseTokensWithETH(),
                    { from: account, value: valueToSend },
                )
            }

            loadTotalInvestment()
            loadBalances()
            setInputValues(initialInputValues)
        } catch (error) {
            alert(parseProviderErrorMessage(error))
        }
        setPending(false)
    }

    return (
        <>
            <section className='mint__grid'>
                <div className='container'>
                    <div className='about__grid'>
                        <div
                            data-aos='fade-up'
                            className='aos-init aos-animate details'
                        >
                            <h2>Doge Rush Beta-Sale</h2>
                            <p>1 USDT = 200 Doge Rush</p>

                            <div>
                                <div className='payment__header'>
                                    <div className='supply'></div>
                                </div>
                                <div className='payment__info'>
                                    <div className='top'>
                                        <span>From</span>
                                        <span>
                                            Balance:&nbsp;
                                            {!account && 'Wallet not connected'}
                                            {selectedOptionTop?.label ==
                                                'ETH' &&
                                                account &&
                                                returnToZeroString(
                                                    balances?.humanFriendlyEthBalance,
                                                )}
                                            {selectedOptionTop?.label ==
                                                'USDT' &&
                                                account &&
                                                returnToZeroString(
                                                    balances?.humanFriendlyUSDTBalance,
                                                )}
                                        </span>
                                    </div>
                                    <div className='middle'>
                                        <div className='start'>
                                            <div className='logo'>
                                                <img
                                                    src={
                                                        selectedOptionTop?.label ==
                                                        'USDT'
                                                            ? 'images/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB.png'
                                                            : 'images/1027.png'
                                                    }
                                                    alt=''
                                                />
                                            </div>
                                            <Select
                                                options={topOption}
                                                // placeholder={"USTD"}
                                                defaultValue={{
                                                    label: 'ETH',
                                                    value: 'ETH',
                                                }}
                                                onChange={setSelectedOptionTop}
                                                // menuIsOpen={true}
                                            />
                                        </div>
                                        <div className='mid'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                onChange={convert}
                                                name={SOURCE_CURRENCY_INPUT}
                                                placeholder={`${selectedOptionTop?.label} amount`}
                                                aria-label={`${selectedOptionTop?.label} amount`}
                                                value={inputValues.source}
                                                aria-describedby='basic-addon1'
                                            />
                                        </div>
                                        <div className='end'>
                                            <button
                                                onClick={() => max('source')}
                                            >
                                                Max
                                            </button>
                                            <button
                                                onClick={() => half('source')}
                                            >
                                                Half
                                            </button>
                                        </div>
                                    </div>
                                    <div className='bottom'></div>
                                </div>
                                <div className='swap'>
                                    <div className='img'>
                                        <img
                                            src='images/msic-swap.svg'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='payment__info'>
                                    <div className='top'>
                                        <span>To</span>
                                        <span>
                                            Purchased:&nbsp;
                                            {account
                                                ? returnToZeroString(
                                                      balances?.humanFriendlyRaisedBalance,
                                                  )
                                                : 'Wallet not connected'}
                                        </span>
                                    </div>
                                    <div className='middle'>
                                        <div className='start'>
                                            <div className='logo'>
                                                <img
                                                    src='images/01-05.png'
                                                    alt=''
                                                />
                                            </div>
                                            <span
                                                style={{
                                                    fontFamily:
                                                        "'Barlow-medium'",
                                                    paddingLeft: '10px',
                                                }}
                                            >
                                                {' '}
                                                DR
                                            </span>
                                        </div>
                                        <div className='mid'>
                                            <input
                                                type='text'
                                                className='form-control'
                                                onChange={convert}
                                                name={
                                                    DESTINATION_CURRENCY_INPUT
                                                }
                                                placeholder={`DR amount`}
                                                aria-label={`DR amount`}
                                                value={inputValues.destination}
                                                aria-describedby='basic-addon1'
                                            />
                                        </div>
                                        <div className='end'>
                                            <button
                                                onClick={() =>
                                                    max('destination')
                                                }
                                            >
                                                Max
                                            </button>
                                            <button
                                                onClick={() =>
                                                    half('destination')
                                                }
                                            >
                                                Half
                                            </button>
                                        </div>
                                    </div>
                                    <div className='bottom'></div>
                                </div>

                                {!account ? (
                                    <div
                                        onClick={async () => {
                                            window.scrollTo(0, 0)
                                            await new Promise((resolve) =>
                                                setTimeout(resolve, 1000),
                                            )
                                            connectWallet(true)
                                        }}
                                        className='btns'
                                    >
                                        <button>CONNECT WALLET</button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={pending ? () => {} : handleBuy}
                                        className='btns'
                                    >
                                        <button>
                                            {pending ? 'PENDING...' : 'SWAP'}{' '}
                                        </button>
                                    </div>
                                )}
                                {!account && (
                                    <p
                                        style={{
                                            color: 'rgb(201, 210, 215)',
                                            fontWeight: '400',
                                            fontSize: '16px',
                                            marginTop: '16px',
                                        }}
                                    >
                                        Connect To Ethereum Wallet
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className='img'>
                            <img src='images/Dog Run/front.png' alt='' />
                            <p>
                                USDT Raised: $
                                {totalInvestment &&
                                trimToDecimalPlaces(
                                    Web3.utils.fromWei(totalInvestment),
                                    2,
                                )
                                    ? trimToDecimalPlaces(
                                          Web3.utils.fromWei(totalInvestment),
                                          2,
                                      )
                                    : '0.0'}{' '}
                                / $2,500,000
                            </p>
                            <div className='dots'>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 1 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 2 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 3 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 4 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 5 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 6 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 7 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 8 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 9 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 10 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                                <span
                                    style={{
                                        ...(percentage(
                                            totalInvestment,
                                            MAX_INVESTMENT,
                                            10,
                                        ) >
                                            9.090909091 * 11 && {
                                            background: '#0085ff',
                                        }),
                                    }}
                                ></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MintGrid
