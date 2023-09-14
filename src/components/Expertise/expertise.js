import React from "react";
import './expertise.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Expertise = () => {
    return (
        <section id="expertise">
            <span className="exTitle">Expertise</span>
            <span className="exDescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
             <div className="exBars">
                <div className="exBar">
                    <img src={UIDesign} alt="ui design" className="exBarsImg"/>
                    <div className="exBarsText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="exBar">
                    <img src={WebDesign} alt="web design" className="exBarsImg"/>
                    <div className="exBarsText">
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="exBar">
                    <img src={AppDesign} alt="app design" className="exBarsImg"/>
                    <div className="exBarsText">
                        <h2>App Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
             </div> 
        </section>
    )
}

export default Expertise;