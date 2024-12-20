import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();

const BSC_TESTNET_URL = process.env.BSC_TESTNET_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    bsc_testnet: {
      url: BSC_TESTNET_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: BSCSCAN_API_KEY,
  }
};

export default config;
