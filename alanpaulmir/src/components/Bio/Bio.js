import React from 'react';

import Photographer from "../../assests/photographer.jpg";
import Award from "../../assests/award.png";
import LambdaCertificate from "../../assests/lambdacertificate.png";
import "./Bio.scss";

const Bio = () => {
    return (
        <div className="bio" >
            <div className="b-left" >
                <div className="b-card bg" ></div>
                <div className="b-card" >
                    <img src={Photographer} alt="Headshot of Alan Mir" className="b-img" />
                </div>
            </div>

            <div className="b-right" >
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

                <div className="b-award" >
                    <img src={LambdaCertificate} alt="Certificate of completion issued by Lambda School" className="b-award-img lambda" />
                    <div className="b-award-texts" >
                        <h4 className="b-award-title" >Lambda Full Stack Web Certificate</h4>
                        <p className="b-award-desc" >
                            Certificate of completion from Bloom Tech, (Formerly known
                            as Lambda School) where I complete their Full Stack Web Developer
                            course.
                        </p>
                    </div>
                </div>

                <div className="b-award" >
                    <img src={Award} alt="Certificate of completion issued by Google" className="b-award-img" />
                    <div className="b-award-texts" >
                        <h4 className="b-award-title" >Google UX/UI Certificate</h4>
                        <p className="b-award-desc" >
                            Certificate of completion from Google, where I completed their
                            UI/UX Designer course.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;