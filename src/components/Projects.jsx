import React from "react";
import MultiStepForm from "../assets/multi-step-form.png";
import ProductPreview from "../assets/product-preview-card-component.png";
import ProductListWithCart from "../assets/product-list-with-cart.png";
import SocialLinksProfile from "../assets/social-links-profile.png";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 0,
      name: "Multi-step form",
      date: "February 2024",
      image: MultiStepForm,
      code: "https://github.com/itsmecedy/Multi-step-form",
      link: "https://multi-select-form.netlify.app/",
      description:
        "This multi-step form was built to improve my skills in handling user input and form validation in React. The project focuses on creating a smooth user experience with step-by-step navigation, making it a great practice in UI/UX design, state management, and component structuring.",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 1,
      name: "Product preview card component",
      date: "August 2024",
      image: ProductPreview,
      code: "https://github.com/itsmecedy/product-preview-card-component",
      link: "https://frontend-mentor-product-component.netlify.app/",
      description:
        "This project is a simple yet effective product preview card designed to enhance my skills in responsive UI development. The focus was on structuring clean, maintainable HTML and using CSS for a visually appealing layout. ",
      techStack: ["HTML", "CSS"],
    },
    {
      id: 2,
      name: "Product list with cart",
      date: "October 2024",
      image: ProductListWithCart,
      code: "https://github.com/itsmecedy/Product-list-with-cart",
      link: "https://product-list-with-cart-itzmecedy.netlify.app/",
      description:
        "This project was a deep dive into e-commerce UI development, where I built a dynamic product list with an interactive shopping cart. The goal was to improve my React state management skills while ensuring a seamless shopping experience through real-time cart updates and product filtering.",
      techStack: ["HTML", "CSS", "JavaScript", "SASS"],
    },
    {
      id: 3,
      name: "Social links profile",
      date: "October 2024",
      image: SocialLinksProfile,
      code: "https://github.com/itsmecedy/Social-links-profile",
      link: "https://itsmecedy-social-link-profile.netlify.app/",
      description:
        "This project is a clean and minimal social links profile page inspired by a Frontend Mentor challenge. The goal was to practice styling with SASS, focusing on modular CSS, responsiveness, and elegant typography. It serves as a simple yet effective way to display multiple social media links in a visually appealing and user-friendly layout.",
      techStack: ["HTML", "CSS", "SASS"],
    },
  ];

  return (
    <div className="mb-10">
      {projects
        .slice()
        .reverse()
        .map((project) => (
          <div
            key={project.id}
            className="flex flex-col lg:flex-row mx-auto shadow-xl bg-white rounded-md py-3 px-4 my-5 "
          >
            {/* Left Side */}
            <div className="flex justify-center border-2">
              <div className="wrapperScroll">
                <img
                  className="imgScroll"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            </div>
            {/* Right Side */}
            <div className="flex-1 flex max-w-xl flex-col justify-center ">
              <div className="text-xl font-semibold mt-5 px-2">
                {project.name}
                <span className="text-gray-600 pl-2">{project.date}</span>
              </div>
              <p className="xl:mx-28 mt-3 px-2 text-gray-500">
                {project.description}
              </p>
              {/* Tech Stack */}
              <div className="flex justify-center gap-5 py-6 flex-wrap">
                {project.techStack.map((tech, index) => (
                  <p
                    key={index}
                    className="p-1 px-2 rounded shadow-md font-semibold"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              {/* Project Links */}
              <div className="flex justify-center gap-5 pb-3">
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:text-blue-700 hover:drop-shadow-md"
                  >
                    <p>Code</p>
                    <FiGithub />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 hover:text-blue-700 hover:drop-shadow-md"
                  >
                    <p>Live Demo</p>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
