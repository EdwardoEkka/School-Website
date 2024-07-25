import React from "react";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 sm:p-6 p-2 mt-5">

      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        
        <div className="mb-4">
          <p className="text-lg font-medium">School Address:</p>
          <p>1234 School Lane, Education City, ST 56789</p>
        </div>
        
        <div className="mb-4">
          <p className="text-lg font-medium">Contact Numbers:</p>
          <p>Phone: (123) 456-7890</p>
          <p>Fax: (123) 456-7891</p>
        </div>
        
        <div className="mb-4">
          <p className="text-lg font-medium">Email:</p>
          <p>info@stjohnsschool.edu</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form className="flex flex-col">
          <label className="mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="border rounded p-2 mb-4"
            placeholder="Your Name"
            required
          />
          
          <label className="mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="border rounded p-2 mb-4"
            placeholder="Your Email"
            required
          />

          <label className="mb-2" htmlFor="message">Message:</label>
          <textarea
            id="message"
            className="border rounded p-2 mb-4"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Location</h2>
        <div className="w-full h-64 rounded-lg overflow-hidden">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097757!2d144.9537363153167!3d-37.81627997975122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1f1e1d%3A0x5045675218ceed0!2sYour%20School%20Name!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;