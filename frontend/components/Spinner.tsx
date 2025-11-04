// Spinner.tsx
"use client";

import React from "react";

interface SpinnerProps {
  color?: "blue" | "green" | "red" | "yellow" | "purple"; 
}

const Spinner = ({ color = "blue" }: SpinnerProps) => {
  const colorClassMap: Record<string, string> = {
    green: "border-t-green-500",
    blue: "border-t-blue-500",
    red: "border-t-red-500",
    yellow: "border-t-yellow-500",
    purple: "border-t-purple-500",
  };

  const borderColorClass = colorClassMap[color] || "border-t-green-500";

  return (
    <div className="flex items-center justify-center w-full py-12">
      <div
        className={`rounded-full border-4 border-gray-200 ${borderColorClass} animate-spin
          w-8 h-8 sm:w-10 sm:h-10 md:w-24 md:h-24 lg:w-32 lg:h-32`}
      ></div>
    </div>
  );
};

export default Spinner;
