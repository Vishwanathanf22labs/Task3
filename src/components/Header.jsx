import React from "react";
import { FaSearch, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full border-b bg-[#F5F5F5] px-4 py-2 flex items-center justify-between md:justify-start md:space-x-6 border-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
        alt="Nike Logo"
        className="h-5 md:h-6"
      />

      <div className="flex items-center space-x-4 ml-auto md:hidden">
        <FaSearch className="text-black-300 text-lg" />
        <FaUser className="text-black-300 text-lg" />
        <FaShoppingBag className="text-black-300 text-lg" />
        <FaBars className="text-black-300 text-lg" />
      </div>

      <div className="hidden md:flex ml-auto items-center space-x-6 text-sm text-gray-700">
        <a href="#" className="hover:underline">Find a Store |</a>
        <a href="#" className="hover:underline">Help |</a>
        <a href="#" className="hover:underline">Join Us |</a>
        <a href="#" className="hover:underline">Sign In </a>
      </div>
    </header>
  );
};

export default Header;
