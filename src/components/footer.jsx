import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">St John's School</h3>
            <p className="mb-2">123 School Lane</p>
            <p className="mb-2">City, State, ZIP</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@stjohnsschool.edu</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/admissions" className="hover:underline">Admissions</a></li>
              <li><a href="/academics" className="hover:underline">Academics</a></li>
              <li><a href="/faculty" className="hover:underline">Faculty</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="hover:text-[#00df9a]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="hover:text-[#00df9a]" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} St John's School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
