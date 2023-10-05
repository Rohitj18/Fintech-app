import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCard from "./CreditCard";
function Wallet() {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] mt-10">
      <div className="text-5xl font-bold">
        Add Money to your wallet
      </div>
      <CreditCard />
    </div>
  );
}
export default Wallet;
