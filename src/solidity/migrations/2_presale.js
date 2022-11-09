const { chainIdForTargetName } = require('../constants/index.cjs')
const fs = require('fs')

const TokenSale = artifacts.require('TokenSale')

module.exports = async function (_deployer, network) {
    await _deployer.deploy(TokenSale)

    return new Promise((resolve, reject) => {
        fs.readFile(
            `${process.cwd()}/constants/addresses.json`,
            'utf-8',
            (err, jsonString) => {
                if (err) throw new Error(err)
                try {
                    var data = JSON.parse(jsonString)

                    var chainId = chainIdForTargetName(network)

                    // Set data
                    data['presale'][chainId] = TokenSale.address

                    data = JSON.stringify(data, null, 4) + '\n'

                    fs.writeFile(
                        `${process.cwd()}/constants/addresses.json`,
                        data,
                        (err) => {
                            if (err) throw new Error(err)

                            resolve()
                        },
                    )
                } catch (error) {
                    reject(error)
                }
            },
        )
    })
}
