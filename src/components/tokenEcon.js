import React from 'react';
import tokenEconImg from '../images/tokenEconImg.png';
import buyTokenIcon from '../images/buy-icon.png';
import '../App.css';

const About =()=> {

    return(
        <section className="about" id="tokenEcons">
            <div className="about-item">

            
                <div className="about-item-text about-item-card token-econ-card">
                    <h3>
                        Token Economics
                    </h3>

                    <p>To obtain the resources required to make Mirax a reality, we are launching a token sale in Q2 2021. The token sale will likely use a SAFT to be converted 1:1 to native Mirax tokens (MRX) after the deployment of the Mirax Blockchain in Q4 2021</p>
                    <button>Buy Token <img src={buyTokenIcon} alt="buy"/> </button>
                </div>

                <img src={tokenEconImg} alt="aboutTechPic" className="about-item-img about-big-img token-econ-img"/>

                

            </div>


        </section>
    
    )

}
export default About;