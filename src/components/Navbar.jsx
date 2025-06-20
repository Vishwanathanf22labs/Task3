import React from "react";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="hidden md:block">
      <div className="w-full border-b bg-white px-6 py-3 flex items-center justify-between border-white">
    
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          className="h-5 md:h-6"
        />

      
        <ul className="flex space-x-6 font-medium text-lg text-black">
          <li><a href="#" className="hover:underline">New & Featured</a></li>
          <li><a href="#" className="hover:underline">Men</a></li>
          <li><a href="#" className="hover:underline">Women</a></li>
          <li><a href="#" className="hover:underline">Kids</a></li>
          <li><a href="#" className="hover:underline">Sale</a></li>
          <li><a href="#" className="hover:underline">SNKRS</a></li>
        </ul>

  
        <div className="flex items-center space-x-4">
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-8 pr-4 py-1 bg-gray-100 rounded-full text-sm outline-none"
            />
            <FaSearch className="absolute left-2 top-2.5 text-gray-500 text-sm" />
          </div>

       
          <FaHeart className="text-lg text-gray-800 cursor-pointer" />
          <FaShoppingBag className="text-lg text-gray-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
