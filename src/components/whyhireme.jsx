import React from "react";
import myphoto1 from "../assets/myphoto1.png"; // Your photo path

const WhyHireMe = () => {
  return (
    <section className="py-5 bg-black text-white flex justify-around items-center m-10 rounded-[30px]" id="hireme">
      {/* Left Side: My Photo */}
      <div className="w-1/3 pl-20 ">
        <img
          src={myphoto1}
          alt="Kavindu Lakshan"
          className="w-2/3 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Question and Answer */}
      <div className="w-2/3 text-left px-6">
        <h2 className="text-3xl font-semibold mb-4">Why Hire Me?</h2>
        
        <ul>
          <li className="mb-2 rounded-full bg-orange-400 text-white px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-black transition-all duration-300">
            • Experienced in Flutter & Web Development
          </li>
          <li className="mb-2 rounded-full bg-orange-400 text-white px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-black transition-all duration-300">
            • Focus on User-Friendly Design
          </li>
          <li className="mb-2 rounded-full bg-orange-400 text-white px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-black transition-all duration-300">
            • Always Learning & Improving
          </li>
          <li className="mb-2 rounded-full bg-orange-400 text-white px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-black transition-all duration-300">
            • Strong Communication Skills
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyHireMe;
