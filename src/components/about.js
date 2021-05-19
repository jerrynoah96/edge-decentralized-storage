import React from 'react';
import aboutTech from '../images/aboutTechImg.png';
import speedPic from '../images/speed-Image.png';
import speedLogo from '../images/speed-logo.png';
import '../App.css';

const About =()=> {

    return(
        <section className="about" id="about">
            <div className="about-item about-item-first">
                <div className="about-item-text">
                    <h3>
                        About the Technology
                    </h3>

                    <p>Mirax  is a free, open-source network whose aim is to create an interactive environment for users. At the core of the platform is the Mirax Blockchain — a scalable and flexible blockchain architecture that consists of a master chain and up to 212 accompanying blockchains. </p>

                </div>

                <img src={aboutTech} alt="aboutTechPic" className="about-item-img about-left-img"/>

            </div>
            
            <h2> Future of decentralized Storage</h2>

        <div className="about-item about-item-second">

            <img src={speedPic} alt="aboutTechPic" className="about-item-img about-big-img"/>
                <div className="about-item-text about-item-speed speed-card">
                <img src={speedLogo} alt="aboutTechPic" className="speed-logo"/>
                    <h3>
                        Speed
                    </h3>

                    <p>To achieve scalability, Mirax has built-in sharding support: Mirax blockchains can break and merge automatically to handle changes in load. This means that new blocks are still created easily, and the lack of long queues aids in keeping transaction costs down, even though some of the platform's services become very popular.</p>

                </div>

                

            </div>


        </section>
    
    )

}
export default About;