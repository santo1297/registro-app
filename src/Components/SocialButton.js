
import React from 'react';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

const SocialButton = ({ icon, link }) => {
  const icons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    behance: FaBehance,
  };

  const Icon = icons[icon] || null;
  
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon />
    </a>
  );
};

export default SocialButton;
