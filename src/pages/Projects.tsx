import React, { useState } from 'react';
import ProjectGrid from '../components/ProjectGrid';
import ProjectModal from '../components/ProjectModal';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  longDesc: string;
  techTags: string[];
  images: string[];
  github?: string;
  demo?: string;
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
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projects</h1>
      <ProjectGrid onProjectClick={handleProjectClick} />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default Projects;
