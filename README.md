# BuyMeACoffee solidity contract

This repo contains a contract that implements tipping functionality.

Install dependencies with `yarn`.

Set up by creating a `.env` file, and filling out these variables:

```
BSC_TESTNET_URL=your Alchemy RPC URL
PRIVATE_KEY=your wallet private key
BSCSCAN_API_KEY=your bscscan api key
CONTRACT_ADDRESS=deployed contract address
```

You can get an Alchemy RPC URL for free [here](https://dashboard.alchemy.com/).

## !!! Be very careful with exporting your private key !!!

You can get your Private Key from MetaMask [like this](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key).
If you have any questions or concerns about this, please find someone you trust to sanity check you! 

## !!! Be very careful with exporting your private key !!!

Deploy your contract with:

```
npx hardhat run .\scripts\deploy.ts --network bsc_testnet
```
Verify your contract with:
```
npx hardhat verify --network bsc_testnet CONTRACT_ADDRESS
```

Run an example buy coffee flow locally with:

```
npx hardhat run .\scripts\buy-coffee.ts --network bsc_testnet
```
It will allow you to withdraw any tips stored on the contract.
```
npx hardhat run .\scripts\withdraw.ts
```


