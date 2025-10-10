import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  longDesc: string;
  techTags: string[];
  images: string[];
  github?: string;
  demo?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-50%", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            variants={modal}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-3xl w-full mx-auto p-8 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techTags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium text-indigo-800 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-900 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p>{project.longDesc}</p>
            </div>
            {/* Image gallery can be added here */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
