var Web3 = require('web3')
const artifact = require('../artifacts/contracts/UniswapV2Pair.sol/UniswapV2Pair.json')
const initCodeHash = Web3.utils.keccak256(artifact.bytecode)
console.log(initCodeHash)
