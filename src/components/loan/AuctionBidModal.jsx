import React, { useState, useEffect } from 'react';

const AuctionBidModal = ({ 
  onClose, 
  onConfirm, 
  walletData, 
  token, 
  amount,         // suggested/default bid
  minBid = "1.0", // minimum acceptable bid
  hasSufficientFunds 
}) => {
  const [bidAmount, setBidAmount] = useState(amount);

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const isValidBid = parseFloat(bidAmount) >= parseFloat(minBid);
  const hasEnoughBalance = parseFloat(walletData.balance) >= (parseFloat(bidAmount) + parseFloat(walletData.fee));
  const canBid = isValidBid && hasEnoughBalance;

  const handleChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleConfirm = () => {
    if (canBid) {
      onConfirm(bidAmount);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-bold mb-4">Place Your Bid</h3>
        
        <div className="space-y-3 mb-6">
          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Your Wallet</p>
            <p className="font-mono">{formatAddress(walletData.address)}</p>
          </div>

          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Balance</p>
            <p className="font-semibold">{walletData.balance} {token}</p>
          </div>

          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <label className="text-sm text-gray-500 dark:text-gray-400 mb-1 block">Bid Amount (Min: {minBid} {token})</label>
            <input
              type="number"
              min={minBid}
              value={bidAmount}
              onChange={handleChange}
              className="w-full bg-white dark:bg-gray-800 border rounded px-3 py-2 text-gray-800 dark:text-white focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimated Fee</p>
            <p className="font-semibold">{walletData.fee} {token}</p>
          </div>

          {!isValidBid && (
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
              <p className="text-sm text-yellow-600 dark:text-yellow-300">
                Your bid must be at least {minBid} {token}.
              </p>
            </div>
          )}

          {!hasEnoughBalance && (
            <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-300">
                Insufficient funds to place this bid.
              </p>
            </div>
          )}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 border border-gray-300 dark:border-gray-600 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className={`flex-1 py-2 rounded text-white transition duration-200 ${
              canBid ? "bg-primary hover:bg-primary/90" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!canBid}
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionBidModal;
