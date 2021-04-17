import React from 'react';
import mailIcon from '../images/mail-icon.png';
import logo from '../images/logo.png';



const Footer=()=> {
    return (
        <footer className="footer">
            
            <div className="row contact-white-share">
                <img src={logo} alt="logo" className="brand-logo"/>
                

                <span>
                <img src={mailIcon} alt="mail" className="footer-icon"/>
                contact@whiteshare.com
                </span>
            </div>




            <div className="row last-row">
                <span> <a href="https://www.google.com/"> Privacy Policy </a> </span>
                <span> <a href="https://www.google.com/"> Terms and condition</a> </span>
            </div>

            


        </footer>
    )
}
export default Footer;