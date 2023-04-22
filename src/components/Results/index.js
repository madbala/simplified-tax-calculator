import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalState";
import { toIndianCurrency } from "@/utils"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Result = () => {
  const { transactions } = useContext(GlobalContext);
  const { grossSalary, hra, actual80C, actual80Dself, actual80DParent, lta } =
    transactions;

  const standardDeductions = 50000;
  let oldRegimeDeductions;
  oldRegimeDeductions =
    parseInt(standardDeductions) +
    parseInt(hra) +
    parseInt(lta) +
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
    return incomeTax;
  };

  //new regime is pending
  const newRegimeTaxCalcuation = () => {
    let incomeTax = 0;
    if (netTaxableIncome_OLD < 700000) {
      return (incomeTax = 0);
    } else if (
      netTaxableIncome_NEW > 500000 &&
      netTaxableIncome_NEW < 1000000
    ) {
      const slab3 = netTaxableIncome_OLD - 500000;
      let result = (slab3 / 100) * 20;
      incomeTax = result + 12500;
    }
    //slab 4 is pending
    return incomeTax;
  };

  const suggestedTaxRegime = oldRegimeTaxCalcuation() > newRegimeTaxCalcuation() ? `Old Tax Regime` : oldRegimeTaxCalcuation() == newRegimeTaxCalcuation() ? `Both Tax Regime values are similar` : `New Tax Regime`
  const data = [
    {
      name: 'Old Tax Regime',
      ["Gross total income"]: grossSalary,
      Deductions: oldRegimeDeductions,
      ["Net taxable income"]: netTaxableIncome_OLD,
      ["Total income tax"]: oldRegimeTaxCalcuation()
    },
    {
      name: 'New Tax Regime',
      ["Gross total income"]: grossSalary,
      Deductions: standardDeductions,
      ["Net taxable income"]: netTaxableIncome_NEW,
      ["Total income tax"]: newRegimeTaxCalcuation()
    }
  ];
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {

      return (
        <div>
          <h1 className="bold">{label}</h1>
          <p >{`Gross Total Income : ${toIndianCurrency(grossSalary)}`}</p>
          <p >{`Deductions : ${label.toLowerCase().includes('old')?toIndianCurrency(oldRegimeDeductions):toIndianCurrency(standardDeductions)}`}</p>
          <p >{`Net Taxable Income : ${label.toLowerCase().includes('old')?toIndianCurrency(netTaxableIncome_OLD):toIndianCurrency(netTaxableIncome_NEW)}`}</p>
          <p >{`Total Income Tax : ${label.toLowerCase().includes('old')?toIndianCurrency(oldRegimeTaxCalcuation()):toIndianCurrency(newRegimeTaxCalcuation())}`}</p>
        </div>
      );
    }

    return null;
  };

  return (<>
    <div className="w-3/4 h-full pl-10">
      <div className="flex flex-col h-3/4">
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
          <div className="w-1/5 flex justify-center">{toIndianCurrency(grossSalary)}</div>
        </div>
        <div className="w-full flex flex-row mb-2 border-b-2">
          <div className="w-3/5 flex justify-center">Deductions</div>
          <div className="w-1/5 flex justify-center">{toIndianCurrency(oldRegimeDeductions)}</div>
          <div className="w-1/5 flex justify-center">{toIndianCurrency(standardDeductions)}</div>
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
            <span className="text-green-700 font-bold">{suggestedTaxRegime}</span>
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

      <ResponsiveContainer width="100%" height="50%">
        <BarChart
        barSize={70}
        barGap={30}
        barCategoryGap={30}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="Gross total income" fill="#8884d8" />
          <Bar dataKey="Deductions" fill="#82ca9d" />
          <Bar dataKey="Net taxable income" fill="#ffc658" />
          <Bar dataKey="Total income tax" fill="red" />
        </BarChart>
      </ResponsiveContainer>


    </div>



  </>
  );
};

export default Result;



