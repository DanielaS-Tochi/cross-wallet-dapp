import { useState } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

export default function PhantomConnect() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const resp = await window.solana.connect();
        setWalletAddress(resp.publicKey.toString());

        // Obtener balance
        const connection = new Connection(clusterApiUrl("devnet"));
        const balanceLamports = await connection.getBalance(resp.publicKey);
        setBalance(balanceLamports / 1e9); // convertir a SOL
      } catch (err) {
        console.error("Error connecting to Phantom:", err);
      }
    } else {
      alert("Phantom no está instalado. Instálalo desde https://phantom.app/");
    }
  };

  return (
    <div>
      {walletAddress ? (
        <div>
          <p><strong>Phantom conectado:</strong> {walletAddress}</p>
          <p>Balance: {balance} SOL</p>
        </div>
      ) : (
        <button onClick={connectWallet}>Conectar Phantom</button>
      )}
    </div>
  );
}
