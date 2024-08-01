import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-auto h-auto p-1 rounded-full bg-orange-400">
      {children}
    </button>
  );
};
