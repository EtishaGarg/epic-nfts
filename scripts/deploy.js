const main = async() => {
    const myEpicNFTContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const myEpicNFTContract = await myEpicNFTContractFactory.deploy();
    await myEpicNFTContract.deployed();

    console.log("myEpicNFTContract address: ", myEpicNFTContract.address);

    // Call the function.
    let txn = await myEpicNFTContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #1")

    txn = await myEpicNFTContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait()
    console.log("Minted NFT #2")

};

const runMain = async() => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch(error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating "Uncaught Fatal Exception" error
    }
};

runMain();