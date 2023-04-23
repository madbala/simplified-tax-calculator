import React, { useState,useContext } from "react";
import CurrencyInput from 'react-currency-input-field';

import {GlobalContext} from "@/context/GlobalState";

const UserInputs = () => {
  const [grossSalary, setGrossSalary] = useState(0);
  const [hra, SetHra] = useState(0);
  const [lta,setLta] = useState(0)
  const [eightyC, setEightC] = useState(0);
  const [eightyDSelf, setEightDSelf] = useState(0);
  const [eightyDParent, setEightDParent] = useState(0);

  const {addTransaction}=useContext(GlobalContext)

  let actual80C;
  actual80C = eightyC > 150000 ? 150000 : eightyC;

  let actual80Dself;
  actual80Dself = eightyDSelf > 25000 ? 25000 : eightyDSelf;

  let actual80DParent;
  actual80DParent = eightyDParent > 50000 ? 50000 : eightyDParent;

  const onSubmit =(e)=>{
    e.preventDefault();

    const values={
      grossSalary,
      hra,
      lta,
      actual80C,
      //parseInt
      actual80Dself:+actual80Dself,
      actual80DParent:+actual80DParent
    };
    addTransaction(values)

  }

  return (
    <div className=" overflow-y-auto h-full w-1/4 border-r border-gray-300 pr-10">
      <form onSubmit={onSubmit}>

        <div className="mt-5">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Gross Total Income
          </label>
          <CurrencyInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={grossSalary}
            prefix="₹"
            decimalsLimit={2}
            intlConfig={{ locale: 'en-IN', currency: 'INR' }}
            onValueChange={(value, name) => setGrossSalary(value)}
            placeholder="Gross Total Income"
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Standard Deduction
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Standard Deduction"
            value={50000}
            disabled
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            HRA Exemption
          </label>
          <CurrencyInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            value={hra}
            prefix="₹"
            decimalsLimit={2}
            intlConfig={{ locale: 'en-IN', currency: 'INR' }}
            onValueChange={(value, name) => SetHra(value)}
            placeholder="HRA Exemption"
          />
        </div>
        <div className="mt-5">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirm-password"
          >
            LTA
          </label>
          <CurrencyInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirm-password"
            type="text"
            value={lta}
            prefix="₹"
            decimalsLimit={2}
            intlConfig={{ locale: 'en-IN', currency: 'INR' }}
            onValueChange={(value, name) => setLta(value)}
            placeholder="LTA"
          />
        </div>
        <div className="mt-5" data-tooltip="This is a message about">
          <label
            className="flex items-center space-x-2 block text-gray-700 font-bold mb-2"
            htmlFor="phone"
          >
            <span>Section 80C</span>

            <div className="relative group">
              <svg
                className="w-4 h-4 text-gray-500 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm0-6a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z" />
              </svg>
              <div className="absolute z-10 hidden w-32 p-2 mt-2 text-sm leading-tight text-gray-700 bg-white border rounded shadow-md group-hover:block">
                This is some helpful information!
              </div>
            </div>
          </label>
          <CurrencyInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone1"
            type="text"
            value={eightyC}
            prefix="₹"
            decimalsLimit={2}
            intlConfig={{ locale: 'en-IN', currency: 'INR' }}
            onValueChange={(value, name) => setEightC(value)}
            placeholder="Section 80C"
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Section 80D (self and Family)
          </label>
          <CurrencyInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone2"
            type="text"
            value={eightyDSelf}
            prefix="₹"
            decimalsLimit={2}
            intlConfig={{ locale: 'en-IN', currency: 'INR' }}
            onValueChange={(value, name) => setEightDSelf(value)}
<<<<<<< HEAD
=======
            placeholder="max(Rs 25000)"
>>>>>>> 40533eb2531772da9c23d0c71a5c9665e66c8f7b
          />
        </div>
        <div className="mt-5">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Section 80D (Senior Citizen)
          </label>
          <CurrencyInput
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone3"
            type="text"
            value={eightyDParent}
            prefix="₹"
            decimalsLimit={2}
            intlConfig={{ locale: 'en-IN', currency: 'INR' }}
            onValueChange={(value, name) => setEightDParent(value)}
<<<<<<< HEAD
=======
            placeholder="max(Rs 50000)"
>>>>>>> 40533eb2531772da9c23d0c71a5c9665e66c8f7b
          />
        </div>

        <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Calculate</button>
      </form>
    </div>
  );
};

export default UserInputs;
