import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

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

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projectsData.map((project) => (
        <motion.div key={project.id} variants={item} className="h-full">
          <ProjectCard project={project as Project} onClick={() => onProjectClick(project as Project)} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
