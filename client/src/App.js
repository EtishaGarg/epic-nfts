import React from "react";
import {ethers} from "ethers";
import abi from "./utils/MyEpicNFT.json";
import './App.css';



function App() {

  const [currentAccount, setCurrentAccount] = React.useState("");
  const contractAddress = "0x9639D25f7F7fAc7347DC4C89BC8a2bf2d18bF9De";
  const contractABI = abi.abi;
  const OPENSEA_LINK = "https://testnets.opensea.io/assets/goerli/"+contractAddress;

  const CheckIfWalletIsConnected = async() => {
    try {
      const {ethereum} = window;

      if(!ethereum) {
        console.log("Make sure you have Metamask!");
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts"});

      if(accounts.length !== 0){
        console.log("Found an authorized account: ",accounts[0]);
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No authorized account found");
      }
    } catch(error) {
      console.log(error);
    }
  }

  const connectWallet = async() => {
    try {
      const {ethereum} = window;

      if(!ethereum){
        alert("Get Metamask!");
      }
        const accounts = await ethereum.request({ method: "eth_requestAccounts"});
        console.log("Account connected ",accounts[0]);
        setCurrentAccount(accounts[0]);
    } catch(error) {
      console.log(error);
    }
  }


  const mintNFT = async() => {
    try {
      const {ethereum} = window;
      
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const epicNFTContract = new ethers.Contract(contractAddress, contractABI, signer);

        let txn = await epicNFTContract.makeAnEpicNFT()
        console.log("Mining ",txn.hash);

        await txn.wait();
        console.log("Mined ",txn.hash);
      }
    } catch(error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    CheckIfWalletIsConnected();
    // initCount();
    // eslint-disable-next-line
  },[]);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">Each unique. Each beautiful. Discover your NFT today.</p>

        {!currentAccount ? (
          <button className="cta-button connect-wallet-button" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div>
            <button className="cta-button mint-button" onClick={mintNFT}>
              Mint NFT
            </button>
            <button
              type="button"
              className="cta-button opensea-button"
              onClick={(e) => {
                e.preventDefault();
                window.open(OPENSEA_LINK, "_blank");
                // window.location.href=OPENSEA_LINK;
                }}
            > Check on Opensea</button>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}

export default App;
