import React from "react";

const InputTextarea: React.FC<{
  name: string;
  placeholder: string;
  defaultValue?: string;
}> = ({ name, placeholder, defaultValue }) => {
  return (
    <textarea
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full min-h-[250px] border border-slate-200/60 rounded-md py-3 px-4"
    />
  );
};

export default InputTextarea;
