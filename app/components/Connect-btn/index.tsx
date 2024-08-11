import React, { useState } from "react";

interface ConnectButtonProps {
  onCreateWallet: () => Promise<string>;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ onCreateWallet }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleClick = async () => {
    if (!walletAddress) {
      try {
        const address = await onCreateWallet();
        setWalletAddress(address);
      } catch (error) {
        console.error("Failed to create wallet:", error);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
    >
      {walletAddress ? (
        <span className="text-sm">{`${walletAddress.slice(
          0,
          6
        )}...${walletAddress.slice(-4)}`}</span>
      ) : (
        "Create Wallet"
      )}
    </button>
  );
};

export default ConnectButton;
