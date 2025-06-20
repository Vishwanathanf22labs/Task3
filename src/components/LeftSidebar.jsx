import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const categories = [
  "Lifestyle",
  "Jordan",
  "Running",
  "Basketball",
  "Football",
  "Training & Gym",
  "Skateboarding",
  "Golf",
  "Tennis",
  "Athletics",
  "Walking",
];

const filters = [
  "Gender (1)",
  "Shop By Price",
  "Sale & Offers",
  "Size",
  "Colour",
  "Shoe Height",
  "Brand",
  "Collections",
  "Air Max",
  "Width",
];

const filterOptions = {
  "Gender (1)": ["Men", "Women", "Unisex"],
  "Shop By Price": ["Under ₹5,000", "₹5,000 - ₹10,000", "Above ₹10,000"],
  "Sale & Offers": ["Discounted", "Buy 1 Get 1", "Clearance"],
  Size: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
  Colour: ["Black", "White", "Red", "Blue", "Green"],
  "Shoe Height": ["Low", "Mid", "High"],
  Brand: ["Nike Air", "Nike Zoom", "Nike Free"],
  Collections: ["Running Essentials", "Training Gear"],
  "Air Max": ["Air Max 90", "Air Max 95", "Air Max 270"],
  Width: ["Regular", "Wide", "Extra Wide"],
};

const LeftSidebar = () => {
  const [openFilters, setOpenFilters] = useState({});

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="p-4 min-h-full text-[15px] leading-snug font-light bg-white ml-4">
      <h1 className="font-bold mb-4 text-[24px]">Men's Shoes (1381)</h1>

      <ul className="space-y-3 mb-6">
        {categories.map((item, idx) => (
          <h2 key={idx} className="hover:underline cursor-pointer text-lg font-semibold">
            {item}
          </h2>
        ))}
      </ul>

      {filters.map((filter, idx) => (
        <div key={idx} className="border-t border-gray-200 py-3">
          <div
            className="flex justify-between items-center cursor-pointer py-1"
            onClick={() => toggleFilter(filter)}
          >
            <p className="font-medium">{filter}</p>
            {openFilters[filter] ? (
              <FaChevronUp className="text-xs" />
            ) : (
              <FaChevronDown className="text-xs" />
            )}
          </div>

          {openFilters[filter] && (
            <div className="mt-2 pl-1 space-y-2">
              {(filterOptions[filter] || []).map((option, i) => (
                <label key={i} className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    className="h-[15px] w-[15px] accent-black border-gray-300 rounded-sm" 
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;