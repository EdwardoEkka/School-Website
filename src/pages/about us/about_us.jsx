import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex items-center flex-col min-h-screen bg-gray-100">
      <div>
        <div className="bg-white rounded-lg shadow-lg mb-8 w-full max-w-6xl sm:p-6 p-3">
          <h1 className="text-2xl sm:text-4xl mb-5">Our History</h1>
          <div className="flex md:flex-row flex-col-reverse gap-2 mb-10">
            <div className="md:w-1/2 w-full">
              <p className="text-base">
                Founded in 1990, our school began as a small educational
                institution with a vision to provide quality education to
                students from diverse backgrounds. Over the years, we have
                evolved into a vibrant community dedicated to fostering academic
                excellence and personal growth. Our founders believed in the
                transformative power of education and aimed to create a
                nurturing environment where students could thrive. With a
                commitment to innovation and inclusivity, the school has
                expanded its curriculum and facilities to meet the changing
                needs of our students. Today, we are proud of our rich history,
                which is marked by numerous achievements, a dedicated faculty,
                and a supportive network of parents and alumni. As we look to
                the future, we remain steadfast in our mission to empower the
                next generation of leaders and lifelong learners. Feel free to
                adjust any details to better fit the specific history and
                context of your school!
              </p>
            </div>
            <div className="rounded-sm md:w-1/2 w-full">
              <img
                src="https://images.jdmagicbox.com/quickquotes/listicle/dp-contract-img-glry_1718199202610_t4727_1116x718.jpg"
                alt="history"
              ></img>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl mb-5 text-right">
            Principal's Message
          </h1>
          <div className="flex md:flex-row items-center justify-center flex-col gap-4 mb-10">
            <div className="rounded-sm md:w-1/2 w-full">
              <img
                src="https://keralaschoolvikaspuri.org/wp-content/uploads/2021/07/Principal.jpg"
                alt="history"
                className="rounded-full"
              ></img>
            </div>
            <div className="md:w-1/2 w-full">
              <p className="text-base">
                Welcome to our school community! We are dedicated to nurturing
                each student's potential in a supportive and inclusive
                environment. Our committed faculty strives to inspire a love for
                learning and personal growth. Together, we foster academic
                excellence and character development, preparing our students to
                become responsible, compassionate leaders. Thank you for being
                part of our journey
              </p>
              <h2 className="text-2xl">-Jon Doe</h2>
            </div>
          </div>
          <h2 className="text-2xl sm:text-4xl mb-5">
            Vision, Mission, and Values
          </h2>
          <h3 className="text-xl font-bold mb-2">Vision</h3>
          <p className="text-gray-700 mb-2">
            To be a leading institution that nurtures lifelong learners and
            responsible citizens.
          </p>
          <h3 className="text-xl font-bold mb-2">Mission</h3>
          <p className="text-gray-700 mb-2">
            To provide a safe and inclusive environment that fosters academic
            excellence and personal growth.
          </p>
          <h3 className="text-xl font-bold mb-2">Values</h3>
          <ul className="list-disc list-inside text-gray-700 mb-10">
            <li>Integrity</li>
            <li>Respect</li>
            <li>Excellence</li>
            <li>Collaboration</li>
          </ul>
          <h1 className="text-2xl sm:text-4xl mb-5">Infrastructure</h1>
          <div className="flex md:flex-row flex-col-reverse gap-2 mb-10">
            <div className="md:w-1/2 w-full">
              <p className="text-base">
                Our school boasts state-of-the-art facilities, including modern
                classrooms, a well-equipped library, advanced science and
                computer labs, extensive sports facilities, and a vibrant arts
                center. Each classroom is equipped with the latest educational
                technology to enhance learning. Our library offers a vast
                collection of books, digital resources, and comfortable study
                areas. The science and computer labs feature cutting-edge
                equipment, providing students with hands-on experience in
                various scientific and technological fields. Our sports
                facilities include a gymnasium, athletic fields, and courts for
                various sports, promoting physical fitness and teamwork. The
                arts center is a hub of creativity, offering spaces for music,
                theater, and visual arts. We believe that a conducive learning
                environment, enriched with these resources, is essential for
                student success.
              </p>
            </div>
            <div className="rounder-sm md:w-1/2 w-full">
              <img
                src="https://images.jdmagicbox.com/quickquotes/listicle/dp-contract-img-glry_1718199202610_t4727_1116x718.jpg"
                alt="history"
                className="rounded"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
