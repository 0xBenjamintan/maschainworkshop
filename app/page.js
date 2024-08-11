import Image from "next/image";
import CreateWalletModal from "./components/Create-wallet";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className="font-bold text-2xl uppercase text-center">
        Welcome to Maschain Workshop Demo
      </h1>
      <p className="text-sm text-gray-500 lowercase font-normal mt-4">
        Create Wallet to Get Started
      </p>
    </main>
  );
}
