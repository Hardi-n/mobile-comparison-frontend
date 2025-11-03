import React from "react";
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
      <div className="flex max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="items-center gap-3 mb-2 md:mb-0">
          <div className="bg-white text-blue-700 font-extrabold text-xl w-10 h-10 flex items-center justify-center rounded-full shadow-md">
            
        <img src={logo} alt="App Logo" className="logo"/>
          <h1 className="text-3xl font-bold tracking-wide drop-shadow-md">
            SMART CHOICE
          </h1>
          </div>
        </div>

        {/* Subtitle */}
        <span className="header span text-sm md:text-base italic text-gray-200 text-center md:text-right">
          Your AI-powered Phone Comparison Tool
        </span>
      </div>
    </header>
  );
}

export default Header;
