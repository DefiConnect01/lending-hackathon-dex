 import { createContext, useState, useContext, useEffect, useCallback } from 'react';
// import {ZNSConnect} from 'zns-sdk';
import { useAppKitAccount } from "@reown/appkit/react";
import { createWalletClient, http} from 'viem';
// import { privateKeyToAccount } from 'viem/accounts';

export const LoanContext = createContext();

export default function LoanProvider({ children }) {
  const { address, isConnected } = useAppKitAccount();
  const [loan, setLoan] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [attemptsCount, setAttemptsCount] = useState(0);
  const [hasAttemptedRegistration, setHasAttemptedRegistration] = useState(false);

  const walletClient = createWalletClient({
    account,
    transport: http("https://rpc.creatorchain.io")
  });


  const createLoan = useCallback(async (
    

  ) => {
    
  }, []);

  const lend = useCallback(async (
    loanId
  ) => {
      
    

    
  // Reset everything when address changes
 
  }, [address]);

  const repayLoan = useCallback(async (
    loanId
  ) => {
    
  // Reset everything when address changes
 
  }, [address]);

  const  liquidateLoan = useCallback(async (
    loanId
  ) => {
    
  // Reset everything when address changes
 
  }, [address]);

  const   getHealthFactor = useCallback(async (
    loanId
  ) => {
    
  // Reset everything when address changes
 
  }, [address]);


  // Function to manually trigger retry with a new domain name
  const getLoanDetails = useCallback(async () => {
   
  }, [isConnected, address, attemptsCount, generateDomainName, registerDomain]);

  return (
    <LoanContext.Provider value={{ 
      createLoan,
      lend,
      repayLoan,
      liquidateLoan,
      getHealthFactor,
      getLoanDetails
       // Replaced attemptRetry with manualRetry
    }}>
      {children}
    </LoanContext.Provider>
  );
}

