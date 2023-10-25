import React from "react";
import './portfolio.css';
import Portfolio1 from '../../assets/hoobankpng.png';
import Portfolio2 from '../../assets/restpng.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="portTitle">My Projects</h2>
            <span className="portDescrip">Here are a few personal projects I've undertaken:</span>
             <div className="PortImgs">
                <a href="https://hoobankmoney.netlify.app/">
                    <img src={Portfolio1} alt="" className="portImg"/>
                </a>
                <a href="https://hoobankmoney.netlify.app/">
                    <img src={Portfolio2} alt="" className="portImg"/>
                </a>
             </div>
             <button className="portBtn">See More</button>
        </section>
    )
}  

export default Portfolio;