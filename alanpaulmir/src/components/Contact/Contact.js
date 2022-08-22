import React, { useRef, useState, } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.scss';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_a4rlsrp",
                "template_gin6rqa",
                formRef.current,
                "p8CUtjACGVo9E3B52"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="c" >
            <div className="c-wrapper" >
                <div className="c-left" >
                    <h1 className="c-title" >Get In Touch</h1>

                    <div className="c-info" >
                        <div className="c-info-item" >
                            <img src="#" alt="LightMode Email Icon" className="c-icon" />
                            alanpauldev@gmail.com
                        </div>
                        <div className="c-info-item" >
                            <img src="#" alt="LightMode Address Icon" className="c-icon" />
                            Altanta, Georgia
                        </div>
                        <div className="c-info-item" >
                            <img src="#" alt="LightMode Github Icon" className="c-icon" />
                            Github/Veilios
                        </div>
                        <div className="c-info-item" >
                            <img src="#" alt="LightMode LinkedIn Icon" className="c-icon" />
                            LinkedIn Profile
                        </div>
                    </div>
                </div>

                <div className="c-right" >
                    <p className="c-desc" >
                        <span>How can I help?</span> Send an email. I'm always available new job opportunities,
                        and freelance projects.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input name="user_name" type="text" placeholder="Name" />
                        <input name="user_email" type="text" placeholder="Email" />
                        <input name="user_subject" type="text" placeholder="Subject" />
                        <textarea name="user_message" rows="5" placeholder="Message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};


export default Contact;