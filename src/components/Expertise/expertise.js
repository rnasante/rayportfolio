import React from "react";
import './expertise.css';
import WebDesign from '../../assets/jspng.png';
import AppDesign from '../../assets/reactpng.png';
import UIDesign from '../../assets/gitpng.png';

const Expertise = () => {
    return (
        <section id="expertise">
            <span className="exTitle">Expertise</span>
            <span className="exDescrip">I am proficient in a versatile range of web development skills, with a strong foundation in JavaScript, enabling me to craft interactive and dynamic web applications. My expertise extends to user interface (UI) design, where I create visually engaging and intuitive user experiences. I'm well-versed in React, a powerful library for building modern web applications, and I have a solid grasp of version control systems like Git to streamline collaboration. Additionally, my experience in responsive web design ensures that the projects I work on are optimized for a seamless user experience across various devices and screen sizes. </span>
             <div className="exBars">
                <div className="exBar">
                    <img src={WebDesign} alt="web design" className="exBarsImg"/>
                    <div className="exBarsText">
                        <h2>JavaScript</h2>
                        <p> I possess strong skills in JavaScript, enabling me to develop dynamic and interactive web applications that deliver rich user experiences.</p>
                    </div>
                </div>
                <div className="exBar">
                    <img src={AppDesign} alt="app design" className="exBarsImg"/>
                    <div className="exBarsText">
                        <h2>ReactJS</h2>
                        <p>My proficiency in ReactJS empowers me to design and build responsive, high-performance user interfaces, making it my preferred choice for modern web application development.</p>
                    </div>
                </div>
                <div className="exBar">
                    <img src={UIDesign} alt="ui design" className="exBarsImg"/>
                    <div className="exBarsText">
                        <h2>Version Control</h2>
                        <p>I am experienced in version control systems like Git, utilizing them to effectively manage code, track changes, and collaborate seamlessly with development teams to maintain project integrity.</p>
                    </div>
                </div>
             </div> 
        </section>
    )
}

export default Expertise;