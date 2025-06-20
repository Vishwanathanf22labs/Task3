import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <div className="hidden md:block md:w-1/4 border-r border-gray-200 overflow-y-auto">
        <LeftSidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <ProductGrid />
      </div>
    </div>
  );
};

export default Home;
