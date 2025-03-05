import React from 'react';


const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            I am a full stack developer. My passion for creating unique and effective digital solutions inspires me every day. I believe that technology has the power to make our world better, and I strive to contribute to this process.
            </p>
          </div>
          <div className="mission">
            <h3>My Mission</h3>
            <p className="about-text">
            My goal is not just to write code, but to build effective solutions that meet the unique needs of each project. I strive to ensure that my work not only meets technical requirements but also brings users joy and enhances business processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;