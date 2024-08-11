"use client";
import React, { useState } from "react";
import CreateWalletModal from "../Create-wallet";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      //   console.log("User created:", result);
      const walletAddress = result.result.wallet.wallet_address;
      //   console.log("Wallet address:", walletAddress);
      // Store the wallet address in sessionStorage
      sessionStorage.setItem("walletAddress", walletAddress);

      if (!walletAddress) {
        throw new Error("Wallet address not found in the response");
      }

      toast.success(
        `🦄 User created successfully!
        Wallet address: ${walletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      closeModal();
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("🦄 Error creating user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Don't send the request if there's an error
      return;
    }
  };

  return (
    <header className="w-full py-6 lg:py-4 relative border-b">
      <div className="container mx-auto px-8 lg:px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Maschain Demo</h1>
        </div>
        <button
          onClick={openModal}
          className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          {typeof window !== "undefined" &&
          window.sessionStorage.getItem("walletAddress") ? (
            <span className="text-sm">
              {`${window.sessionStorage
                .getItem("walletAddress")
                .slice(0, 6)}...${window.sessionStorage
                .getItem("walletAddress")
                .slice(-4)}`}
            </span>
          ) : (
            "Create Wallet"
          )}
        </button>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CreateWalletModal onSubmit={handleSubmit} onClose={closeModal} />
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  );
};

export default Header;
