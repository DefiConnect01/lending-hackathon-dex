import React, { useState } from "react";
import { useTable } from "react-table";
import { voteTableColumns, voteData } from "../../constants/tableConfig";
import LoanCard from "./LoanCard";
import HamburgerMenu from "../shared/HamburgerMenu";
import { useSearchParams } from "react-router-dom";
import AuctionCard from "./AuctionCard";

const LoanTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: voteTableColumns, data: voteData });
  const menuItems = [
      { label: 'Create Loan', href: '/Rwa-loan' },
      { label: 'Auction', href: '/?auction=true' },
      { label: 'Pay Loan', href: '/repay-loan' },
    ]
    const onMenuItemClick = (item) =>{
      console.log(item)
    }

  const [searchParams] = useSearchParams();

  const auction = searchParams.get("auction");

  return (
    <div className="m-5 overflow-x-auto min-h-[400px]">
      <div className="flex justify-start mb-8 mt-2 ml-4">
        {/* <NavigateButton text="Create Loan" link="/Rwa-loan" icon={<FiPlusSquare />} /> */}
        <HamburgerMenu menuItems={menuItems} onMenuItemClick={onMenuItemClick}/>
      </div>

      {auction !== "true" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <LoanCard/>
          <LoanCard/>
          <LoanCard/>
          <LoanCard/>
        </div>
        ):(

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <AuctionCard duration={86400}/>
            <AuctionCard duration={86400}/>
            <AuctionCard duration={86400}/>
            <AuctionCard duration={86400}/>
          </div>
        )}

    </div>
  );
};

export default LoanTable;
