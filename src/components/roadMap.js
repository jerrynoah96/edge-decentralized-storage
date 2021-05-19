import React from 'react';
import Carousel from 'react-elastic-carousel';
import roadmapBg from '../images/roadMap.jpg';
import learnMoreIcon from '../images/learn-more.png';
import ProgressBar from './progressBar';



const RoadMap=()=> {

    const breakPoints=[
        {width: 700, itemsToShow: 1},
        {width: 1000, itemsToShow: 3}
        
    ]
    return (
        <div className="roadMap" id="roadmap">
            
           <h2> Live Roadmap</h2> 
           <div className="roadmap-animation-btns">
                    <div className="cover-btn" > </div>
                    <div className="cover-btn" ></div>

                </div>
           <ProgressBar done="50" className="progress-bar"/>
            <Carousel className="carousel" breakPoints={breakPoints}>
                


            <div className="roadmap-item">
                    <h3>Q1, 2021</h3>
                    <p>
                    Start of the development of Mirax <br />

                    Mirax team expansions <br />

                    Legal Structure Setup <br />
                    </p>
                </div>

                <div className="roadmap-item">
                    <h3>Q2, 2021</h3>
                    <p>
                    Mirax Core Prototype <br />

                    Mirax white Paper <br />

                    Testing and Security Audit of Mirax <br />
                    Fundraising
                    </p>
                </div>

                <div className="roadmap-item">
                    <h3>Q3, 2021</h3>
                    <p>
                    Deployment of the stable version of Mirax <br />

                    Block Explorer <br />
                    </p>
                </div>
                <div className="roadmap-item">
                    <h3>Q4, 2021</h3>
                    <p>
                    Start of the development of Mirax <br />

                    Mirax team expansions <br />

                    Legal Structure Setup <br />
                    </p>
                </div>

                


               
            </Carousel>

            <button className="roadmap-btn">Learn more <img src={learnMoreIcon} alt="buy"/> </button>

            <img src={roadmapBg} className="roadmap-bg" alt="backgroundPic"/>
            


        </div>
    )
}
export default RoadMap;