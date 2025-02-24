import React, { useState } from "react";

const Button = ({ buttonName, isActive, onClick }) => {

  return (
    <button
      onClick={onClick}
      className={`py-1 rounded-full text-lg px-3 transition-all duration-[.3s] 
        ${isActive ? "bg-primary text-white" : "text-black bg-secend"}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
