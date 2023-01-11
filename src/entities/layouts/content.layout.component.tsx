import React from "react";

const ContentLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full min-h-full bg-slate-100 rounded-[32px] p-6">
      {children}
    </div>
  );
};

export default ContentLayout;
