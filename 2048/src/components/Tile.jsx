import React from "react";
import clsx from "clsx";

const Tile = ({ value, isNew, isMerged }) => {
  const tileClass = clsx(
    "flex items-center justify-center w-20 h-20 max-sm:w-16 max-sm:h-16 text-2xl font-bold rounded-md transition duration-300 ease-in-out transform",
    {
      "bg-gradient-to-r from-gray-300 to-gray-500 text-gray-700": value === 0,
      "bg-gradient-to-r from-indigo-200 to-indigo-400 text-gray-800": value === 2, 
      "bg-gradient-to-r from-indigo-300 to-indigo-500 text-gray-800": value === 4, 
      "bg-gradient-to-r from-teal-300 to-teal-500 text-gray-800": value === 8, 
      "bg-gradient-to-r from-green-200 to-green-400 text-gray-800": value === 16,
      "bg-gradient-to-r from-green-300 to-green-500 text-gray-800": value === 32, 
      "bg-gradient-to-r from-blue-300 to-blue-500 text-gray-800": value === 64, 
      "bg-gradient-to-r from-blue-400 to-blue-600 text-gray-800": value === 128, 
      "bg-gradient-to-r from-purple-400 to-purple-600 text-gray-800": value === 256, 
      "bg-gradient-to-r from-purple-500 to-purple-700 text-gray-800": value === 512, 
      "bg-gradient-to-r from-pink-500 to-pink-700 text-white": value === 1024, 
      "bg-gradient-to-r from-red-500 to-red-700 text-white": value === 2048, 
      "animate-appear": isNew, 
      "animate-merge": isMerged,
    }
  );

  return <div className={tileClass}>{value !== 0 && value}</div>;
};

export default Tile;

