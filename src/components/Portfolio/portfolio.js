import React from "react";
import './portfolio.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="portTitle">My Projects</h2>
            <span className="portDescrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
             <div className="PortImgs">
                <img src={Portfolio1} alt="" className="portImg"/>
                <img src={Portfolio2} alt="" className="portImg"/>
                <img src={Portfolio3} alt="" className="portImg"/>
                <img src={Portfolio4} alt="" className="portImg"/>
                <img src={Portfolio5} alt="" className="portImg"/>
                <img src={Portfolio6} alt="" className="portImg"/>
             </div>
             <button className="portBtn">See More</button>
        </section>
    )
}  

export default Portfolio;