import React from 'react';

const ProjectCard = ({ name, image, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold text-black mt-4">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
