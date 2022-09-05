import React, { useRef, useState, } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';

import './Contact.scss';


const validate = values => {
    const errors = {};
    if (!values.user_name) {
        errors.user_name = 'Required *';
    } else if (values.user_name.length > 15) {
        errors.user_name = 'Must be 15 characters or less';
    }

    if (!values.user_email) {
        errors.user_email = 'Required *';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)) {
        errors.user_email = 'Invalid email address';
    }

    if (!values.user_subject) {
        errors.user_subject = 'Required *';
    } else if (values.user_subject.length > 20) {
        errors.user_subject = 'Must be 20 characters or less';
    }

    if (!values.user_message) {
        errors.user_message = 'Required *';
    } else if (values.user_message.length > 250) {
        errors.user_message = 'Must be 250 characters or less'
    }

    return errors;
};

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);

    const formik = useFormik({
        initialValues: {
            user_name: '',
            user_email: '',
            user_subject: '',
            user_message: ''
        },
        validate,
        onSubmit: values => {
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID,
                    process.env.REACT_APP_TEMPLATE_ID,
                    formRef.current,
                    process.env.REACT_APP_PUBLIC_KEY
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
        }
    })

    return (
        <div className="c" id='contact' >
            <div className="c-wrapper" >
                <div className="c-left" >
                    <motion.h1 className="c-title" whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>Get In Touch</motion.h1>

                    <div className="c-info" >
                        <motion.div className="c-info-item" whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                                />
                            </svg>
                            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=alanpauldev@gmail.com'>alanpauldev@gmail.com</a>
                        </motion.div>
                        <motion.div className="c-info-item" whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                                color='red'
                            >
                                <path
                                    d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                                />
                            </svg>
                            <a href='https://www.google.com/maps/place/Atlanta,+GA/@33.7679188,-84.5610318,11z/data=!3m1!4b1!4m5!3m4!1s0x88f5045d6993098d:0x66fede2f990b630b!8m2!3d33.7489954!4d-84.3879824'>
                                Altanta, Georgia
                            </a>
                        </motion.div>
                        <motion.div className="c-info-item" whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
                                />
                            </svg>
                            <a href='https://github.com/Veilios'>Github/Veilios</a>
                        </motion.div>
                        <motion.div className="c-info-item" whileInView={{ x: [-300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                />
                            </svg>
                            <a href='https://www.linkedin.com/in/alanpaulmir/'>LinkedIn</a>
                        </motion.div>
                    </div>
                </div>

                <div className="c-right" >
                    <motion.p className="c-desc" whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} >
                        <span>How can I help?</span> Send an email. I'm always available new job opportunities,
                        and freelance projects.
                    </motion.p>

                    {
                        done ?
                            <motion.div className="thanks" animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }}>
                                <h3>Thank you!</h3>
                                <p>I'll will be in touch soon.</p>
                            </motion.div>
                            :
                            <form ref={formRef} onSubmit={formik.handleSubmit} >
                                <div className='formik-input'>
                                    <motion.input whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} id='user_name' name="user_name" type="text" placeholder="Name" onChange={formik.handleChange} value={formik.values.user_name} onBlur={formik.handleBlur} />
                                    {formik.touched.user_name && formik.errors.user_name ? <div className='error'>{formik.errors.user_name}</div> : null}
                                </div>

                                <div className='formik-input'>
                                    <motion.input whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} id='user_email' name="user_email" type="text" placeholder="Email" onChange={formik.handleChange} value={formik.values.user_email} onBlur={formik.handleBlur} />
                                    {formik.touched.user_email && formik.errors.user_email ? <div className='error'>{formik.errors.user_email}</div> : null}
                                </div>

                                <div className='formik-input'>
                                    <motion.input whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} id='user_subject' name="user_subject" type="text" placeholder="Subject" onChange={formik.handleChange} value={formik.values.user_subject} onBlur={formik.handleBlur} />
                                    {formik.touched.user_subject && formik.errors.user_subject ? <div className='error'>{formik.errors.user_subject}</div> : null}
                                </div>

                                <div className='formik-input'>
                                    <motion.textarea whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }} id='user_message' name="user_message" rows="5" placeholder="Message" onChange={formik.handleChange} value={formik.values.user_message} onBlur={formik.handleBlur} />
                                    {formik.touched.user_message && formik.errors.user_message ? <div className='error'>{formik.errors.user_message}</div> : null}
                                </div>

                                <motion.button whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.85, ease: 'easeOut' }} type="submit">Submit</motion.button>
                            </form>
                    }
                </div>
            </div>
        </div>
    );
};


export default Contact;