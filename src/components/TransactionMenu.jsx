import React from 'react'
import TransactionInterface from './TransactionInterface';
import PoolTable from './PoolTable';
import ComingSoon from './ComingSoon';
import VestTable from './lock/VestTable';
import VoteTable from './vote/VoteTable';
import LoanTable from './loan/LoanTable';
import TransactionChain from './cross-chain/TransactionChain';

function TransactionMenu() {

    const [activeTab, setActiveTab] = React.useState("swap");

    const handleActive = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <div className="w-[75vw] max-w-[600px] mx-auto grid grid-cols-3 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 mb-8">
                <div className="me-2">
                <button onClick={() => handleActive("swap")} aria-current="page" className={`w-full inline-block p-4 ${activeTab === "swap" ?
                        "dark:text-white dark:glassmorphic active glassmorphic-dark dark:hover:glassmorphic" : 
                        "hover:text-gray-600 dark:hover:text-gray-300 dark:hover:bg-darkModeGray"} 
                         rounded-t-lg active`}>
                        Swap
                    </button>
                </div>

                <div className="me-2">
                    <button onClick={() => handleActive("liquidity")} className={`w-full inline-block p-4 rounded-t-lg ${activeTab === "liquidity" ?
                        "dark:text-white dark:glassmorphic active glassmorphic-dark dark:hover:glassmorphic" : 
                        "hover:text-gray-600 dark:hover:text-gray-300 dark:hover:bg-darkModeGray"}`}>Liquidity</button>
                </div>
                
                <div className="me-2">
                    <button onClick={() => handleActive("Rwa-loan")} className={`w-full inline-block p-4 rounded-t-lg ${activeTab === "Rwa-loan" ?
                        "dark:text-white dark:glassmorphic active glassmorphic-dark dark:hover:glassmorphic" : 
                        "hover:text-gray-600 dark:hover:text-gray-300 dark:hover:bg-darkModeGray"}`}>Rwa-loan</button>
                </div>
               
            </div> 


            <div className='min-h-[650px]'>

                {activeTab === "swap" && (
                    <>
                        <TransactionInterface/>
                    </>
                )}

                {activeTab === "liquidity" && (
                    <>
                        <PoolTable/>
                    </>
                )}

                {activeTab === "Rwa-loan" && (
                    <>
                        <LoanTable/>
                    </>
                )}

            </div>
        </>
    )
}

export default TransactionMenu