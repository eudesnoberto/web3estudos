require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/v18XP8R3c91Bsm4AapYvpMph8d9VLy6A',
      accounts: ['24af6043b3296f26fabf420ad49105120c0f7d3e911ec236497294f4737055d4'],
    },
  },
};