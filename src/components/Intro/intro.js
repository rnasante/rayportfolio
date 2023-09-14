import React from "react";
import './intro.css';
import profilePic from '../../assets/image.png';
import introBtnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName"> Raymond</span> <br/>Web Developer</span>
                <p className="introPara">I am skilled web developer with experience in creating <br /> visually appealing and seamless websites</p>
                <Link><button className="introBtn"><img src={introBtnImg} alt=" let's work" className="introBtnImg"/>Let's Work</button></Link>
            </div>
            <img src={profilePic} alt="profile pic" className="profilePic"/>
        </section>

    );
}

export default Intro;