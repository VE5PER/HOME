import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import siteData from '../data/site.json';
import AnimatedBackground from '../components/AnimatedBackground';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-light-primary dark:text-text-dark-primary font-outfit">
            Get in Touch
          </h1>
          <p className="text-xl text-text-light-secondary dark:text-text-dark-secondary mb-12 leading-relaxed">
            I'm always open to discussing new projects, research collaborations, or opportunities.
            Feel free to reach out directly through any of the channels below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard
            href={`mailto:${siteData.email}`}
            icon={<Mail size={32} />}
            title="Email"
            value={siteData.email}
            delay={0.2}
          />
          {siteData.social.github && (
            <ContactCard
              href={siteData.social.github}
              icon={<Github size={32} />}
              title="GitHub"
              value="View Profile"
              delay={0.3}
            />
          )}
          {siteData.social.linkedin && (
            <ContactCard
              href={siteData.social.linkedin}
              icon={<Linkedin size={32} />}
              title="LinkedIn"
              value="Connect"
              delay={0.4}
            />
          )}
        </div>
      </div>
    </div>
  );
};

interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  delay: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ href, icon, title, value, delay }) => {
  return (
    <motion.a
      href={href}
      target={title === 'Email' ? undefined : "_blank"}
      rel={title === 'Email' ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center p-8 bg-surface-light dark:bg-surface-dark rounded-2xl shadow-lg border border-zinc-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary mb-2">{title}</h3>
      <span className="text-text-light-secondary dark:text-text-dark-secondary group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {value}
      </span>
    </motion.a>
  );
};

export default Contact;
