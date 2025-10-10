import React from 'react';
import ProjectCard from './ProjectCard';
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
}

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project as Project} onClick={() => onProjectClick(project as Project)} />
      ))}
    </div>
  );
};

export default ProjectGrid;
