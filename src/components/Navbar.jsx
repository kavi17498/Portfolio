import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="bg-black text-white rounded-[30px] p-2 flex justify-around items-center  m-10 z-50 ">
      {/* Left Side */}
      <ul className="flex gap-30">
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"><a href='#cv'>Resume</a></li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"><a href='#project'>Projects</a></li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"> <a href='#hireme'> Why Hire me?</a></li>
      </ul>

      {/* Logo in Center */}
      <div><img src={logo} width={85} height={85} alt="Logo" /></div>

      {/* Right Side */}
      <ul className="flex gap-30">
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white"> <a href='#skills'>Skills & Tools</a> </li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white">Contact</li>
        <li className="cursor-pointer px-4 py-2 rounded-full transition duration-300 hover:bg-orange-400 hover:text-white">Services</li>
      </ul>
    </nav>
  );
}

export default Navbar;
