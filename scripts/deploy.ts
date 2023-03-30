import { ethers } from "hardhat";

async function main() {

  const Router = await ethers.getContractFactory("UniswapV2Router02");
  console.log(Router);
  console.log("step 2");
  const factory = '0x072d29B5ea6d681BAD7E3D7B8879b27C65EAE08c';
  const weth = '0xa1EA0B2354F5A344110af2b6AD68e75545009a03';
  const router = await Router.deploy(factory,weth);
  await router.deployed();

  console.log(`UniswapV2 router deployed to ${router.address}`);
  console.log(`Block explorer URL: https://l2scan.scroll.io/address/${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
