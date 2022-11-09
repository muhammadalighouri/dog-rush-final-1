require('dotenv').config()
const { MNEMONIC, INFURA_ID } = process.env

const HDWalletProvider = require('@truffle/hdwallet-provider')
const {
    MATIC_TESTNET_TARGET_NAMES,
    MATIC_MAINNET_TARGET_NAMES,
} = require('./constants/index.cjs')

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*', // Any network (default: none)
        },
        bsc: {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://data-seed-prebsc-1-s3.binance.org:8545/`,
                ),
            network_id: 97,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        goerli: {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://goerli.infura.io/v3/${INFURA_ID}`,
                ),
            network_id: 5,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        mainnet: {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://mainnet.infura.io/v3/${INFURA_ID}`,
                ),
            network_id: 1,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        'bsc-mainnet': {
            provider: () =>
                new HDWalletProvider(
                    MNEMONIC,
                    `https://bsc-dataseed1.binance.org`,
                ),
            network_id: 56,
            confirmations: 2,
            timeoutBlocks: 200,
            networkCheckTimeout: 10000,
            skipDryRun: true,
        },
        ...Object.fromEntries(
            MATIC_TESTNET_TARGET_NAMES.map((key) => [
                key,
                {
                    provider: () =>
                        new HDWalletProvider(
                            MNEMONIC,
                            `https://matic-mumbai.chainstacklabs.com`,
                        ),
                    network_id: 80001,
                    confirmations: 2,
                    timeoutBlocks: 200,
                    networkCheckTimeout: 10000,
                    skipDryRun: true,
                },
            ]),
        ),
        ...Object.fromEntries(
            MATIC_MAINNET_TARGET_NAMES.map((key) => [
                key,
                {
                    provider: () =>
                        new HDWalletProvider(
                            MNEMONIC,
                            `https://polygon-rpc.com/`,
                        ),
                    network_id: 137,
                    confirmations: 2,
                    timeoutBlocks: 200,
                    networkCheckTimeout: 10000,
                    skipDryRun: true,
                },
            ]),
        ),
    },
    compilers: {
        solc: {
            version: '0.6.0',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    },
}
