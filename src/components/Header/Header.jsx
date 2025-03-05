import React, { useState, useEffect } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
   // Define navigation links to pass to BurgerMenu
   const navLinks = [
    { href: "#about", text: "About Me" },
    { href: "#skills", text: "Skills" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#testimonial", text: "Testimonial" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header_container">
        <div className="header_name">
          <span >Maksym</span>
          <span >Chukhrai</span>
         </div>
        <nav className="nav-menu">
          <ul>
            <li onClick={() => scrollToSection('about')}>About Me</li>
            <li onClick={() => scrollToSection('skills')}>Skills</li>
            <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
            <li onClick={() => scrollToSection('testimonial')}>Testimonial</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </nav>
        {/* <a 
          href="https://t.me/your_telegram_username" 
          className="telegram-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Telegram
        </a> */}
        <BurgerMenu navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Header;