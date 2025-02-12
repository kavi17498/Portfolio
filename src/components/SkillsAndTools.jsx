import React from "react";

const SkillsTools = () => {
  return (
    <section className="py-10 px-5 bg-gradient-to-r  rounded-[30px] m-10 shadow-xl" id="skills">
      <h2 className="text-4xl font-bold text-center text-black mb-8">Skills & Tools</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Front-End */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-black text-center">Front-End</h3>
          <ul className="space-y-3">
            {["React", "Laravel Blade", "HTML", "JavaScript", "CSS", "Tailwind CSS"].map((skill) => (
              <li key={skill} className="bg-orange-400 text-white px-4 py-2 rounded-full text-center font-medium hover:bg-orange-600 transition">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Back-End */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-black text-center">Back-End</h3>
          <ul className="space-y-3">
            {["Express.js", "Firebase", "ASP .NET"].map((skill) => (
              <li key={skill} className="bg-orange-400 text-white px-4 py-2 rounded-full text-center font-medium hover:bg-orange-600 transition">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Design Tools */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-black text-center">Design Tools</h3>
          <ul className="space-y-3">
            {["Figma", "Canva", "Photoshop", "Illustrator"].map((tool) => (
              <li key={tool} className="bg-orange-400 text-white px-4 py-2 rounded-full text-center font-medium hover:bg-orange-600 transition">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsTools;
