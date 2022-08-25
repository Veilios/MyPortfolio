import React from 'react';
import { motion } from 'framer-motion';

import ProjectCard from '../ProjectCard/ProjectCard.js';
import { products } from "../../data";

import "./ProjectList.scss";

const ProjectList = () => {
    return (
        <div className="pl" id='projects' >
            <motion.div className="pl-texts" whileInView={{opacity: 1}} transition={{ duration: 0.85, ease: 'easeOut', delay: 0.5}} initial={{ opacity: 0 }}>
                <h1 className="pl-title" >Create & Inspire.</h1>
                <p className="pl-desc" >
                    Of the years I've been a a Software Developer, These are some of my
                    favorite projects to date. Take a look around!
                </p>
            </motion.div>
            <div className="pl-list" >
                {products.map((item) => (
                    <ProjectCard key={item.id} img={item.img} link={item.link} title={item.title}/>
                ))}
            </div>
        </div>
    );
};


export default ProjectList;