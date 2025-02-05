import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { TbBrandLinkedin } from 'react-icons/tb'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s40ojcs', 'template_eh9sppo', form.current, 'Kg2rhkR8J5TfgshRJ')

        e.target.reset()

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>mr.lalaoui.rayane@gmail.com</h5>
                        <a href="mailto:mr.lalaoui.rayane@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <h5>Lalaoui Hassani Rayane</h5>
                        <a href="https://www.linkedin.com/in/rayane-lalaoui-hassani/" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={handleSendEmail}>
                    <input type="text" name='name' placeholder='Your Email' required />
                    <input type="text" name='subject' placeholder='Subject (Optional)' />
                    <textarea name='message' rows="7" placeholder='Your Message , be free to ask' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
