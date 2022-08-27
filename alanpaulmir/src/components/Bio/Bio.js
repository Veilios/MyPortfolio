import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Photographer from "../../assests/photographer.jpg";
import Award from "../../assests/award.png";
import LambdaCertificate from "../../assests/lambdacertificate.png";
import "./Bio.scss";



const Bio = () => {
    const [isLActive, setIsLActive] = useState(false);
    const [isGActive, setIsGActive] = useState(false)

    const handleLClick = () => {
        setIsLActive(current => !current);
    };

    const handleGClick = () => {
        setIsGActive(current => !current);
    };

    return (
        <div className="bio" id="bio" >
            <div className="b-left" >
                <motion.div className="b-card bg" whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}></motion.div>
                <motion.div className="b-card" whileInView={{ scale: 1 }} initial={{ scale: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                    <img src={Photographer} alt="Headshot of Alan Mir" className="b-img" />
                </motion.div>
            </div>

            <div className="b-right" >
                <motion.div whileInView={{x: [300, 0]}} transition={{ duration: 0.85, ease: 'easeOut'}}>
                    <h1 className="b-title" >About Me</h1>
                    <p className="b-sub" >
                        Driven by Creativity and Ingenuity with every line of code.
                    </p>
                    <p className="b-desc" >
                        I am Full Stack Web Developer based out of Atlanta, GA. I recieved a certificate of completion from Bloom Tech (formerly known as lambda
                        school, and have since been working to further improve my skills. I like to tackle problems with determination, and an open-mind. Working
                        with others is my strong suite, and I am always happy to recieve any feedback. Having a sharp eye for product evolution helps me
                        prioritize tasks, iterate fast and deliver faster.
                    </p>
                </motion.div>

                <motion.div className="b-award" whileInView={{x: [300, 0]}} transition={{ duration: 0.85, ease: 'easeOut'}} >
                    <motion.img src={LambdaCertificate} animate={{ scale: isLActive ? 4 : 1}} alt="Certificate of completion issued by Lambda School" className={isLActive ? "b-award-img active" : "b-award-img lambda"} onClick={handleLClick} />
                    <div className="b-award-texts" >
                        <h4 className="b-award-title" >Lambda Full Stack Web Certificate</h4>
                        <p className="b-award-desc" >
                            Certificate of completion from Bloom Tech, (Formerly known
                            as Lambda School) where I complete their Full Stack Web Developer
                            course.
                        </p>
                    </div>
                </motion.div>

                <motion.div className="b-award" whileInView={{x: [300, 0]}} transition={{ duration: 0.85, ease: 'easeOut'}} >
                    <motion.img animate={{scale: isGActive ? 4 : 1}} src={Award} alt="Certificate of completion issued by Google" className={isGActive ? "b-award-img active" : "b-award-img"} onClick={handleGClick} />
                    <div className="b-award-texts" >
                        <h4 className="b-award-title" >Google UX/UI Certificate</h4>
                        <p className="b-award-desc" >
                            Certificate of completion from Google, where I completed their
                            UI/UX Designer course.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Bio;