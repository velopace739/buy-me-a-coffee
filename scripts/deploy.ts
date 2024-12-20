// scripts/deploy.ts

import { ethers } from "hardhat";

async function main() {
  // We get the contract to deploy.
  const BuyMeACoffee = await ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();

  console.log("BuyMeACoffee deployed to:", await buyMeACoffee.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });