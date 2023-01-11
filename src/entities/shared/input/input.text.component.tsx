import React from "react";

const InputText: React.FC<{
  name: string;
  defaultValue?: string;
  placeholder: string;
}> = ({ name, placeholder, defaultValue }) => {
  return (
    <input
      className="py-3 px-4 h-11 rounded-md w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none border border-gray-300/50"
      name={name}
      id={name}
      defaultValue={defaultValue}
      type="text"
      aria-label={name}
      placeholder={placeholder}
    />
  );
};

export default InputText;
