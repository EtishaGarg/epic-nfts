require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const GOERLI_PRIVATE_KEY = process.env.PRIVATE_GOERLI_ACCOUNT_KEY;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_URL;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY,
      accounts: [`0x${GOERLI_PRIVATE_KEY}`]
    },
  },
};
