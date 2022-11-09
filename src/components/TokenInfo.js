import { MdOutlineContentCopy } from 'react-icons/md'
const TokenInfo = () => {
    return (
        <div className='six'>
            <div className='heading'>
                <h1>Doge Rush Contract</h1>
                <p>
                    Use the contract information below to add the Doge Rush
                    token to your wallet.
                </p>
            </div>
            <div className='grid'>
                <div className='first'>
                    <div className='item'>
                        <input
                            type='text'
                            value={'0x2d6e9d6b362354a5Ca7b03581Aa2aAc81bb530Db'}
                            placeholder='Address'
                        />
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    '0x2d6e9d6b362354a5Ca7b03581Aa2aAc81bb530Db',
                                )
                            }}
                        >
                            Copy <MdOutlineContentCopy />
                        </button>
                    </div>
                </div>
                <div className='second'>
                    <div className='item'>
                        <input type='number' value={'18'} placeholder='Token' />
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText('18')
                            }}
                        >
                            Copy <MdOutlineContentCopy />{' '}
                        </button>
                    </div>
                    <div className='item'>
                        <input
                            type='text'
                            value={'DR'}
                            placeholder='Token Symbol'
                        />
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText('DR')
                            }}
                        >
                            Copy <MdOutlineContentCopy />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TokenInfo
