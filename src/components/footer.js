import React from 'react';
import mailIcon from '../images/mail-icon.png';
import logo from '../images/logo.png';
import '../App.css';



const Footer=()=> {
    return (
        <footer className="footer">
            
            <div className="row contact-white-share">
                <div>
                <img src={logo} alt="logo" className="brand-logo"/>
                </div>
               
                

                <span className="footer-email">
                <img src={mailIcon} alt="mail" className="footer-icon"/>
                contact@whiteshare.com
                </span>
            </div>




            <div className="row">
                <span> <a href="https://www.google.com/"> Privacy Policy </a> </span>
                <span> <a href="https://www.google.com/"> Terms and condition</a> </span>
            </div>

            


        </footer>
    )
}
export default Footer;


 