import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">2048</h1>
      <Link to="/game">
        <button className="text-2xl font-semibold bg-gray-800 hover:bg-orange-500 rounded-md text-white py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105">
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default StartPage;
