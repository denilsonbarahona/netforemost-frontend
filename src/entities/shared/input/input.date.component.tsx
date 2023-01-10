import React from "react";
import { getHyphenDate } from "../../../utils/dates";

const InputDate: React.FC<{
  name: string;
  defaultValue?: Date | undefined;
}> = ({ name, defaultValue }) => {
  const defaultDate = getHyphenDate(defaultValue);
  return (
    <input
      name={name}
      id={name}
      type="date"
      defaultValue={defaultDate}
      autoComplete="on"
      className="py-3 px-4 h-11 rounded-md w-full border border-slate-200/60"
    />
  );
};

export default InputDate;
