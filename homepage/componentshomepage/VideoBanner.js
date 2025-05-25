import React, { useState } from "react";
import "./VideoBanner.css";

const VideoBanner = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="homevideo-banner">
      <div className="homevideo-overlay">
        {!isVideoPlaying && (
          <>
            <h3> Compostable Solutions for a Sustainable Tomorrow !</h3>
            <button className="homeplay-button" onClick={handlePlayVideo}>
              <i className="fas fa-play"></i>
            </button>
          </>
        )}
        {isVideoPlaying && (
          <iframe
            className="homevideo-frame"
            src="https://www.youtube.com/embed/VejV2sZ87H0?si=kaYOcAuPONUoAtD5"
            title="Video Player"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>






        )}
      </div>
    </section>
  );
};

export default VideoBanner;
