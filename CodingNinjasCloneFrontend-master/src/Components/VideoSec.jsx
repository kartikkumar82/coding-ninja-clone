import React from "react";
import video from "../images/video-logo.png";

const VideoSec = () => {
  return (
    <div className="video-sec">
      <div className="video">
        <iframe
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/vEnefxh8o_k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="vid-detail">
        <img src={video} alt="logo" />
        <p>India Inc on Reviving Our Economy NewsX & BW Special</p>
        <p>Ankush Singla, Co-Founder, Coding Ninjas joins a panel discussion with other industry stalwarts to talk about the economy in the times of COVID-19.</p>
      </div>
    </div>
  );
};

export default VideoSec;
