import React from "react";

export const MaxWrapper = ({ children , className}: { children: React.ReactNode, className?: string }) => {
  return (
    <div className="w-full px-2 md:px-10 2xl:px-64 flex flex-col space-y-4 mt-20 items-center">
      {children}
    </div>
  );
};
