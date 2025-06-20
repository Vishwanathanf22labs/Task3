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
    <div className="p-4 min-h-full text-sm bg-white">
      <h2 className="font-bold mb-3 text-base">Men's Shoes (1381)</h2>

      <ul className="space-y-2 text-gray-700 mb-6">
        {categories.map((item, idx) => (
          <li key={idx} className="hover:underline cursor-pointer">
            {item}
          </li>
        ))}
      </ul>

      {filters.map((filter, idx) => (
        <div key={idx} className="border-t border-gray-300 py-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFilter(filter)}
          >
            <p className="font-medium">{filter}</p>
            {openFilters[filter] ? <FaChevronUp /> : <FaChevronDown />}
          </div>

          {openFilters[filter] && (
            <div className="mt-2 pl-2 text-sm space-y-2 text-gray-600">
              {(filterOptions[filter] || []).map((option, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  {option}
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
