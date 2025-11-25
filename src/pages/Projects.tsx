import React, { useState } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import ProjectModal from '../components/ProjectModal';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  techTags: string[];
  images: string[];
  github?: string;
  demo?: string;
  date?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <ProjectGrid onProjectClick={handleProjectClick} />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Projects;
