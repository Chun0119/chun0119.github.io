import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { contactData } from '../../config/contact';
import './Contact.css';

const Contact = () => {
  // Icon mapping
  const iconMap = {
    Mail: <Mail size={24} />,
    Phone: <Phone size={24} />,
    MapPin: <MapPin size={24} />,
    Github: <Github size={24} />,
    Linkedin: <Linkedin size={24} />,
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {contactData.title}
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactData.subtitle}
        </motion.p>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>{contactData.description}</p>
            
            <div className="contact-details">
              {contactData.contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="contact-icon">{iconMap[info.icon]}</div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <span>{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Find Me</h4>
              <div className="social-icons">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 