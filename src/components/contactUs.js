import React from 'react';

import facebook from '../images/facebook-o-icon.png';
import twitter from '../images/twitter-o-design.png';
import instagram from '../images/insta-o-design.png';
import telegram from '../images/telegram-o-design.png';
import medium from '../images/medium-o-design.png';
import asImg from '../images/AsImg.png';



const ContactUs = ()=> {
    return(
        <section className="contact-us" id="contact">
            <div className="contactUs-bg">
                <h3> Contact Us</h3>
                <div className="subscribe">

                    <span>Don't miss out, stay updated</span>
                    <div className="email-input">
                        <input type="text" placeholder="enter your email here"/>
                        <button>access storage
                        <img src={asImg} alt="icon"/>
                        </button>

                    </div>

                </div>

            </div>
            <div className="contact-social-media">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter" />
                    <img src={instagram} alt="instagram" />
                    <img src={telegram} alt = "telegram" />
                    <img src={medium} alt = "medium"/>

                </div>

                <div className="line">

                </div>

        </section>

    )
}
export default ContactUs;