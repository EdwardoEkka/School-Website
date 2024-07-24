import React from "react";
import ToppersList from "./components/toppers_list";
import ExtracurricularData from "../../data/extracurricular_data";
const StudentsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div>
        <div className="max-w-6xl">
          <img src="./images/education-1.jpg" alt="Education" />
        </div>
        <div className="max-w-6xl p-3">
          <div className="container mx-auto p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-8">
              Student Life
            </h1>

            {/* Extracurricular Activities Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Extracurricular Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ExtracurricularData.map((item, index) => (
                  <div className="bg-white rounded-lg shadow p-4">
                    <img
                      src={item.picture}
                      alt={item.activity}
                      className="rounded-t-lg mb-4"
                    />
                    <h3 className="font-semibold">{item.activity}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Achievements and Accolades
              </h2>
              <ToppersList />
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Student Council and Leadership Opportunities
              </h2>
              <p>
                The Student Council plays a crucial role in fostering leadership
                skills and representing the student body. It provides a platform
                for students to voice their opinions, organize events, and
                contribute to the school community. Students interested in
                participating can join through elections held annually, where
                they can campaign for positions such as President, Vice
                President, Secretary, or Treasurer. Additionally, there are
                various committees within the council focused on specific areas
                like fundraising, community service, and event planning.
              </p>
              <div className="bg-white rounded-lg shadow p-4 mt-4">
                <h3 className="font-semibold">Leadership Programs</h3>
                <p>
                  Our school offers several leadership programs designed to
                  develop essential skills and prepare students for future
                  roles. These programs include:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Student Leadership Academy:</strong> A year-long
                    program that includes workshops, mentorship, and hands-on
                    projects to enhance leadership capabilities.
                  </li>
                  <li>
                    <strong>Peer Mentoring Program:</strong> Provides
                    opportunities for older students to mentor younger students,
                    fostering a supportive school environment and building
                    leadership skills.
                  </li>
                  <li>
                    <strong>Community Service Leadership:</strong> Focuses on
                    organizing and participating in community service projects,
                    helping students develop organizational and leadership
                    skills while making a positive impact.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
