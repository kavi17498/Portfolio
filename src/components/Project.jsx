import React from "react";
import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import petdocimg from "../assets/projects/mypetdoctor.png";
import bizrates from "../assets/projects/BizRates.png";

// Sample Project Data
const projects = [
  {
    id: 1,
    name: "Pet Doctor Booking Web App",
    image: petdocimg,
    description: "An app for pet owners to find and book appointments with veterinarians.",
    link: "https://github.com/kavi17498/My-Pet-Doctor.git", // Replace with actual project link
  },
  {
    id: 2,
    name: "Pet Doctor Booking UI/UX",
    image: petdocimg,
    description: "A modern e-commerce platform built with React and Firebase.",
    link: "https://www.figma.com/design/mH5aoyMLVGUdYNaa1OHvcl/PetsDoctor?node-id=0-1&t=ziG0vHsfwv5FcVF8-1", // Replace with actual UI/UX link
  },
  {
    id: 3,
    name: "BizRates UI/UX",
    image: bizrates,
    description: "A UI/UX design for a business rating platform.",
    link: "https://www.figma.com/design/Dm4w59VI6JAnaaD13gkmkf/Bizrates?node-id=0-1&t=6PB9ztcKkSwulOBJ-1", // Replace with actual UI/UX link
  },
];

const Projects = () => {
  return (
    <section className="py-10 bg-gray-100 text-center" id="project">
      <h2 className="text-4xl font-bold text-black mb-10">My Projects</h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            description={project.description}
            link={project.link} // Pass project link
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
