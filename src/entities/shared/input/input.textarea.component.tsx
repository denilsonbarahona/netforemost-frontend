import React from "react";

const InputTextarea: React.FC<{
  name: string;
  placeholder: string;
}> = ({ name, placeholder }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full min-h-[250px] border border-slate-200/60 rounded-md py-3 px-4"
    />
  );
};

export default InputTextarea;
