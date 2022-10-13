const main = async() => {
    // const [owner, randomPerson] = await hre.ethers.getSigners();
    const myEpicNFTContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const myEpicNFTContract = await myEpicNFTContractFactory.deploy();
    await myEpicNFTContract.deployed();

    console.log("Contract deployed to: ", myEpicNFTContract.address);

    let txn = await myEpicNFTContract.makeAnEpicNFT();
    await txn.wait();

    txn = await myEpicNFTContract.makeAnEpicNFT();
    await txn.wait();

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