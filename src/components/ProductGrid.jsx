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
    <div className="bg-white overflow-y-scroll scrollbar-hide max-h-screen px-4">
      <h3 className="md:hidden text-lg font-semibold pt-4 text-black text-left">
        Men's Shoes
      </h3>

      <div className="md:hidden flex space-x-6 overflow-x-auto py-3 scrollbar-hide">
        {categories.map((cate, idx) => (
          <span
            key={idx}
            className="whitespace-nowrap text-sm text-gray-600 font-medium"
          >
            {cate}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
        {Products.map((item) => (
          <div
            key={item.id}
            className="rounded-lg p-4 flex flex-col items-start text-left"
          >
            <div className="w-full h-[200px] md:h-[250px] flex items-center justify-center mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-red-600">{item.title}</p>
            <p className="text-gray-500 text-sm">{item.category}</p>
            <p className="text-black text-sm mt-1 font-medium">MRP : {item.price}</p>
          </div>
        ))}
      </div>

      <Relatedsection />
    </div>
  );
};

export default ProductGrid;