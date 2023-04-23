import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalState";
import { toIndianCurrency } from "@/utils";

const Result = () => {
  const { transactions } = useContext(GlobalContext);
  const { grossSalary, hra, actual80C, actual80Dself, actual80DParent } =
    transactions;

  const standardDeductions = 50000;
  let oldRegimeDeductions;
  oldRegimeDeductions =
    parseInt(standardDeductions) +
    parseInt(hra) +
    parseInt(actual80C) +
    parseInt(actual80Dself) +
    parseInt(actual80DParent);

  const netTaxableIncome_OLD = grossSalary - oldRegimeDeductions;

  const netTaxableIncome_NEW = grossSalary - standardDeductions;

  const oldRegimeTaxCalcuation = () => {
    let incomeTax = 0;
    if (netTaxableIncome_OLD < 500000) {
      return (incomeTax = 0);
    } else if (
      netTaxableIncome_OLD > 500000 &&
      netTaxableIncome_OLD < 1000000
    ) {
      const slab3 = netTaxableIncome_OLD - 500000;
      let result = (slab3 / 100) * 20;
      incomeTax = result + 12500;
    } else if (netTaxableIncome_OLD > 1000000) {
      const slab4 = netTaxableIncome_OLD - 1000000;
      let result = (slab4 / 100) * 30;
      incomeTax = result + 12500 + 100000;
    }
    return toIndianCurrency(incomeTax);
  };

  //new regime is pending
  const newRegimeTaxCalcuation = () => {
    let incomeTax = 0;
    if (netTaxableIncome_NEW < 700000) {
      return (incomeTax = 0);
    } else if (netTaxableIncome_NEW > 700000 && netTaxableIncome_NEW < 900000) {
      const slab3 = netTaxableIncome_NEW - 600000;
      let result = (slab3 / 100) * 10;
      incomeTax = result + 15000;
    } else if (
      netTaxableIncome_NEW > 900000 &&
      netTaxableIncome_NEW < 1200000
    ) {
      const slab4 = netTaxableIncome_NEW - 900000;
      let result = (slab4 / 100) * 15;
      incomeTax = result + 15000 + 30000;
    } else if (
      netTaxableIncome_NEW > 120000 &&
      netTaxableIncome_NEW < 1500000
    ) {
      const slab5 = netTaxableIncome_NEW - 1200000;
      let result = (slab5 / 100) * 20;
      incomeTax = result + 15000 + 30000 + 45000;

    } else if (
      netTaxableIncome_NEW > 1500000 
    ) {
      const slab6 = netTaxableIncome_NEW - 1500000;
      let result = (slab6 / 100) * 30;
      incomeTax = result + 15000 + 30000 + 45000+60000;
    }
    return toIndianCurrency(incomeTax);
  };

  const betterRegimeText=oldRegimeTaxCalcuation() > newRegimeTaxCalcuation() ? "old regime " : "new regime"
  return (
    <div className="w-3/4 h-full pl-10">
      <div className="flex flex-col h-full">
        <div className="w-full flex flex-row mb-2">
          <div className="w-3/5"></div>
          <div className="w-1/5 flex justify-center font-bold">
            Old Tax Regime
          </div>
          <div className="w-1/5 flex justify-center font-bold">
            New Tax Regime
          </div>
        </div>
        <div className="w-full flex flex-row mb-2 border-b-2">
          <div className="w-3/5 flex justify-center">Gross total income</div>
          <div className="w-1/5 flex justify-center">
            {toIndianCurrency(grossSalary)}
          </div>
          <div className="w-1/5 flex justify-center">
            {toIndianCurrency(grossSalary)}
          </div>
        </div>
        <div className="w-full flex flex-row mb-2 border-b-2">
          <div className="w-3/5 flex justify-center">Deductions</div>
          <div className="w-1/5 flex justify-center">
            {toIndianCurrency(oldRegimeDeductions)}
          </div>
          <div className="w-1/5 flex justify-center">
            {toIndianCurrency(standardDeductions)}
          </div>
        </div>
        <div className="w-full flex flex-row mb-2 border-b-2">
          <div className="w-3/5 flex justify-center">Net taxable income</div>
          <div className="w-1/5 flex justify-center">
            {toIndianCurrency(netTaxableIncome_OLD)}
          </div>
          <div className="w-1/5 flex justify-center">
            {toIndianCurrency(netTaxableIncome_NEW)}
          </div>
        </div>
        <div className="w-full flex flex-row mb-2 mt-4">
          <div className="w-3/5 flex justify-center">Total income tax</div>
          <div className="w-1/5 flex justify-center rounded-none border bg-green-500">
            {oldRegimeTaxCalcuation()}
          </div>
          <div className="w-1/5 flex justify-center rounded-none border bg-red-500">
            {newRegimeTaxCalcuation()}
          </div>
        </div>

        <div className="border p-4 mt-2 mb-2">
          <p>
            Which tax regime is better?{" "}
            <span className="text-green-700 font-bold">{betterRegimeText}</span>
          </p>
        </div>

        <div className="w-full flex flex-row mb-2 mt-5 ">
          <div className="w-3/5 flex justify-center">Income tax</div>
          <div className="w-1/5 flex justify-center border">10,000</div>
          <div className="w-1/5 flex justify-center border">10,000</div>
        </div>
        <div className="w-full flex flex-row mb-2 ">
          <div className="w-3/5 flex justify-center">
            Total income tax + 4% CESS
          </div>
          <div className="w-1/5 flex justify-center border">10,000</div>
          <div className="w-1/5 flex justify-center border">10,000</div>
        </div>
        <div className="w-full flex flex-row mb-2 ">
          <div className="w-3/5 flex justify-center">
            Total in-hand after tax
          </div>
          <div className="w-1/5 flex justify-center border">10,000</div>
          <div className="w-1/5 flex justify-center border">10,000</div>
        </div>
      </div>
    </div>
  );
};

export default Result;
