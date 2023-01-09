import React from "react";
import { HiRectangleStack } from "react-icons/hi2";
import { HiMenuAlt3 } from "react-icons/hi";

const MainHeader = () => {
  return (
    <header className="bg-blue-800 w-full h-16 flex items-center justify-between px-6 lg:hidden">
      <div className="flex items-center">
        <HiRectangleStack className="text-3xl text-white" />
      </div>
      <button className="text-white text-3xl">
        <HiMenuAlt3 />
      </button>
    </header>
  );
};

export default MainHeader;
