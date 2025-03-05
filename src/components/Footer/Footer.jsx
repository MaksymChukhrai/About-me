import React from 'react';

// Импорт локальных SVG иконок
import mailIcon from '../../assets/icons/mail.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import githubIcon from '../../assets/icons/Github.svg';
import linkedinIcon from '../../assets/icons/LinkedIn.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-info">
          <p>
          If you have an idea for a web application or need a full-stack developer for your project, don't hesitate to reach out. Let's build something amazing together! Let positivity be with you!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <a href="mailto:m.chukhrai.job@gmail.com" aria-label="Email">
                <img src={mailIcon} alt="Email" />
              </a>
            </div>
            <div className="contact-item">
              <a href="tel:+380952720027" aria-label="Phone">
                <img src={phoneIcon} alt="Phone" />
              </a>
            </div>
          </div>

          <ul className="social-links">
            <li>
              <a href="https://github.com/MaksymChukhrai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/maksym-chukhrai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="https://t.me/Akdeniz_2020" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <img src={telegramIcon} alt="Telegram" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/380952720027" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
            </li>
          </ul>
        
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Maksym Chukhrai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;