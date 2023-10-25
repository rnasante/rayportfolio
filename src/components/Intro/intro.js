import React from "react";
import './intro.css';
import profilePic from '../../assets/nicepic.png';
import introBtnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName"> Raymond.</span> <br/>A Frontend Engineer</span>
                <p className="introPara">I am a proactive frontend engineer dedicated to creating visually stunning and <br /> user-friendly web applications through innovative design and seamless user experiences.</p>
                <Link><button className="introBtn"><img src={introBtnImg} alt=" let's work" className="introBtnImg"/>Let's Work</button></Link>
            </div>
            <img src={profilePic} alt="profile pic" className="profilePic"/>
        </section>

    );
}

export default Intro;