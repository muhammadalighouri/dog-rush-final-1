const MATIC_TESTNET_TARGET_NAMES = [
    'polygon-testnet',
    'polygon',
    'matic',
    'matic-testnet',
]

const MATIC_MAINNET_TARGET_NAMES = ['polygon-mainnet', 'matic-mainnet']

const chainIdForTargetName = (targetName) => {
    if (MATIC_TESTNET_TARGET_NAMES.includes(targetName)) {
        return '80001'
    } else if (MATIC_MAINNET_TARGET_NAMES.includes(targetName)) {
        return '137'
    } else if (targetName === 'bsc') {
        return '97'
    } else if (targetName === 'bsc-mainnet') {
        return '56'
    } else if (targetName === 'goerli') {
        return '5'
    } else if (targetName === 'mainnet') {
        return '1'
    } else {
        throw new Error('Invalid target name')
    }
}

module.exports = {
    MATIC_TESTNET_TARGET_NAMES,
    MATIC_MAINNET_TARGET_NAMES,

    SUPPORTED_DEPLOY_TARGETS: [
        'bsc',
        'bsc-mainnet',
        ...MATIC_MAINNET_TARGET_NAMES,
        ...MATIC_TESTNET_TARGET_NAMES,
    ],

    chainIdForTargetName,
}
