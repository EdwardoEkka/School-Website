import React from "react";

const AdmissionsPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-6xl w-full">
        <section id="process">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admission Process</h2>
          <p className="text-gray-600 mb-6">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </section>

        <section id="criteria">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admission Criteria</h2>
          <p className="text-gray-600 mb-6">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </section>

        <section id="dates">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Important Dates</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Admission Form Availability: <strong>March 1st</strong></li>
            <li>Last Date for Submission: <strong>March 31st</strong></li>
            <li>Entrance Test: <strong>April 15th</strong></li>
            <li>Announcement of Results: <strong>April 30th</strong></li>
          </ul>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <div className="text-gray-600 mb-6">
            <h3 className="font-medium">1. What documents are required?</h3>
            <p>Birth certificate, previous school records, and proof of residence.</p>
            <h3 className="font-medium mt-4">2. Is there an age limit for admission?</h3>
            <p>Yes, children must be at least 5 years old for kindergarten.</p>
            <h3 className="font-medium mt-4">3. How can I prepare my child for the entrance test?</h3>
            <p>Sample tests and study guides are available on our website.</p>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            For any queries, please contact our admission office:
          </p>
          <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
          <p className="text-gray-600 mb-2">Email: admissions@schoolname.edu</p>
          <p className="text-gray-600">Address: 123 School Street, City, State, ZIP</p>
        </section>
      </div>
    </div>
  );
};

export default AdmissionsPage;
