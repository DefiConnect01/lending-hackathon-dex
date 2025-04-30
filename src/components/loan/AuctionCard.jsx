import React, { useState, useEffect } from 'react';
import AuctionBidModal from './AuctionBidModal';

const AuctionCard = ({ token = "DCC", duration = 60, amount = "1.5" }) => {
  const [isBidPlaced, setIsBidPlaced] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [timer, setTimer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [walletData, setWalletData] = useState({
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    balance: "1.8",
    fee: "0.05"
  });

  const hasSufficientFunds = parseFloat(walletData.balance) >= parseFloat(amount);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmBid = () => {
    if (hasSufficientFunds) {
      setIsBidPlaced(true);
      setShowModal(false);

      const countdown = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(countdown);
            setAuctionEnded(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      setTimer(countdown);
    }
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <>
      <div className="max-w-sm rounded-xl shadow-lg p-6 bg-white dark:glassmorphic glassmorphic-dark space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{token} Auction</h2>
          <div className={`text-xs font-semibold px-3 py-1 rounded-full ${auctionEnded ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-800"}`}>
            {auctionEnded ? "Auction Ended" : `${formatTime(timeRemaining)} left`}
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Current Bid:</span>
            <span className="font-medium">{amount} {token}</span>
          </div>
          <div className="flex justify-between">
            <span>Your Balance:</span>
            <span className="font-medium">{walletData.balance} {token}</span>
          </div>
          <div className="flex justify-between">
            <span>Wallet:</span>
            <span className="truncate w-32 text-right text-black dark:text-white">{walletData.address}</span>
          </div>
        </div>

        <div className="pt-4">
          {!auctionEnded ? (
            <button
              onClick={handleOpenModal}
              className="w-full bg-primary/80 hover:bg-primary text-white font-semibold py-2 px-4 rounded transition duration-200"
              disabled={isBidPlaced}
            >
              {isBidPlaced ? "Bid Placed" : "Place Bid"}
            </button>
          ) : (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-500 font-medium py-2 px-4 rounded cursor-not-allowed"
            >
              Auction Ended
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <AuctionBidModal
          onClose={handleCloseModal}
          onConfirm={handleConfirmBid}
          walletData={walletData}
          token={token}
          amount={amount}
          hasSufficientFunds={hasSufficientFunds}
        />
      )}
    </>
  );
};

export default AuctionCard;
