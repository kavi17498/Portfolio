import React from "react";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <img src={logo} width={100} height={100} alt="Logo" className="mb-4"/>
        {/* Left Section - Logo & Info */}
        <div className="mb-6 md:mb-0">
        
          <h2 className="text-2xl font-bold text-white">Kavindu Lakshan</h2>
          <p className="mt-2 text-sm">Building Future-Ready Apps & Websites</p>
          
        </div>

        {/* Middle Section - Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Projects", "Resume", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-500 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Call to Action */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Let's Connect</h3>
          <button className="bg-orange-500 text-black px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition">
            Contact Me
          </button>
        </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Kavindu Lakshan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
