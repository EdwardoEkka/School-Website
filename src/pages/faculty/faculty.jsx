import React from "react";
import FacultyCard from "./components/faculty_card";
import teachers from "../../data/teachers_data";
const FacultyPage = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 items-center">
      <div className="flex flex-col md:flex-row container p-3 max-w-6xl">
        <img
          src="https://keralaschoolvikaspuri.org/wp-content/uploads/2021/07/Principal.jpg"
          className="md:w-1/2 rounded object-contain"
          alt="Principal"
        ></img>
        <div className="md:w-1/2 w-full p-3">
          <h2 className="text-xl font-bold">Dr. Bansidhar Majhi</h2>
          <p className="text-sm text-gray-600">Principal of the School</p>
          <p className="mt-2">
          Welcome to the new academic year at St John's School. We're excited for the opportunities ahead and committed to providing a supportive environment for growth. Students, stay curious and work hard. Parents, your involvement is crucial. Together, let's make this year a success!
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
       {teachers.map((item, index)=>(
        <FacultyCard data={item}/>
       ))}
      </div>
    </div>
  );
};

export default FacultyPage;
