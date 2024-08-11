"use client";
import React, { useState } from "react";

const CreateWalletModal = ({ onSubmit, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ic, setIc] = useState("");
  const [walletName, setWalletName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, ic, walletName });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Create Wallet</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ic" className="block mb-2">
              IC
            </label>
            <input
              type="text"
              id="ic"
              value={ic}
              onChange={(e) => setIc(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="walletName" className="block mb-2">
              Wallet Name
            </label>
            <input
              type="text"
              id="walletName"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWalletModal;
