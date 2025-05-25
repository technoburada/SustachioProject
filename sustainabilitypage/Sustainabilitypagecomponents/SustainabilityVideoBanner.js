import React, { useState } from 'react';
import './SustainabilityVideoBanner.css';

// Importing certification logos
import coinbaseLogo from './coinbase.png';
import dropboxLogo from './dropbox.png';
import googleLogo from './google.png';
import slackLogo from './slack.png';
import squareLogo from './square.png';
import zoomLogo from './zoom.png';

// Array of certification logos
const certification = [
  { name: 'Coinbase', logo: coinbaseLogo },
  { name: 'Dropbox', logo: dropboxLogo },
  { name: 'Google', logo: googleLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Square', logo: squareLogo },
  { name: 'Zoom', logo: zoomLogo },
];

const SustainabilityVideoBanner = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      {/* Certifications Section */}
      <div className="compare-bar">
        <button className="compare-button">Our Certifications</button>
        <div className="arrow">↓</div>
      </div>
      <br></br>
      <br></br>

      {/* certification Logos Section */}
      <div className="certification-bar">
        {certification.map((certification, index) => (
          <img
            key={index}
            src={certification.logo}
            alt={certification.name}
            className="certification-logo"
          />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Video Banner Section */}
      <section className="video-banner">
        <div className="video-overlay">
          {!isVideoPlaying && (
            <>
              <h3>Compostable Solutions for a Sustainable Tomorrow!</h3>
              <button className="play-button" onClick={handlePlayVideo}>
                <i className="fas fa-play"></i>
              </button>
            </>
          )}
          {isVideoPlaying && (
            <iframe
              className="video-frame"
              src="https://www.youtube.com/embed/VejV2sZ87H0?autoplay=1&mute=0"
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </section>
    </div>
  );
};

export default SustainabilityVideoBanner;
