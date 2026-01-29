// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-custom-gradient z-50">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full border-4 border-white border-t-transparent animate-spin shadow-[0_0_25px_rgba(255,255,255,0.7)]"></div>
        <div className="absolute w-16 h-16 rounded-full border-4 border-white border-b-transparent animate-spin-slow shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
        <div className="absolute w-10 h-10 rounded-full border-4 border-white border-l-transparent animate-spin-fast shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
      </div>
      <p className="absolute bottom-20 text-white text-lg animate-pulse">Loading...</p>
    </div>
  );
};

export default Loader;
