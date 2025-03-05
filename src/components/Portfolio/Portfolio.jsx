import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Импорт изображений
import miminoLarge from "../../assets/images/projects/mimino/mimino-mob-large.jpg";
import miminoSmall from "../../assets/images/projects/mimino/mimino-mob-small.jpg";
import heathyhubLarge from "../../assets/images/projects/healthy_hub/hh-mob-large.jpg";
import heathyhubSmall from "../../assets/images/projects/healthy_hub/hh-mob-small.jpg";
import furnitureLarge from "../../assets/images/projects/furniture/furniture-mob-large.jpg";
import furnitureSmall from "../../assets/images/projects/furniture/furniture-mob-small.jpg";
import cinemaniaLarge from "../../assets/images/projects/cinemania/cinemania-mob-large.jpg";
import cinemaniaSmall from "../../assets/images/projects/cinemania/cinemania-mob-small.jpg";
import advocateLarge from "../../assets/images/projects/advocate/advocate-mob-large.jpg";
import advocateSmall from "../../assets/images/projects/advocate/advocate-mob-small.jpg";
import casinoLarge from "../../assets/images/projects/casino/casino-mob-large.jpg";
import casinoSmall from "../../assets/images/projects/casino/casino-mob-small.jpg";

const Portfolio = () => {
  // Данные проектов согласно макету
  const projects = [
    {
      id: 1,
      title: "Healthy hub",
      description:
        "HealthyHub. A nutrition and weight-tracking app with personalized features via user accounts.",
      fullDescription: {
        overview:
          "HealthyHub is designed to help users monitor their dietary habits and weight changes. It features personalized dashboards, registration, and account-specific data tracking.",
        role: "Frontend Developer in a team. I implemented the graph section, developed API data handling logic, and ensured responsive design.",
        techStack: "JavaScript, React, Redux, Node.js, Express, MongoDB.",
      },
      imageLarge: heathyhubLarge,
      imageSmall: heathyhubSmall,
      liveUrl: "https://maksymchukhrai.github.io/team-project-SlimTrack360/",
      githubUrl: "https://github.com/MaksymChukhrai/team-project-SlimTrack360",
    },
    {
      id: 2,
      title: "Mimino Hotel",
      description:
        "Mimino Hotel - A website for a hotel and restaurant featuring room booking and menu services.",
      fullDescription: {
        overview:
          "Mimino Hotel is a user-friendly platform for managing hotel reservations and restaurant services.",
        role: "Frontend Developer. I contributed to the website's design, functionality, and responsive implementation.",
        techStack: "Tech Stack: HTML5, CSS, JavaScript.",
      },
      imageLarge: miminoLarge,
      imageSmall: miminoSmall,
      liveUrl: "https://maksymchukhrai.github.io/Mimino-project/",
      githubUrl: "https://github.com/MaksymChukhrai/Mimino-project",
    },
    {
      id: 3,
      title: "Furniture re-stretching project",
      description:
        "This app showcases services, projects, and allows customers to contact the business.",
      fullDescription: {
        overview:
          "This app promotes the company's services, receives conversions from social media, allows you to contact the company and/or accept order details.",
        role: "Full Stack Developer. I conceptualized the app, created the design, wrote SEO-friendly markup, implemented JavaScript and PHP, and deployed the site.",
        techStack: "JavaScript, PHP, HTML/CSS",
      },
      imageLarge: furnitureLarge,
      imageSmall: furnitureSmall,
      liveUrl: "https://7studio.com.ua/",
      githubUrl:
        "https://github.com/MaksymChukhrai/Furniture-re-stretching-project",
    },
    {
      id: 4,
      title: "Cinemania",
      description:
        "Cinemania offers basic description, filtering and information features.",
      fullDescription: {
        overview:
          "Cinemania offers movie descriptions, trailers, and a personalized catalog system.",
        role: "My Role: Frontend Developer in a team. I worked on API data integration, data logic, and adaptive design.",
        techStack: "Vanilla JavaScript, HTML/CSS, REST API, Parcel",
      },
      imageLarge: cinemaniaLarge,
      imageSmall: cinemaniaSmall,
      liveUrl: "https://maksymchukhrai.github.io/team-project-cinemania/",
      githubUrl: "https://github.com/MaksymChukhrai/team-project-cinemania",
    },
    {
      id: 5,
      title: "Advocate web application",
      description:
        "AdvocApp - A professional web application for an attorney's services.",
      fullDescription: {
        overview:
          "This app highlights the attorney's expertise and allows clients to contact and learn about services.",
        role: "Full Stack Developer. I wrote SEO-friendly markup, implemented JavaScript and PHP, and deployed the project.",
        techStack: "JavaScript, PHP.",
      },
      imageLarge: advocateLarge,
      imageSmall: advocateSmall,
      liveUrl: "https://igor-tarasenko.com/",
      githubUrl: "https://github.com/MaksymChukhrai/advocatapp",
    },
    {
      id: 6,
      title: "Casino Extra",
      description:
        "Casino Extra - A promotional web app for online casino services in Curaçao.",
      fullDescription: {
        overview:
          "This app focuses on enhancing page load speed and SEO for better promotional reach.",
        role: "Frontend Developer. I optimized UI, improved page load speed sixfold, and implemented SEO configurations.",
        techStack: "HTML/CSS, JavaScript.",
      },
      imageLarge: casinoLarge,
      imageSmall: casinoSmall,
      liveUrl: "https://maksymchukhrai.github.io/CasinoExtra/",
      githubUrl: "https://github.com/MaksymChukhrai/CasinoExtra",
    },
  ];

  // State для отслеживания развернутых описаний проектов
  const [expandedProjects, setExpandedProjects] = useState({});

  // Переключение состояния развернутого описания
  const toggleProjectDescription = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Настройки слайдера
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1.5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          variableWidth: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768, // Планшеты
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 450, // Мобильные устройства
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
    
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">My Portfolio</h2>

        <div className="portfolio-slider">
          <Slider {...settings}>
            {projects.map((project) => (
              <div className="slide-container" key={project.id}>
                <div className="project-card">
                  <div
                    className={`project-image ${
                      expandedProjects[project.id] ? "small" : "large"
                    }`}
                  >
                    <img
                      src={
                        expandedProjects[project.id]
                          ? project.imageSmall
                          : project.imageLarge
                      }
                      alt={project.title}
                    />
                  </div>
                  <div className="project-info">
                    {/* <h3 className="project-title">{project.title}</h3> */}
                    <div
                      className={`project-description ${
                        expandedProjects[project.id] ? "expanded" : ""
                      }`}
                    >
                      {expandedProjects[project.id] ? (
                        // Показываем полное описание в развёрнутом состоянии
                        <p className="description-text">
                          {project.fullDescription.overview}
                        </p>
                      ) : (
                        // Показываем краткое описание в свёрнутом состоянии
                        <p className="description-text">
                          {project.description}
                        </p>
                      )}

                      {expandedProjects[project.id] && (
                        <>
                          <div className="role-block">
                            <p className="role-text">
                              <strong>My Role:&nbsp;</strong>
                              {project.fullDescription.role}
                            </p>
                          </div>
                          <div className="tech-block">
                            <p className="tech-text">
                              <strong>Tech Stack:&nbsp;</strong>
                              {project.fullDescription.techStack}
                            </p>
                          </div>
                        </>
                      )}
                      <span
                        className="toggle-description"
                        onClick={() => toggleProjectDescription(project.id)}
                      >
                        {expandedProjects[project.id] ? "See less" : "See more"}
                      </span>
                    </div>

                    <div className="project-links">
                      <a
                        href={project.liveUrl}
                        className="project-btn live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Page
                      </a>
                      <a
                        href={project.githubUrl}
                        className="project-btn repo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
