import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Input from '@/components/Input/Input';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className={`${inter.className} text-5xl text-skyblue text-center mb-5 mt-10 sticky top-0`}>Simplified Tax Calculator</h1>
      <div className="flex flex-row justify-center items-center w-full h-full p-5">
        <div className=" overflow-y-auto h-full w-1/4 h-full border-r border-gray-300 pr-10">
          <div className="mt-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Gross Total Income
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              HRA Exemption
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="HRA Exemption"
            />
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
              LTA
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="text"
              placeholder="LTA"
            />
          </div>
          <div className="mt-5" data-tooltip="This is a message about">
            <label class="flex items-center space-x-2 block text-gray-700 font-bold mb-2" htmlFor="phone">
            <span>Section 80C</span>

<div class="relative group">
<svg class="w-4 h-4 text-gray-500 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12zm0-6a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z"/>
    </svg>
  <div class="absolute z-10 hidden w-32 p-2 mt-2 text-sm leading-tight text-gray-700 bg-white border rounded shadow-md group-hover:block">
    This is some helpful information!
  </div>
</div>

            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone1"
              type="text"
              placeholder="Section 80C"
            />
          </div>
          <div className="mt-5">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Section 80D
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone2"
              type="text"
              placeholder="Section 80D"
            />
          </div>


          {/* <Input
          id="username1"
          name="name"
          label="Basic Salary*"
          type="text"
          infoMessage="basicSalary"
          placeholder="Basic Salary"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />      
         */}
        </div>
        <div className="w-3/4 h-full pl-10">
          <div className="flex flex-col h-full">
          <div className='w-full flex flex-row mb-2'>
            <div className='w-3/5'></div>
            <div className='w-1/5 flex justify-center font-bold'>Old Tax Regime</div>
            <div className='w-1/5 flex justify-center font-bold'>New Tax Regime</div>
          </div>
          <div className='w-full flex flex-row mb-2 border-b-2'>
            <div className='w-3/5 flex justify-center'>Gross total income</div>
            <div className='w-1/5 flex justify-center'>10,000</div>
            <div className='w-1/5 flex justify-center'>10,000</div>
          </div>
          <div className='w-full flex flex-row mb-2 border-b-2'>
            <div className='w-3/5 flex justify-center'>Deductions</div>
            <div className='w-1/5 flex justify-center'>10,000</div>
            <div className='w-1/5 flex justify-center'>10,000</div>
          </div>
          <div className='w-full flex flex-row mb-2 border-b-2'>
            <div className='w-3/5 flex justify-center'>Net taxable income</div>
            <div className='w-1/5 flex justify-center'>10,000</div>
            <div className='w-1/5 flex justify-center'>10,000</div>
          </div>
          <div className='w-full flex flex-row mb-2 mt-4'>
            <div className='w-3/5 flex justify-center'>Total income tax</div>
            <div className='w-1/5 flex justify-center rounded-none border bg-green-500'>10,000</div>
            <div className='w-1/5 flex justify-center rounded-none border bg-red-500'>10,000</div>
          </div>


<div className='border p-4 mt-2 mb-2'>
  <p>Which tax regime is better? <span className='text-green-700 font-bold'>Old Tax Regime</span></p>
</div>


          <div className='w-full flex flex-row mb-2 mt-5 '>
            <div className='w-3/5 flex justify-center'>Income tax</div>
            <div className='w-1/5 flex justify-center border'>10,000</div>
            <div className='w-1/5 flex justify-center border'>10,000</div>
          </div>
          <div className='w-full flex flex-row mb-2 '>
            <div className='w-3/5 flex justify-center'>Total income tax + 4% CESS</div>
            <div className='w-1/5 flex justify-center border'>10,000</div>
            <div className='w-1/5 flex justify-center border'>10,000</div>
          </div>
          <div className='w-full flex flex-row mb-2 '>
            <div className='w-3/5 flex justify-center'>Total in-hand after tax</div>
            <div className='w-1/5 flex justify-center border'>10,000</div>
            <div className='w-1/5 flex justify-center border'>10,000</div>
          </div>
            </div></div></div></div>)


  
}

export default Home;  