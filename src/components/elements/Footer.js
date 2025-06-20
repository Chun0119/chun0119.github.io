import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { contactData } from '../../config/contact';
import './Footer.css';

const Footer = () => {
  // Icon mapping
  const iconMap = {
    Github: <Github size={24} />,
    Linkedin: <Linkedin size={24} />,
    Mail: <Mail size={24} />,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Sarah Chun</h3>
            <p>Game Developer with 5 years of Professional Game Industry Experience</p>
          </motion.div>

          <motion.div
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Connect</h4>
            <div className="social-links">
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
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-line"></div>
          <p>
            © {currentYear} Sarah Chun. Made with <Heart size={16} className="heart" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 