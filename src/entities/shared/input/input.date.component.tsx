import React from "react";

const InputDate: React.FC<{
  name: string;
}> = ({ name }) => {
  return (
    <input
      name={name}
      id={name}
      type="date"
      className="py-3 px-4 h-11 rounded-md w-full border border-slate-200/60"
    />
  );
};

export default InputDate;
