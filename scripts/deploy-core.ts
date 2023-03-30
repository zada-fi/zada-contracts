import { ethers } from "hardhat";

async function main() {

  const Univ2 = await ethers.getContractFactory("UniswapV2Factory");
  console.log(Univ2);
  const feeToSetter = '0xbF1a75CAd8842107218c5c9980ACBa46b332bf34';
  const univ2 = await Univ2.deploy(feeToSetter);
  console.log("step 2");
  let tx_hash = await univ2.deployed();

  //console.log(univ2.INIT_CODE_HASH());
  console.log(`UniswapV2 factroy deployed to ${univ2.address},tx hash ${tx_hash}`);
  console.log(`Block explorer URL: https://l2scan.scroll.io/address/${univ2.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
