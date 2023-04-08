import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { themeContext } from '../../Context';
import { useContext } from 'react';

import Email from '../../img/email.png';

const Contact = () => {
    
    const form = useRef();

    const [done, setDone ] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d91dwrl', 'template_r7x4run', form.current, 'wSf6Il96W9JWT-Znh')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.dark
  const darkModeClass = darkMode ? 'dark-mode' : '';

  return (
    <div id="Contact" className={`contact-form ${darkModeClass}`}>
      <div className="w-left">
        <div className="technical">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span className="contact-me">Contact Me</span>
          <img src={Email} alt="Your description" className="image-class" />
        </div>
      </div>
      <div className={`c-right ${darkModeClass}`}>
  <form ref={form} onSubmit={sendEmail} className={darkModeClass}>
    <input type="text" name="user_name" className={`user ${darkModeClass}`} placeholder="Name" />
    <input type="email" name="user_email" className={`user ${darkModeClass}`} placeholder="Email" />
    <textarea name="message" className={`user ${darkModeClass}`} placeholder="Message" />
    <input type="submit" value="Send" className={`button ${darkModeClass}`} />
    {done && <span className="message">Thanks for contacting me :)</span>}
  </form>
</div>
    </div>
  );
};

export default Contact;
