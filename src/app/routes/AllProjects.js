import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../../components/elements/ProjectCard';
import ProjectModal from '../../components/elements/ProjectModal';
import { projects, getAllTags, filterProjectsByTag } from '../../config/projects';
import './AllProjects.css';

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique tags from all projects
  const allTags = getAllTags();
  
  // Filter projects based on active filter
  const filteredProjects = filterProjectsByTag(activeFilter);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="all-projects-page">
      <div className="page-header">
        <div className="container">
          <motion.button
            className="back-button"
            onClick={handleBackToHome}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
            Back to Home
          </motion.button>
          
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            All Projects
          </motion.h1>
          
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my complete portfolio of game development projects
          </motion.p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          {/* Project Filters */}
          <motion.div
            className="project-filters"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Projects ({projects.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
                onClick={() => handleFilterClick(tag)}
              >
                {tag} ({projects.filter(p => p.tags.includes(tag)).length})
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={handleProjectClick}
                showClickHint={true}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p>No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export default AllProjects; 