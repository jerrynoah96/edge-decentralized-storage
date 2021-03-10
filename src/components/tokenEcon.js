import React from 'react';
import tokenEconImg from '../images/tokenEconImg.png';
import buyTokenIcon from '../images/buy-icon.png';
import '../App.css';

const About =()=> {

    return(
        <section className="about">
            <div className="about-item">

            
                <div className="about-item-text about-item-card token-econ-card">
                    <h3>
                        Token Economics
                    </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veritatis? Saepe libero architecto assumenda nesciunt. Rerum provident qui distinctio hic consectetur! Est natus delectus ipsa minima quam veniam nam praesentium</p>
                    <button>Buy Token <img src={buyTokenIcon} alt="buy"/> </button>
                </div>

                <img src={tokenEconImg} alt="aboutTechPic" className="about-item-img about-big-img token-econ-img"/>

                

            </div>


        </section>
    
    )

}
export default About;