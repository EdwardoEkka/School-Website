import React, { useState } from 'react';
import allToppersData from "../../../data/toppers_data";
import ToppersCard from "./toppers_card";

const ToppersList = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Function to filter toppers based on class and year
  const filterToppers = (className) => {
    return allToppersData.filter(item => item.class === className && item.year === selectedYear);
  };

  // Get toppers for each category
  const classXToppers = filterToppers("X");
  const classXIIScienceToppers = filterToppers("XII")?.filter(item => item.stream === "SCIENCE");
  const classXIICCommerceToppers = filterToppers("XII")?.filter(item => item.stream === "COMMERCE");

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="year-select" className="mr-2">Select Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border rounded p-1"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <h2 className="text-2xl font-bold mb-4">Class X Toppers</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {classXToppers.map((item, index) => (
          <ToppersCard key={index} data={item} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Class XII Science Toppers</h2>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {classXIIScienceToppers.map((item, index) => (
          <ToppersCard key={index} data={item} />
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Class XII Commerce Toppers</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {classXIICCommerceToppers.map((item, index) => (
          <ToppersCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ToppersList;