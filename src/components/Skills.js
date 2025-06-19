import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Game Engines',
      skills: [
        { name: 'Unity', level: 95 },
        { name: 'Unreal Engine', level: 85 },
        { name: 'C#', level: 90 },
        { name: 'C++', level: 80 },
        { name: 'Blueprints', level: 85 }
      ]
    },
    {
      category: 'VR/AR Development',
      skills: [
        { name: 'SteamVR', level: 90 },
        { name: 'Oculus SDK', level: 85 },
        { name: 'ARKit', level: 80 },
        { name: 'ARCore', level: 75 },
        { name: 'VR Interaction', level: 90 }
      ]
    },
    {
      category: 'Mobile & Tools',
      skills: [
        { name: 'iOS Development', level: 85 },
        { name: 'Android Development', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'Performance Optimization', level: 85 },
        { name: '3D Modeling', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to create immersive gaming experiences
        </motion.p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>What I Bring</h3>
            <ul>
              <li>Full-stack game development expertise</li>
              <li>VR/AR development and optimization</li>
              <li>Cross-platform mobile game development</li>
              <li>Performance optimization and debugging</li>
              <li>Clean code and best practices</li>
              <li>Problem-solving and creative thinking</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 