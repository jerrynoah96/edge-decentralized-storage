import React, { useState } from "react";
import CarouselInfo from './CarouselInfo';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import '../App.css';

function Carousel(props) {
  const [currImg, setCurrImg] = useState(0);

  const increaseProgress = (e)=> {
    props.increaseProgressBar();
  }

  const decreaseProgress = (e)=> {
    props.decreaseProgressBar();
  }



  return (
    <div className="carousel">
      
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon onClick={decreaseProgress} className="left-arrow" style={{ fontSize: 30 }} />
        </div>
        <div className="roadmap-item">
          <h3>{CarouselInfo[currImg].title}</h3>
          <p>{CarouselInfo[currImg].line1}</p>
          <p>{CarouselInfo[currImg].line2}</p>
          <p>{CarouselInfo[currImg].line3}</p>
          <p>{CarouselInfo[currImg].line4}</p>
        </div>


        <div
          className="right"
          onClick={() => {
            currImg < CarouselInfo.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon onClick={increaseProgress} className="right-arrow" style={{ fontSize: 30 }} />
        </div>
  
    </div>
  );
}

export default Carousel;
