import React from "react";

const InputText: React.FC<{
  name: string;
  placeholder: string;
}> = ({ name, placeholder }) => {
  return (
    <input
      className="py-3 px-4 h-11 rounded-md w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none border border-gray-300/50"
      name={name}
      id={name}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default InputText;
