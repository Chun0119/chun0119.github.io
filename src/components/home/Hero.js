import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { heroData } from '../../config/hero';
import { contactData } from '../../config/contact';
import './Hero.css';

const Hero = () => {
  // Icon mapping
  const iconMap = {
    Github: <Github size={24} />,
    Linkedin: <Linkedin size={24} />,
    Mail: <Mail size={24} />,
    Download: <Download size={20} />
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = heroData.resume.path;
    link.download = heroData.resume.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleButtonClick = (button) => {
    if (button.action === 'scroll') {
      document.getElementById(button.target).scrollIntoView({ behavior: 'smooth' });
    } else if (button.action === 'download') {
      handleResumeDownload();
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="highlight">{heroData.title}</span>
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroData.subtitle}
          </motion.h2>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {heroData.description}
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {heroData.buttons.map((button, index) => (
              <motion.button
                key={index}
                className={`btn btn-${button.type}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleButtonClick(button)}
              >
                {button.icon && iconMap[button.icon]}
                {button.text}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {contactData.socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {iconMap[social.icon]}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 