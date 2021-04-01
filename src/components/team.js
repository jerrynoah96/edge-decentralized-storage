import React from 'react';
import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import linkedInIcon from '../images/linkedIn-icon.png';
import Murad from '../images/murad.png';
import Jerry from '../images/jerry.png';
import Alex from '../images/alex.png';
import Yan from '../images/yan.png';
import mrx from '../images/mrx.png';




const Team = ()=> {

    return (
        <section className="team" id="team">
            <h3 className="team-header"> Meet our Team</h3>


            <div className="team-row">
                <div className="team-member">
                    <img src={Murad} alt="team member"/>
                    <p className="member-name">Murad Malachiyev</p>
                    <p className="member-role">C/C++ Engineer </p>

                    <div className="team-media-handle">
                        <img src={twitterIcon} alt="twitter"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={linkedInIcon} alt="linkedin"/>


                    </div>

                </div>

                <div className="team-member">
                    <img src={Jerry} alt="team member"/>
                    <p className="member-name">Jeremiah Noah</p>
                    <p className="member-role">Web/Sol</p>

                    <div className="team-media-handle">
                        <img src={twitterIcon} alt="twitter"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={linkedInIcon} alt="linkedin"/>


                    </div>

                </div>

                <div className="team-member">
                    <img src={mrx} alt="team member"/>
                    <p className="member-name">MRX #1</p>
                    <p className="member-role">C/C++ Engineer</p>

                    <div className="team-media-handle">
                        <img src={twitterIcon} alt="twitter"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={linkedInIcon} alt="linkedin"/>


                    </div>

                </div>

            </div>


            <div className="team-row">
                <div className="team-member">
                    <img src={Alex} alt="team member"/>
                    <p className="member-name">Alex Golmit</p>
                    <p className="member-role">C/C++ Engineer</p>

                    <div className="team-media-handle">
                        <img src={twitterIcon} alt="twitter"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={linkedInIcon} alt="linkedin"/>


                    </div>

                </div>

                <div className="team-member">
                    <img src={Yan} alt="team member"/>
                    <p className="member-name">Yan Vlaso </p>
                    <p className="member-role">C/C++ Engineer</p>

                    <div className="team-media-handle">
                        <img src={twitterIcon} alt="twitter"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={linkedInIcon} alt="linkedin"/>


                    </div>

                </div>

                <div className="team-member">
                    <img src={mrx} alt="team member"/>
                    <p className="member-name">MRX #2</p>
                    <p className="member-role">C/C++ Engineer</p>

                    <div className="team-media-handle">
                        <img src={twitterIcon} alt="twitter"/>
                        <img src={facebookIcon} alt="facebook"/>
                        <img src={linkedInIcon} alt="linkedin"/>


                    </div>

                </div>

            </div>

        </section>
    )

}

export default Team;