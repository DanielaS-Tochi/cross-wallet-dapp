import MetaMaskConnect from "./components/MetaMaskConnect";
import PhantomConnect from "./components/PhantomConnect";

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cross Wallet DApp 🚀</h1>
      <MetaMaskConnect />
      <hr />
      <PhantomConnect />
    </div>
  );
}
