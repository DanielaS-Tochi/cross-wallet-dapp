import { useState } from "react";
import { ethers } from "ethers";

export default function MetaMaskConnect() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        setAccount(account);

        const balance = await provider.getBalance(account);
        setBalance(ethers.formatEther(balance));
      } catch (err) {
        console.error("Error connecting MetaMask:", err);
      }
    } else {
      alert("MetaMask no está instalado. Instálalo desde https://metamask.io/");
    }
  };

  return (
    <div>
      {account ? (
        <div>
          <p><strong>MetaMask conectado:</strong> {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Conectar MetaMask</button>
      )}
    </div>
  );
}
