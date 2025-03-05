import React from 'react';
import jsLogo from '../../assets/icons/javascript.svg';
import reactLogo from '../../assets/icons/react.svg';
import nodejsLogo from '../../assets/icons/nodejs.svg';
import mongodbLogo from '../../assets/icons/mongodb.svg';
import postmanLogo from '../../assets/icons/postman.svg';
import htmlLogo from '../../assets/icons/html.svg';
import expressLogo from '../../assets/icons/express.svg';
import reduxLogo from '../../assets/icons/redux.svg';
import nextjsLogo from '../../assets/icons/nextjs.svg';
import sassLogo from '../../assets/icons/sass.svg';
import pugLogo from '../../assets/icons/pug.svg';
import typeScriptLogo from '../../assets/icons/typescript.svg';

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", icon: jsLogo },
    { name: "HTML/CSS", icon: htmlLogo },
    { name: "Redux", icon: reduxLogo },
    { name: "Sass", icon: sassLogo },
    { name: "Next.js", icon: nextjsLogo },
    { name: "Pug", icon: pugLogo },
    { name: "React", icon: reactLogo },
    { name: "TypeScript", icon: typeScriptLogo },
  ];

  const backendSkills = [
    { name: "Node.js", icon: nodejsLogo },
    { name: "Express", icon: expressLogo },
    { name: "MongoDB", icon: mongodbLogo },
    { name: "Postman", icon: postmanLogo }
  ];

  // Делим навыки на пары
  const renderSkillPairs = (skills) => {
    const pairs = [];
    
    for (let i = 0; i < skills.length; i += 2) {
      pairs.push(
        <div className="skill-pair" key={`pair-${i}`}>
          <div className="skill-item">
            <img src={skills[i].icon} alt={skills[i].name} />
            <p>{skills[i].name}</p>
          </div>
          
          {/* Добавляем второй элемент пары, если он существует */}
          {skills[i+1] && (
            <div className="skill-item">
              <img src={skills[i+1].icon} alt={skills[i+1].name} />
              <p>{skills[i+1].name}</p>
            </div>
          )}
        </div>
      );
    }
    
    return pairs;
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My Skills and Expertise</h2>
        
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skills-grid">
            {renderSkillPairs(frontendSkills)}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Backend</h3>
          <div className="skills-grid backend">
            {renderSkillPairs(backendSkills)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;