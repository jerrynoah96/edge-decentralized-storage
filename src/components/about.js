import React from 'react';
import aboutTech from '../images/aboutTechImg.png';
import speedPic from '../images/speed-Image.png';
import '../App.css';

const About =()=> {

    return(
        <section className="about">
            <div className="about-item">
                <div className="about-item-text">
                    <h3>
                        About the Technology
                    </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veritatis? Saepe libero architecto assumenda nesciunt. Rerum provident qui distinctio hic consectetur! Est natus delectus ipsa minima quam veniam nam praesentium</p>

                </div>

                <img src={aboutTech} alt="aboutTechPic" className="about-item-img"/>

            </div>

            <h2> Future of decentralized Storage</h2>

        <div className="about-item">

            <img src={speedPic} alt="aboutTechPic" className="about-item-img about-big-img"/>
                <div className="about-item-text about-item-card">
                    <h3>
                        Speed
                    </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veritatis? Saepe libero architecto assumenda nesciunt. Rerum provident qui distinctio hic consectetur! Est natus delectus ipsa minima quam veniam nam praesentium</p>

                </div>

                

            </div>


        </section>
    
    )

}
export default About;