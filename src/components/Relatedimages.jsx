import React from "react";
import Relateddata from "../data/related.json";

const Relatedimages = () => {
  return (
    <div className="px-4 py-6 bg-white mt-4 border-t border-gray-300">
      <h2 className="text-xl font-bold mb-4">Related Stories</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {Relateddata.map((item, index) => (
          <div key={index} className="min-w-[320px] flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-[300px] h-auto "
            />
            <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
            <h3 className="mt-1 text-base font-medium text-gray-800 leading-snug">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relatedimages;