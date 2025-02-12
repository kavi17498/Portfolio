import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing menu and close icons
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white rounded-[30px] p-3 flex justify-between items-center fixed top-5 left-0 w-full z-50 px-6">
      {/* Logo */}
      <div>
        <img src={logo} width={85} height={85} alt="Logo" />
      </div>

      {/* Menu Icon (Only visible on mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Navbar Items */}
      <ul
        className={`absolute top-[100%] left-0 w-full bg-black text-center space-y-5 py-5 transition-all duration-300 ${
          isOpen ? 'block' : 'hidden'
        } md:flex md:static md:w-auto md:bg-transparent md:space-y-0 md:space-x-6 md:py-0`}
      >
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"><a href='#cv'>Resume</a></li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"><a href='#project'>Projects</a></li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"><a href='#hireme'>Why Hire Me?</a></li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"><a href='#skills'>Skills & Tools</a></li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white">Contact</li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white">Services</li>
      </ul>
    </nav>
  );
}

export default Navbar;
