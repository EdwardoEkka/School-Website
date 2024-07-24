import React, { useState } from "react";
import GalleryCard from "./components/gallery_card";
import allGalleryData from "../../data/gallery_data";
import { useNavigate } from "react-router-dom";

const GalleryPage = () => {
  const [occasionFilter, setOccasionFilter] = useState("Academic");
  const [yearFilter, setYearFilter] = useState("2023");
  const navigate = useNavigate();

  const handleOccasionFilterChange = (event) => {
    setOccasionFilter(event.target.value);
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
  };

  const filteredData = allGalleryData.filter(
    (item) =>
      (occasionFilter === "All" || item.category === occasionFilter) &&
      (yearFilter === "All" || item.year === yearFilter)
  );

  const displayedOccasions = new Set();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="mb-4 flex space-x-4 mt-10">
        <select
          value={occasionFilter}
          onChange={handleOccasionFilterChange}
          className="border rounded-md p-2"
        >
          <option value="Sports">Sports</option>
          <option value="Academic">Academic</option>
          <option value="Cultural">Cultural</option>
          <option value="Ceremony">Ceremony</option>
        </select>
        <select
          value={yearFilter}
          onChange={handleYearFilterChange}
          className="border rounded-md p-2"
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
      <div className="max-w-6xl flex flex-wrap md:justify-around justify-center">
        {filteredData
          .sort((a, b) => a.occasion.localeCompare(b.occasion))
          .filter((item) => {
            if (!displayedOccasions.has(item.occasion)) {
              displayedOccasions.add(item.occasion);
              return true;
            }
            return false;
          })
          .map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(
                  `/gallery_view?year=${item.year}&occ=${item.occasion}&cat=${item.category}`
                );
              }}
              className="cursor-pointer"
            >
              <GalleryCard data={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default GalleryPage;
