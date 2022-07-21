import React from 'react';
import Typed from 'react-typed';

import insta from '../../assests/instagram-64.png';
import github from '../../assests/github-8-64.png';
import linkedin from '../../assests/linkedin-3-64.png';
import "./Home.scss";

const Home = () => {
    return (
        <div className='home'>
            <div className='info'>
                <h1>Alan Paul Mir</h1>
                <h2><Typed
                    className='strings'
                    strings={[
                        "Developer",
                        "Freelancer",
                        "Photographer"
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
                </h2>

                <div className='icons'>
                    <a href='https://github.com/Veilios'>
                        <img src={github} alt="github icon" />
                    </a>

                    <a href='https://www.linkedin.com/in/alanpaulmir/'>
                        <img src={linkedin} alt="linkedin icon" />
                    </a>

                    <a href='https://www.instagram.com/alanpaulphotos/'>
                        <img src={insta} alt="instagram icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;