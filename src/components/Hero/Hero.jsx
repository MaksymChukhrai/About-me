import React, { useState } from 'react';
import backgroundVideo from '../../assets/videos/Lines_1920x1080_30Fps.webm';


const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="hero" id="hero">
      <div className="video-background">
        {!isVideoLoaded && (
          <div className="placeholder-image">
             </div>
        )}
        <video 
          autoPlay 
          loop 
          muted 
          onLoadedData={() => setIsVideoLoaded(true)}
          className={isVideoLoaded ? "video-visible" : "video-hidden"}
        >
          <source src={backgroundVideo} type="video/webm" />
        </video>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-image"></div>
          <div className="hero-text">
            <h1>I'm <span>Maksym Chukhrai</span></h1>
            <h2>Full Stack Developer</h2>
            <button type="button" className="contact-btn">
              <a 
                href="https://t.me/Akdeniz_2020" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

