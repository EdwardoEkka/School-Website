import React from "react";
import FacultyCard from "./components/faculty_card";

const FacultyPage = () => {
  const facultyData = {
    name: 'Michael Brown',
    subject: 'Mathematics',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
    picture: 'https://www.thoughtco.com/thmb/MHUBZtFmviuUYiOwRU_jrA9qYw0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/480811293-56a939853df78cf772a4ecb8.jpg' // Replace with actual image URL
};
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center">
      <div className="flex flex-col md:flex-row container p-3 max-w-6xl">
        <img
          src="https://keralaschoolvikaspuri.org/wp-content/uploads/2021/07/Principal.jpg"
          className="md:w-1/2 rounded object-contain"
          alt="Principal"
        ></img>
        <div className="md:w-1/2 w-full p-3">
          <h2 className="text-xl font-bold">Dr. John Doe</h2>
          <p className="text-sm text-gray-600">Principal of the School</p>
          <p className="mt-2">
          Welcome to the new academic year at [School Name]. We're excited for the opportunities ahead and committed to providing a supportive environment for growth. Students, stay curious and work hard. Parents, your involvement is crucial. Together, let's make this year a success!
          </p>
          <p className="mt-2">
            <strong>Qualification:</strong> PhD in Educational Leadership
          </p>
          <p className="mt-2">
            <strong>Experience:</strong> 20 years in the field of education
          </p>
        </div>
      </div>
      <div className="max-w-6xl flex flex-wrap md:justify-around justify-center">
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
        <FacultyCard data={facultyData}/>
      </div>
    </div>
  );
};

export default FacultyPage;
