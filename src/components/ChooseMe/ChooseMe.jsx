import React from 'react';


// Import custom icons
import profIcon from '../../assets/icons/prof.png';
import individualIcon from '../../assets/icons/individual.png';
import qualityIcon from '../../assets/icons/quality.png';
import collabIcon from '../../assets/icons/collab.png';

const ChooseMe = () => {
  const reasons = [
    {
      icon: profIcon,
      title: "Professionalism and precision",
      description: "My work is based on high-quality standards and attention to details."
    },
    {
      icon: individualIcon,
      title: "Individual approach",
      description: "I aim to understand your business, goals, and challenges to provide you with the web application that suits your needs."
    },
    {
      icon: qualityIcon,
      title: "Quality",
      description: "I write web applications with clean code, avoiding website builders. This ensures high-speed performance, resilience, and minimal intervention in the code, making them highly adapted to Search Engine Optimization (SEO)."
    },
    {
      icon: collabIcon,
      title: "Collaborative approach",
      description: "I value openness and collaboration with clients at all stages of development."
    }
  ];

  return (
    <section className="choose-me" id="choose">
      <div className="choose-me-container">
        <h2 className="section-title">Why Choose Me</h2>
        
        <div className="reasons-grid">
          {reasons.reduce((acc, reason, index) => {
            if (index % 2 === 0) {
              acc.push(
                <div className="reason-card-wrapper" key={`wrapper-${index/2}`}>
                  <div className="reason-card">
                    <div className="reason-icon">
                      <img src={reason.icon} alt={reason.title} />
                    </div>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                  {reasons[index + 1] && (
                    <div className="reason-card">
                      <div className="reason-icon">
                        <img src={reasons[index + 1].icon} alt={reasons[index + 1].title} />
                      </div>
                      <h3>{reasons[index + 1].title}</h3>
                      <p>{reasons[index + 1].description}</p>
                    </div>
                  )}
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      </div>
    </section>
  );


};

export default ChooseMe;