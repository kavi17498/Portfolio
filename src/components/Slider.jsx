import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Importing download icon
import myphoto from '../assets/myphoto.png';
import resume from '../assets/cv/Resume.pdf'

function Slider() {
  return (
    <section className=" flex justify-center items-center px-10 pb-25 mt-30" id='cv'>
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        
        {/* Left Side - Intro Text */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-4xl md:text-6xl font-bold text-black">
            I am <span className="text-orange-400">Kavindu Lakshan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Building Future-Ready Apps & Websites with Flutter & Web Tech
          </p>

          {/* Download CV Button */}
          <a 
            href={resume}
            download 
            className="mt-6 inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
          >
            <FaDownload className="mr-2" /> Download CV
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="mt-6 md:mt-0">
          <img src={myphoto} alt="Kavindu Lakshan" className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full shadow-lg" />
        </div>

      </div>
    </section>
  );
}

export default Slider;
