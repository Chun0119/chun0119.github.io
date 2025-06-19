import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../elements/ProjectCard';
import ProjectModal from '../elements/ProjectModal';
import { getFeaturedProjects } from '../../config/projects';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const featuredProjects = getFeaturedProjects();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewAllProjects = () => {
    navigate('/projects');
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A showcase of my best work and technical expertise
        </motion.p>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={handleProjectClick}
              showClickHint={true}
            />
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewAllProjects}
          >
            View All Projects
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeProjectModal}
      />
    </section>
  );
};

export default Projects; 