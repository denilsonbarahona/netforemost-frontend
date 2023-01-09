import React from "react";

const InputSelect: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ name, children }) => {
  return (
    <select
      id={name}
      name={name}
      className="px-4 h-11 rounded-md w-full border border-slate-200/60 appearance-none bg-select-arrow bg-arrow-position bg-no-repeat bg-[length:24px_24px]"
    >
      {children}
    </select>
  );
};

export default InputSelect;
