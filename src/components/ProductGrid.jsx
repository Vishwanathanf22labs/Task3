import React from "react";
import Relatedsection from "./Relatedsection";
import Products from "../data/products.json";

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
        {Products.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-sm p-4">
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 w-full object-contain h-[200px]"
            />
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-gray-500 text-sm">{item.category}</p>
            <p className="text-sm mt-1 font-medium">MRP : {item.price}</p>
          </div>
        ))}
      </div>

      <Relatedsection />
    </div>
  );
};

export default ProductGrid;
