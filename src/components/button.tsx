import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-auto h-auto p-[15%] hover:scale-110 active:scale-105 rounded-full transition-all bg-orange-400">
      {children}
    </button>
  );
};
