// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const ERCStream = await hre.ethers.getContractFactory("ERCStream");
  const ercstream = await ERCStream.deploy("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9");

  await ercstream.deployed();

  console.log("loanContract deployed to :", ercstream.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
