import React from "react";

const MenuItem: React.FC<{
  path: string;
  isActive: boolean;
  children: React.ReactNode;
}> = ({ path, isActive, children }) => {
  return (
    <a
      className={`w-full h-12 rounded-l-full pl-3 flex items-center gap-3 font-Roboto font-medium text-sm ${
        isActive
          ? "lg:bg-slate-100 text-white lg:text-slate-900"
          : "text-white hover:bg-white/5"
      }`}
      href={path}
    >
      {children}
    </a>
  );
};

export default MenuItem;
