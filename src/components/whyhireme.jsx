import React from "react";
import myphoto1 from "../assets/myphoto1.png"; // Your photo path

const WhyHireMe = () => {
  return (
    <section
      className="py-5 bg-black text-white flex flex-col md:flex-row justify-center items-center m-5 md:m-10 rounded-[30px] text-center md:text-left"
      id="hireme"
    >
      {/* Left Side: My Photo */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-start px-5 md:pl-20 mb-5 md:mb-0">
        <img
          src={myphoto1}
          alt="Kavindu Lakshan"
          className="w-2/3 md:w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Question and Answer */}
      <div className="w-full md:w-2/3 px-6">
        <h2 className="text-3xl font-semibold mb-4">Why Hire Me?</h2>

        <ul>
          {[
            "Experienced in Flutter & Web Development",
            "Focus on User-Friendly Design",
            "Always Learning & Improving",
            "Strong Communication Skills",
          ].map((item, index) => (
            <li
              key={index}
              className="mb-2 rounded-full bg-orange-400 text-white px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-black transition-all duration-300"
            >
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyHireMe;
