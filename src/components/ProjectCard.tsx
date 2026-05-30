import React from 'react';
import { motion } from 'framer-motion';
import { GitFork, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  techTags: string[];
  github?: string;
  demo?: string;
  date?: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={onClick}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-text-light-primary dark:text-white">{project.title}</h3>
          {project.date && (
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30 px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {project.date}
            </span>
          )}
        </div>
        <p className="text-text-light-secondary dark:text-slate-300 mb-4 text-sm flex-grow">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techTags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-900 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 bg-zinc-50 dark:bg-slate-700/50 mt-auto">
        <div className="flex justify-end space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-light-secondary hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400">
              <GitFork size={20} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-text-light-secondary hover:text-indigo-500 dark:text-slate-400 dark:hover:text-indigo-400">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
