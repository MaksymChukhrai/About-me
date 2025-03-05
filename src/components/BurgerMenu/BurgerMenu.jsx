// src/components/BurgerMenu/BurgerMenu.jsx
import React, { useState, useEffect, useLayoutEffect } from 'react';
import linkedinIcon from '../../assets/icons/LinkedIn.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import githubIcon from '../../assets/icons/Github.svg';

const BurgerMenu = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Блокировка прокрутки страницы при открытом меню
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [isOpen]);

  // Закрытие меню при клике вне него или изменении размера экрана
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.burger-menu-container')) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);
    // Close menu when clicking on a navigation link
    const handleLinkClick = () => {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    };

  return (
    <div className="burger-menu-container">
      <div 
        className={`burger-icon ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <div className="name-section">
            <h2>Maksym</h2>
            <h1>Chukhrai</h1>
          </div>

          <nav className="burger-nav">
            <a href="#about" className="nav-link" onClick={handleLinkClick}>About me</a>
            <a href="#skills" className="nav-link" onClick={handleLinkClick}>Skills</a>
            <a href="#portfolio" className="nav-link" onClick={handleLinkClick}>Portfolio</a>
            <a href="#testimonial" className="nav-link" onClick={handleLinkClick}>Testimonial</a>
            <a href="#contact" className="nav-link" onClick={handleLinkClick}>Contact</a>
          </nav>

          <div className="burger-menu-footer">
            <button className="contact-button" >
            <a 
                href="https://t.me/Akdeniz_2020" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </button>
            
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/maksym-chukhrai/" className="social-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://t.me/Akdeniz_2020" className="social-icon">
                <img src={telegramIcon} alt="Telegram" />
              </a>
              <a href="https://wa.me/380952720027" className="social-icon">
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              <a href="https://github.com/MaksymChukhrai" className="social-icon">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
