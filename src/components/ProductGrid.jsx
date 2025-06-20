import React from "react";
import Related from "./Related";
import Relatedimages from "./Relatedimages";
import Relatedsection from "./Relatedsection";

const categories = [
  "Lifestyle",
  "Jordan",
  "Running",
  "Basketball",
  "Football",
  "Training",
  "Tennis",
  "Athletics",
];

const ProductGrid = () => {
  return (
    <div className="bg-white overflow-y-scroll scrollbar-hide max-h-screen">
      <h3 className="md:hidden text-lg font-semibold px-4 pt-4">Men's Shoes</h3>

      <div className="md:hidden flex space-x-6 overflow-x-auto px-4 py-3 scrollbar-hide">
        {categories.map((cate, idx) => (
          <span
            key={idx}
            className="whitespace-nowrap text-sm text-gray-800 font-medium"
          >
            {cate}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border rounded-lg shadow-sm p-4">
            <img
              src="https://via.placeholder.com/200"
              alt="Product"
              className="mb-4 w-full"
            />
            <p className="text-sm font-semibold">Nike Shoe {i + 1}</p>
            <p className="text-gray-500 text-sm">Men's Shoes</p>
            <p className="text-sm mt-1 font-medium">MRP : ₹{14995 + i * 100}</p>
          </div>
        ))}
      </div>

      <Relatedsection />
    </div>
  );
};

export default ProductGrid;
