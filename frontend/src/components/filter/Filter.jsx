import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleApply = () => {
    onFilter({ selectedCategory });
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className=" p-3 border rounded-md shadow-sm bg-gray-400 py-1 mt-5 -mb-5">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <label htmlFor="category" className="text-sm font-medium p-1">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="p-1 text-sm border rounded-md"
          >
            <option value="">All Products</option>
            <option value="Phasmophobia">Phasmophobia</option>
            <option value="Valorant">Valorant</option>
          </select>
        </div>
        <button
          onClick={handleApply}
          className="p-2 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
