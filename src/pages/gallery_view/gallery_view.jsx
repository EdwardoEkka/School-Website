import React from "react";
import allGalleryData from "../../data/gallery_data";
import GalleryCard from "../gallery/components/gallery_card";

const GalleryView = () => {
  const currentPageUrl = window.location.href;
  const urlObject = new URL(currentPageUrl);
  const params = new URLSearchParams(urlObject.search);
  const year = params.get("year");
  const category = params.get("cat");
  const occasion = params.get("occ");

  // Filter the gallery data based on URL parameters
  const filteredData = allGalleryData.filter((item) => {
    return (
      (!year || item.year === year) &&
      (!category || item.category === category) &&
      (!occasion || item.occasion === occasion)
    );
  });

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="max-w-6xl flex flex-wrap md:justify-around justify-center">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <GalleryCard key={index} data={item} />
          ))
        ) : (
          <p>No items match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default GalleryView;