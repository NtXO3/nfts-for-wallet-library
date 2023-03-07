import { useState } from "react";
import { Connect } from "./components";
import { Button } from "./components/Button";
import { UserNFTs } from "./components/UserNFTs";
import { formatAddress } from "./utils";

function App() {
  const [address, setAddress] = useState<`0x${string}` | null>(null);

  if (!address) {
    return <Connect setAddress={setAddress} />;
  }

  return (
    <div className="w-full max-w-6xl mx-auto h-screen py-32 px-8">
      <div className="flex items-center justify-between mb-8 gap-8 flex-wrap">
        <h1 className="text-3xl font-bold">
          All NFTs for&nbsp;
          <span className="text-indigo-500">{formatAddress(address)}</span>
        </h1>
        <Button onClick={() => setAddress(null)}>Disconnect</Button>
      </div>
      <UserNFTs address={address} />
    </div>
  );
}

export default App;
