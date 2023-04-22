import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import React from "react";

import UserInputs from "@/components/UserInputs";
import Results from "@/components/Results";
import { GlobalProvider } from "@/context/GlobalState";

const Home = () => {
  return (
    <GlobalProvider>
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1
        className={`${inter.className} text-5xl text-skyblue text-center mb-5 mt-10 sticky top-0`}
      >
        Simplified Tax Calculator
      </h1>
      <div className="flex flex-row justify-center items-center w-full h-full p-5">
        <UserInputs />
        <Results />
      </div>
    </div>
    </GlobalProvider>
  );
};

export default Home;
