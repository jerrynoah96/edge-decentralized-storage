import React from 'react';
import headerImg from '../images/headerImg.svg';
import asImg from '../images/AsImg.png';
import wpImg from '../images/WpImg.png';
import headerBg from '../images/header-bg.png';
import '../App.css';


const Header =()=> {

    return(
    <header className="header">
        
        
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
        <img src={headerBg} className="header-bg" alt="backgroundPic"/>
        
    </header>
    )

}
export default Header;