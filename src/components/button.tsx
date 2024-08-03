import React from "react";

export const Button = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) => {
  return (
    <button
      onClick={action}
      className="w-auto h-auto p-[15%] opacity-60 hover:opacity-100 hover:scale-110 active:scale-105 rounded-full transition-all bg-white text-gray-600"
    >
      {children}
    </button>
  );
};
