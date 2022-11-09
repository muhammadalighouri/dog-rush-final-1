export const SUPPORTED_CHAIN_IDS = {
    BSC: 56,
    BSC_TESTNET: 97,
    POLYGON: 137,
    POLYGON_MUMBAI: 80001,
    ETHEREUM_MAINNET: 1,
    GOERLI: 5,
}

export const CHAIN_IDS_TO_NAMES = {
    [SUPPORTED_CHAIN_IDS.BSC]: 'Binance Smart Chain',
    [SUPPORTED_CHAIN_IDS.BSC_TESTNET]: 'Binance Smart Chain Testnet',
    [SUPPORTED_CHAIN_IDS.POLYGON]: 'Polygon',
    [SUPPORTED_CHAIN_IDS.POLYGON_MUMBAI]: 'Polygon Mumbai',
    [SUPPORTED_CHAIN_IDS.ETHEREUM_MAINNET]: 'Ethereum Mainnet',
    [SUPPORTED_CHAIN_IDS.GOERLI]: 'Goerli Testnet',
}

export const RPC_URLS = {
    '5': `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
    '1': `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
}

// Decide which chainId to use according to environment
export const chainIdToUse = () => {
    return process.env.REACT_APP_ENV === 'production'
        ? SUPPORTED_CHAIN_IDS['ETHEREUM_MAINNET']
        : SUPPORTED_CHAIN_IDS['GOERLI']
}

export const addEthereumChainParameter = {
    1: {
        chainId: `0x${(1).toString(16)}`,
        chainName: CHAIN_IDS_TO_NAMES[1],
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [
            `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
        ],
        blockExplorerUrls: ['https://etherscan.io/'],
    },
    137: {
        chainId: `0x${(137).toString(16)}`,
        chainName: CHAIN_IDS_TO_NAMES[137],
        nativeCurrency: {
            name: 'Polygon',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com/'],
    },
    80001: {
        chainId: `0x${(80001).toString(16)}`,
        chainName: CHAIN_IDS_TO_NAMES[80001],
        nativeCurrency: {
            name: 'Polygon',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
        blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    },
    97: {
        chainId: `0x${(97).toString(16)}`,
        chainName: CHAIN_IDS_TO_NAMES[97],
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
        blockExplorerUrls: ['https://testnet.bscscan.com/'],
    },
    56: {
        chainId: `0x${(56).toString(16)}`,
        chainName: CHAIN_IDS_TO_NAMES[56],
        nativeCurrency: {
            name: 'Binance Coin',
            symbol: 'BNB',
            decimals: 18,
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        blockExplorerUrls: ['https://bscscan.com/'],
    },
    5: {
        chainId: `0x${(5).toString(16)}`,
        chainName: CHAIN_IDS_TO_NAMES[5],
        nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: [
            `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
        ],
        blockExplorerUrls: ['https://goerli.etherscan.io/'],
    },
}
