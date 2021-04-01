import React from 'react';
import launchLogo from '../images/launchIcon.png';
import headerImg from '../images/headerImg.png';
import asImg from '../images/AsImg.png';
import wpImg from '../images/WpImg.png';
import ownedByEveryone from '../images/Owned-by-everyone.png';
import fasterAndCheaper from '../images/Faster-and-cheaper.png';
import environmentallyFriendly from '../images/Environmentally-friendly.png';
import globalResearch from '../images/Global-Research.png';
import headerBg from '../images/header-bg.png';
import {Link} from 'react-scroll';
import '../App.css';

const Nav =()=> {

    return(
    <header className="header">
        <nav className="navbar">
            <img src="https://cdn.discordapp.com/attachments/780379717043355648/821802912593477652/Group.png" alt="logo" className="brand-logo"/>
            <div className="nav-links">
                <Link className="nav-link" to="about" smooth={true} duration={1000}>About Us</Link>
                <Link className="nav-link" to="tokenEcons" smooth={true} duration={1000}>Tokeneconomics</Link>
                <Link className="nav-link" to="roadmap" smooth={true} duration={1000}>Roadmap</Link>
                <Link className="nav-link" to="team" smooth={true} duration={1000} >Team</Link>
                <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact Us</Link>
                <Link className="nav-link launch-link" href="#">Launch App <img src={launchLogo} alt="launchLogo" className="launch-logo"/> </Link>
                
            </div>   
        </nav>

        <div className="header-content">
            <div className="header-text">
                <h2> <span>Access</span> the <br /> decentralized <span>Storage</span></h2>
                <p> Mirax is a network with full-featured services from payments to storage of files and applications, which is based on the paradigm of a distributed system without dependence on a permanent connection to control servers</p>
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
                    File Storage
                </h3>

                <p>
                Mirax Storage is a distributed file-storage technology, accessible through the Mirax P2P Network and available for storing arbitrary files,
                </p>

            </div>

            <div className="header-card">
                <img src={fasterAndCheaper} alt="logo" className="card-img"/>

                <h3>
                    Mirax Access
                </h3>

                <p>
                Mirax Access provides a platform for third-party services of any kind that enables smartphone-like friendly interfaces for decentralized apps and smart contracts.
                </p>

            </div>


            <div className="header-card">
                <img src={environmentallyFriendly} alt="logo" className="card-img"/>

                <h3>
                    Mirax Virtual Machine
                </h3>

                <p>
                The Mirax Virtual Machine is a dedicated smart contract execution engine built on WASM.
                </p>

            </div>

            <div className="header-card">
                <img src={globalResearch} alt="logo" className="card-img"/>

                <h3>
                    DNS
                </h3>

                <p>
                Mirax DNS is a service for assigning human-readable names to accounts, smart contracts, services, and network nodes.
                </p>

            </div>



        </div>

        <img src={headerBg} className="header-bg" alt="backgroundPic"/>
        
    </header>
    )

}
export default Nav;