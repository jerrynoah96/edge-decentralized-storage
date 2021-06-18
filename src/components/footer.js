import React from 'react';
import mailIcon from '../images/mail-icon.png';
import logo from '../images/logo.png';
import '../App.css';



const Footer=()=> {
    return (
        <footer className="footer">
            
            <div className="contact-white-share">
                <img src={logo} alt="logo" className="brand-logo"/>
        
               
                

                <span className="footer-email">
                <img src={mailIcon} alt="mail" className="footer-icon"/>
                contact@whiteshare.com
                </span>
            </div>




            <div className="row">
                <a href="https://www.google.com/" className="footer-link"> Privacy Policy </a> 
                <a href="https://www.google.com/" className="footer-link .lower-link"> Terms and condition</a> 
            </div>

            


        </footer>
    )
}
export default Footer;


 