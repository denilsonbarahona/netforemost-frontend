import React from "react";

const InputSelect: React.FC<{
  name: string;
  children: React.ReactNode;
  defaultValue?: string;
}> = ({ name, children, defaultValue }) => {
  return (
    <select
      id={name}
      defaultValue={defaultValue}
      name={name}
      aria-label={name}
      className="px-4 h-11 rounded-md w-full border border-slate-200/60 appearance-none bg-select-arrow bg-arrow-position bg-no-repeat bg-[length:24px_24px]"
    >
      {children}
    </select>
  );
};

export default InputSelect;
