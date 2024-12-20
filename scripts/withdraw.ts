// scripts/withdraw.ts

import { ethers } from "hardhat";
import abi from "../artifacts/contracts/BuyMeACoffee.sol/BuyMeACoffee.json";
import { JsonRpcProvider } from "ethers";

async function getBalance(provider: JsonRpcProvider, address: string) {
  const balanceBigInt = await provider.getBalance(address);
  return ethers.formatEther(balanceBigInt);
}

async function main() {
  const PRIVATE_KEY = process.env.PRIVATE_KEY!;
  const BSC_TESTNET_URL = process.env.BSC_TESTNET_URL;

  // Get the contract that has been deployed to bsc testnet.
  const contractAddress = process.env.CONTRACT_ADDRESS!;
  const contractABI = abi.abi;

  // Get the node connection and wallet connection.
  const provider = new ethers.JsonRpcProvider(BSC_TESTNET_URL);

  // Ensure that signer is the SAME address as the original contract deployer,
  // or else this script will fail with an error.
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  // Instantiate connected contract.
  const buyMeACoffee = new ethers.Contract(contractAddress, contractABI, signer);

  // Check starting balances.
  console.log("current balance of owner: ", await getBalance(provider, signer.address), "BNB");
  const contractBalance = await getBalance(provider, await buyMeACoffee.getAddress());
  console.log("current balance of contract: ", await getBalance(provider, await buyMeACoffee.getAddress()), "BNB");

  // Withdraw funds if there are funds to withdraw.
  if (contractBalance !== "0.0") {
    console.log("withdrawing funds..")
    const withdrawTxn = await buyMeACoffee.withdrawTips();
    await withdrawTxn.wait();
  } else {
    console.log("no funds to withdraw!");
  }

  // Check ending balance.
  console.log("current balance of owner: ", await getBalance(provider, signer.address), "BNB");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });