import React from 'react';

const categories = [
  "Best Men's Shoes",
  "New Men's Shoes",
  "Men's Black Running Shoes",
  "Men's Crew Socks",
  "Men's Joggers & Tracksuit Bottoms",
  "Men's Road Running Shoes",
  "Men's Basketball Low-Top Shoes",
  "Turf Football Shoe"
];

const Related = () => {
  return (
    <div className="px-4 py-6 bg-white border-t border-gray-300 mt-3.5">
      <h2 className="text-lg font-semibold mb-4">Related Categories</h2>

      
      <div className="hidden md:grid grid-cols-5 gap-3">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="px-4 py-2 border border-gray-300 rounded-full text-sm text-black hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>

      
      <div className="flex gap-3 overflow-x-auto scrollbar-hide md:hidden">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="whitespace-nowrap px-4 py-2 border border-gray-300 rounded-full text-sm text-black hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Related;
