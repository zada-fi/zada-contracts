import { ethers } from "hardhat";
async function main() {
  const [signer] = await ethers.getSigners();
  const tokenFactory = await ethers.getContractFactory('FaucetToken');
  const tokenContract = await tokenFactory.connect(signer).deploy('USDC', 'usdc', 18, 0, 0);
  await tokenContract.deployed();
  console.log(`addr is ${tokenContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
