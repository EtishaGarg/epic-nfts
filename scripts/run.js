const main = async() => {
    // const [owner, randomPerson] = await hre.ethers.getSigners();
    const myEpicNFTContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const myEpicNFTContract = await myEpicNFTContractFactory.deploy();
    await myEpicNFTContract.deployed();

    console.log("Contract deployed to: ", myEpicNFTContract.address);

    // // Get contract balance
    // let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    // console.log("Contract balance: ",hre.ethers.utils.formatEther(contractBalance));

    // let waveCount;
    // waveCount = await waveContract.getTotalWaves();

    // let waveTxn = await waveContract.wave("Hi! How are you?");
    let txn = await myEpicNFTContract.makeAnEpicNFT();
    await txn.wait();
    // await waveTxn.wait();

    txn = await myEpicNFTContract.makeAnEpicNFT();
    await txn.wait();

    // waveCount = await waveContract.getTotalWaves();

    // // Get contract balance to see what happens
    // contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    // console.log("Contract balance: ",hre.ethers.utils.formatEther(contractBalance));

    // waveArray = await waveContract.getAllWaves();
    // console.log(waveArray);
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