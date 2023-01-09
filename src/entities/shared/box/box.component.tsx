import React from "react";

const Box: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="rounded-md w-full bg-white py-5 px-4 relative">
      {children}
    </div>
  );
};

export default Box;
