"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);

  useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  const clearWalletAddress = () => {
    sessionStorage.removeItem("walletAddress");
    setWalletAddress(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="font-bold text-2xl uppercase text-center">
        Maschain API Workshop Demo
      </h1>
      <p className="text-sm text-gray-500 lowercase font-normal mt-4">
        {walletAddress ? (
          <>
            {`Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(
              -4
            )}`}
            <div className="flex">
              <button
                onClick={clearWalletAddress}
                className="mt-4 border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                Disconnect Wallet
              </button>
            </div>
          </>
        ) : (
          "Create Wallet to Get Started"
        )}
      </p>
    </main>
  );
}
