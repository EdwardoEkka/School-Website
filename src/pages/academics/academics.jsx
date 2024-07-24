import React, { useState } from "react";

const AcademicsPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("Primary");

  const levels = ["Primary", "Secondary", "Senior Secondary"];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const subjects = {
    Primary: [
      "English",
      "Mathematics",
      "Science",
      "Social Studies",
      "Art",
      "Physical Education",
    ],
    Secondary: [
      "English",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Studies",
      "Computer Science",
      "Physical Education",
      "Art",
    ],
    SeniorSecondary: {
      Science: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "Computer Science",
        "English",
      ],
      Commerce: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "English",
      ],
    },
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 mt-10 mx-2 my-2">
      <div className="flex space-x-4 mb-6 items-start w-full sm:w-auto">
        <div className="hidden sm:flex space-x-4">
          {levels.map((level) => (
            <button
              key={level}
              className={`px-4 py-2 rounded ${
                selectedLevel === level
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border border-blue-500"
              }`}
              onClick={() => setSelectedLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="sm:hidden relative right-0">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedLevel}
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 w-[200px] mt-2 bg-white border border-gray-200 rounded shadow-md">
              {levels.map((level) => (
                <button
                  key={level}
                  className={`block text-left px-4 py-2 w-[200px] ${
                    selectedLevel === level
                      ? "bg-blue-500 text-white"
                      : "text-blue-500"
                  }`}
                  onClick={() => {
                    setSelectedLevel(level);
                    setDropdownOpen(false);
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="w-full max-w-6xl p-4 bg-white rounded shadow-md mb-10">
        {selectedLevel === "Primary" && (
          <div>
            <h3>
              <strong>Grades : </strong>1-5
            </h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Subject</th>
                </tr>
              </thead>
              <tbody>
                {subjects.Primary.map((subject, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedLevel === "Secondary" && (
          <div>
            <h3>
              <strong>Grades : </strong>6-10
            </h3>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Subject</th>
                </tr>
              </thead>
              <tbody>
                {subjects.Secondary.map((subject, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedLevel === "Senior Secondary" && (
          <>
            <h3>
              <strong>Grades : </strong>11-12
            </h3>
            <h2 className="text-2xl font-bold mb-4">Science Stream</h2>
            <table className="w-full table-auto mb-6">
              <thead>
                <tr>
                  <th className="px-4 py-2">Subject</th>
                </tr>
              </thead>
              <tbody>
                {subjects.SeniorSecondary.Science.map((subject, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="text-2xl font-bold mb-4">Commerce Stream</h2>
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Subject</th>
                </tr>
              </thead>
              <tbody>
                {subjects.SeniorSecondary.Commerce.map((subject, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default AcademicsPage;
