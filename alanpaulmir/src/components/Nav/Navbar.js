import React from 'react';
import { motion } from 'framer-motion';

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='nav-container'>
      <motion.nav animate={{x: [-300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
        <a href='#home'>Home</a>
        <a href='#bio'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </motion.nav>

      <motion.nav animate={{x: [300, 0]}} transition={{duration: 0.85, ease: 'easeOut'}}>
        <a href='#1'>Blog</a>
        <a rel='noreferrer' target="_blank" href='https://drive.google.com/file/d/1RwdVqVd4d0d7WNqqpdQN85h-lxh2qrBD/view?usp=sharing' download>Resume</a>
      </motion.nav>
    </div>
  );
};

export default Navbar;