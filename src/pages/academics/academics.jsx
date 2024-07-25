import React, { useState } from "react";

const AcademicsPage = () => {
  const [selectedLevel, setSelectedLevel] = useState("Primary");

  const levels = ["Primary", "Secondary", "Senior Secondary"];
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const subjects = {
    Primary: [
      {
        name: "English",
        description: "Focuses on language skills and literature.",
      },
      {
        name: "Mathematics",
        description: "Covers basic arithmetic and problem-solving.",
      },
      {
        name: "Science",
        description: "Introduces students to various scientific concepts.",
      },
      {
        name: "Social Studies",
        description: "Explores history, geography, and social sciences.",
      },
      {
        name: "Art",
        description:
          "Encourages creativity and self-expression through various art forms.",
      },
      {
        name: "Physical Education",
        description:
          "Promotes physical fitness and teamwork through sports and activities.",
      },
    ],
    Secondary: [
      {
        name: "English",
        description: "Enhances language proficiency and critical thinking.",
      },
      {
        name: "Mathematics",
        description: "Covers advanced mathematical concepts and applications.",
      },
      {
        name: "Science (Physics, Chemistry, Biology)",
        description:
          "Provides in-depth knowledge of various scientific disciplines.",
      },
      {
        name: "Social Studies",
        description:
          "Delves deeper into history, geography, and social sciences.",
      },
      {
        name: "Computer Science",
        description: "Introduces students to programming and technology.",
      },
      {
        name: "Physical Education",
        description: "Focuses on sports, fitness, and overall well-being.",
      },
      {
        name: "Art",
        description:
          "Allows students to explore various art forms and techniques.",
      },
    ],
    SeniorSecondary: {
      Science: [
        {
          name: "Physics",
          description:
            "Covers the fundamental principles of matter and energy.",
        },
        {
          name: "Chemistry",
          description:
            "Explores the composition, structure, and properties of matter.",
        },
        {
          name: "Biology",
          description:
            "Investigates living organisms and their interactions with the environment.",
        },
        {
          name: "Mathematics",
          description:
            "Focuses on advanced mathematical concepts and their applications.",
        },
        {
          name: "Computer Science",
          description:
            "Covers programming, algorithms, and software development.",
        },
        {
          name: "English",
          description:
            "Emphasizes language proficiency and communication skills.",
        },
      ],
      Commerce: [
        {
          name: "Accountancy",
          description:
            "Introduces students to financial accounting and reporting.",
        },
        {
          name: "Business Studies",
          description:
            "Covers various aspects of business management and entrepreneurship.",
        },
        {
          name: "Economics",
          description:
            "Explores the principles of production, distribution, and consumption of goods and services.",
        },
        {
          name: "Mathematics",
          description:
            "Focuses on quantitative methods and their application in business and economics.",
        },
        {
          name: "English",
          description:
            "Emphasizes language proficiency and communication skills in a business context.",
        },
      ],
    },
  };

  const teachingMethodologies = [
    "Interactive lectures",
    "Group discussions",
    "Project-based learning",
    "Hands-on experiments",
    "Field trips and excursions",
    "Guest lectures by industry experts",
  ];

  const educationalResources = [
    "Well-equipped laboratories",
    "Comprehensive library with print and digital resources",
    "Computer labs with internet access",
    "Smart classrooms with multimedia facilities",
    "Educational software and online learning platforms",
    "Career counseling and guidance services",
  ];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-bold mb-2">Subjects</h4>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.Primary.map((subject, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{subject.name}</td>
                        <td className="border px-4 py-2">
                          {subject.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">
                  Teaching Methodologies
                </h4>
                <ul className="list-disc list-inside">
                  {teachingMethodologies.map((methodology, index) => (
                    <li
                      key={index}
                      className="border-b last:border-none px-4 py-2"
                    >
                      {methodology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {selectedLevel === "Secondary" && (
          <div>
            <h3>
              <strong>Grades : </strong>6-10
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-bold mb-2">Subjects</h4>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.Secondary.map((subject, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{subject.name}</td>
                        <td className="border px-4 py-2">
                          {subject.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-2">
                  Educational Resources
                </h4>
                <ul className="list-disc list-inside">
                  {educationalResources.map((resource, index) => (
                    <li
                      key={index}
                      className="border-b last:border-none px-4 py-2"
                    >
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {selectedLevel === "Senior Secondary" && (
          <>
            <h3>
              <strong>Grades : </strong>11-12
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-4">Science Stream</h2>
                <table className="w-full table-auto mb-6">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.SeniorSecondary.Science.map((subject, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{subject.name}</td>
                        <td className="border px-4 py-2">
                          {subject.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Commerce Stream</h2>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Subject</th>
                      <th className="px-4 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.SeniorSecondary.Commerce.map((subject, index) => (
                      <tr key={index}>
                        <td className="border px-4 py-2">{subject.name}</td>
                        <td className="border px-4 py-2">
                          {subject.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AcademicsPage;
