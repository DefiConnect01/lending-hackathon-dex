import React from "react";
import { FaCalendarDay } from "react-icons/fa";
import moment from "moment";
import { PiCoinsBold } from "react-icons/pi";

const LoanInput = ({
  setLoanValue,
  selectedToken,
  loanValue = 0, 
  readOnly = false
}) => {

  return (
    <div>

      <div className="p-4 flex flex-col bg-lightModeGray dark:bg-darkModeGray rounded-2xl">
        
        <div className="flex items-center justify-between mb-2">

          <div className="flex items-start justify-start flex-col flex-1 gap-2">
            <p className="w-32 text-left">Loan Amount</p>
            <div className="p-3 border-2 border-primary dark:border-white rounded-full">
              <PiCoinsBold className="text-3xl text-primary dark:text-white"/>
            </div>
          </div>


          <div className="flex items-end justify-end flex-col">
            <p>Balance: 0.0</p>
            {!readOnly ? ( 
              <input 
              type="number" 
              className="bg-inherit w-2/3 rounded-lg sm:p-2 p-1 text-right text-3xl font-semibold text-primary dark:text-textGray" 
              placeholder="0.00"
              value={loanValue}
              onChange={(e) => setLoanValue(e.target.value)}
              />
            ): (
              <div>
                <p className="bg-inherit w-2/3 rounded-lg sm:p-2 p-1 text-right text-3xl font-semibold text-primary dark:text-textGray">
                  {loanValue}
                </p>
              </div>
            )}
            <p className="font-bold ">{selectedToken?.symbol || "DCC"}</p>
          </div>

        </div>

        
      </div>

    </div>
  );
};

export default LoanInput;
