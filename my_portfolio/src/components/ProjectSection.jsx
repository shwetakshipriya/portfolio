"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gitglimpse",
    description: "A React app for searching GitHub profiles and viewing detailed user information.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shwetakshipriya/GitGlimpse",
    previewUrl: "https://git-glimpse-eosin.vercel.app/",
  },
  {
    id: 2,
    title: "PropertyPulse",
    description: "Next.js app for listing and searching rental properties",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shwetakshipriya/propertypulse",
    previewUrl: "https://property-pulse-vasu.vercel.app/",
  },
  {
    id: 3,
    title: "Coinverse",
    description: "Retreives the Crypto Information",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shwetakshipriya/coinverse",
    previewUrl: "https://crypto-bucks.netlify.app/",
  },
  {
    id: 4,
    title: "Book Store",
    description: "Online Book Store",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/shwetakshipriya/bookstore",
    previewUrl: "https://bookstore-sable-seven.vercel.app/",
  },
  {
    id: 5,
    title: "YumEats",
    description: "Food Ordering Website",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shwetakshipriya/Yum-eats",
    previewUrl: "https://statuesque-tanuki-4a1117.netlify.app/",
  },
  {
    id: 6,
    title: "Algo Visualiser",
    description: "Algo Visualiser",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shwetakshipriya/KMP_VISUALIZER",
    previewUrl: "https://shwetakshipriya.github.io/KMP_VISUALIZER/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;