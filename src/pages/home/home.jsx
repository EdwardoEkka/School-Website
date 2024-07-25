import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const upcomingEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "June 15, 2024",
    description:
      "Join us for a day of friendly competition and sportsmanship as we celebrate our annual sports day.",
  },
  {
    id: 2,
    title: "Science Fair",
    date: "July 20, 2024",
    description:
      "Explore the wonders of science at our annual science fair, featuring exciting experiments and innovative projects.",
  },
  {
    id: 3,
    title: "Art Exhibition",
    date: "August 5, 2024",
    description:
      "Immerse yourself in the creativity of our talented students at our art exhibition showcasing a variety of artistic mediums.",
  },
  {
    id: 4,
    title: "Music Concert",
    date: "September 10, 2024",
    description:
      "Enjoy an evening of melodious performances as our music students take the stage for an unforgettable concert.",
  },
  {
    id: 5,
    title: "Cultural Festival",
    date: "October 1, 2024",
    description:
      "Celebrate the diversity of cultures at our annual cultural festival, featuring traditional dances, music, and cuisine.",
  },
];

const facilities = [
  {
    id: 1,
    title: "Science Lab",
    description: "Well-equipped labs for physics, chemistry, and biology.",
    image: "https://rnsischool.edu.in/wp-content/uploads/2020/11/lib-1-1-1.jpg",
  },
  {
    id: 2,
    title: "Playground",
    description: "A spacious playground for outdoor activities and sports.",
    image: "https://designsandlines.co.uk/wp-content/uploads/2016/07/IMG_1051-1024x768.jpg",
  },
  {
    id: 3,
    title: "Library",
    description: "A vast collection of books and resources for students.",
    image: "https://www.pragnyatlibrary.com/wp-content/uploads/2020/12/library-1920-high-1.jpg",
  },
  {
    id: 4,
    title: "Computer Lab",
    description: "Modern computers and software for tech education.",
    image: "https://5.imimg.com/data5/DJ/PV/GLADMIN-64970456/computer-lab-class.png",
  },
  {
    id: 5,
    title: "Art Room",
    description: "Creative space for students to explore their artistic talents.",
    image: "https://www.calcuttais.edu.in/wp-content/uploads/2018/12/art1.jpg",
  },
];

const Homepage = () => {

  return (
    <div className="flex flex-col items-center">
      {/* Carousel Section */}
      <Carousel
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        showThumbs={false}
      >
        <img src="./images/school-1.jpg" alt="School-1"></img>
        <img src="./images/school-2.jpg" alt="School-2"></img>
        <img src="./images/school-3.jpg" alt="School-3"></img>
        <img src="./images/school-4.jpg" alt="School-2"></img>
      </Carousel>
      <div className="p-3 mt-5 max-w-6xl w-full">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 w-full p-2">
            <img
              src="./images/school.jpg"
              alt="St John's School"
              className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center px-4">
            <h2 className="text-2xl font-bold mb-2">Welcome to St John's</h2>
            <p className="text-lg text-gray-700">
              St. John's is firmly committed to the cause of education with emphasis on innovative concepts and techniques. The school inculcates a strong sense of nationalism in its students and appreciation of Indian art and culture. Along with intellectual nourishment, the school's curriculum incorporates a rich cultural and aesthetic program.
            </p>
          </div>
        </div>
        <div className="mt-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-2">Safe Environment</h3>
          <p className="text-gray-700">
            We provide a safe and secure environment for all students to learn and grow.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-2">Academic Excellence</h3>
          <p className="text-gray-700">
            Our focus on academic excellence ensures that students reach their full potential.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-2">Personal Growth</h3>
          <p className="text-gray-700">
            We support students' personal growth by fostering their talents and interests.
          </p>
        </div>
        </div>
        <div className="mt-10 max-w-6xl w-full">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-700 font-bold mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">Our Facilities</h2>
        <Carousel
          showIndicators={true}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
        >
          {facilities.map((facility) => (
            <div key={facility.id} className="flex flex-col items-center p-4">
              <img
                src={facility.image}
                alt={facility.title}
                className="rounded-lg shadow-lg mb-4 max-w-[600px] sm:h-[400px] h-[300px] object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
              <p className="text-gray-700 text-center">{facility.description}</p>
            </div>
          ))}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Homepage;