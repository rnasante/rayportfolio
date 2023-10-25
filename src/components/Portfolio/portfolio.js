import React from "react";
import './portfolio.css';
import Portfolio1 from '../../assets/hoobankpng.png';
import Portfolio2 from '../../assets/restpng.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

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