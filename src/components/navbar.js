import React from 'react';
import logo from '../images/logo.png';
import launchLogo from '../images/launchIcon.png';
import headerImg from '../images/headerImg.png';
import asImg from '../images/AsImg.png';
import wpImg from '../images/WpImg.png';
import ownedByEveryone from '../images/Owned-by-everyone.png';
import fasterAndCheaper from '../images/Faster-and-cheaper.png';
import environmentallyFriendly from '../images/Environmentally-friendly.png';
import globalResearch from '../images/Global-Research.png';
import headerBg from '../images/header-bg.png';
import '../App.css';

const Nav =()=> {

    return(
    <header className="header">
        <nav className="navbar">
            <img src={logo} alt="logo" className="brand-logo"/>
            <div className="nav-links">
                <a className="nav-link" href="#">About Us</a>
                <a className="nav-link" href="#">Tokeneconomics</a>
                <a className="nav-link" href="#">Roadmap</a>
                <a className="nav-link" href="#">Team</a>
                <a className="nav-link" href="#">Contact Us</a>
                <a className="nav-link" href="#">Contact Us</a>
                <a className="nav-link launch-link" href="#">Launch App <img src={launchLogo} alt="launchLogo" className="launch-logo"/> </a>
                
            </div>   
        </nav>

        <div className="header-content">
            <div className="header-text">
                <h2> <span>Access</span> the <br /> decentralized <span>Storage</span></h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veritatis? Saepe libero architecto assumenda nesciunt. Rerum provident qui distinctio hic consectetur! Est natus delectus ipsa minima quam veniam nam praesentium </p>
                <div className="header-btns">
                    <button className="access-storage-btn"> Access Storage <img src={asImg} alt="icon"/></button>
                    <button className="white-paper-btn"> White Paper <img src={wpImg} alt="icon"/></button>

                </div>
            </div>

            <img src={headerImg} alt="headerPix" className="header-px"/>
        </div>


        <div className="header-cards">
            <div className="header-card">
                <img src={ownedByEveryone} alt="logo" className="card-img"/>

                <h3>
                    Owned by Everyone
                </h3>

                <p>
                    Anyone can contribute to the Edge and benefit from its use
                </p>

            </div>

            <div className="header-card">
                <img src={fasterAndCheaper} alt="logo" className="card-img"/>

                <h3>
                    Faster and Cheaper
                </h3>

                <p>
                Edge offers improved efficiency and performance, saving up to 90% compared with traditional cloud services.
                </p>

            </div>


            <div className="header-card">
                <img src={environmentallyFriendly} alt="logo" className="card-img"/>

                <h3>
                    Environmentally Friendly
                </h3>

                <p>
                Edge is built using spare capacity from devices already in the home & office, reducing the carbon footprint of the net.
                </p>

            </div>

            <div className="header-card">
                <img src={globalResearch} alt="logo" className="card-img"/>

                <h3>
                    Truly Global Research
                </h3>

                <p>
                Network coverage in 60 countries and counting.
                </p>

            </div>



        </div>

        <img src={headerBg} className="header-bg" alt="backgroundPic"/>
        
    </header>
    )

}
export default Nav;