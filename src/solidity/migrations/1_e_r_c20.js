const TestToken = artifacts.require('TestToken')

module.exports = function(_deployer) {

  _deployer.deploy(TestToken)
};
