"use client";

import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const AddProductBtn = () => {
  const [addToCart, setAddToCart] = useState(0);
  const handleIncrease = (e: any) => {
    setAddToCart(addToCart + 1);
  };
  const handleDecrease = () => {
    if (addToCart > 0) {
      setAddToCart(addToCart - 1);
    }
  };
  return (
    <div>
      <div className="w-[160px] flex items-center justify-between "> 
        
        <div
          onClick={handleDecrease}
          className="w-8 cursor-pointer  border h-8 flex items-center justify-center"
        >
          <BiMinus size={25} />
        </div>
        <span>{addToCart}</span>
        <div
          onClick={handleIncrease}
          className="w-8 cursor-pointer  border h-8 flex items-center justify-center"
        >
          <BiPlus size={25} />
        </div>
      </div>
    </div>
  );
};

export default AddProductBtn;
