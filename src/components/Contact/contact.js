import React, { useRef } from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x5kxwbf', 'template_mpmdv1i', form.current, 'GZH3fQDEYW66frvH0Yt6u')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <section id="conPage">
            <div id="clients">
                <h1 className="clientTitle">My Clients</h1>
                <p className="clientDesc">
                    em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg"/>
                    <img src={Adobe} alt="Client" className="clientImg"/>
                    <img src={Microsoft} alt="Client" className="clientImg"/>
                    <img src={Facebook} alt="Client" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="conTitle">Contact Me</h1>
                <span className="conDesc">I'm open to discuss work opportunities</span>
                <form className="conForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email"name="your_email"/>
                    <textarea className="msg" name="message"  rows={5} placeholder="Type Your Message"/>
                    <button type="submit" value="Send"  className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook icon" className="link"/>
                        <img src={TwitterIcon} alt="Twitter icon" className="link"/>
                        <img src={YoutIcon} alt="Youtube icon" className="link"/>
                        <img src={InstagramIcon} alt="Instagram icon" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;