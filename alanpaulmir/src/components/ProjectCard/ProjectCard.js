import React from 'react';
import { motion } from 'framer-motion';

import "./ProjectCard.scss";


const ProjectCard = ({ img, link, title }) => {
    return (
        <motion.div className="pc" whileInView={{scale: 1, opacity: 1}} initial={{scale: 0, opacity: 0}} transition={{duration: 0.85, ease: 'easeOut'}} >
            <div className="pc-browser" >
                <div className="pc-circle one" ></div>
                <div className="pc-circle two" ></div>
                <div className="pc-circle three" ></div>

                <p>{title}</p>
            </div>

            <a href={link} target="_blank" rel="noreferrer" >
                <img src={img} alt="Animation of my project" className="pc-img" />
            </a>
        </motion.div>
    );
};


export default ProjectCard;