import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faViber } from '@fortawesome/free-brands-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
  const location = useLocation();
  const [aboutLink, setAboutLink] = useState('/about');
  const [aboutText, setAboutText] = useState('Про нас');
  const [servicesLink, setServicesLink] = useState('/services');
  const [servicesText, setServicesText] = useState('Додаткові послуги');
  const [faqLink, setFaqLink] = useState('/faq');
  const [faqText, setFaqText] = useState('Часті питання');
  const [PaymentDeliveryLink, setPaymentDeliveryLink] = useState('/payment-delivery');
  const [PaymentDeliveryText, setPaymentDeliveryText] = useState('Оплата та доставка');

  // Використовуємо useEffect, щоб змінити лінк і текст, коли ми на сторінці "Про нас"
  useEffect(() => {
    if (location.pathname === '/about') {
      setAboutLink('/');
      setAboutText('Головна');
    } else {
      setAboutLink('/about');
      setAboutText('Про нас');
    }
    if (location.pathname === '/services') {
      setServicesLink('/');
      setServicesText('Головна');
    } else {
      setServicesLink('/services');
      setServicesText('Додаткові послуги');
    }
    if (location.pathname === '/faq') {
      setFaqLink('/');
      setFaqText('Головна');
    } else {
      setFaqLink('/Faq');
      setFaqText('Часті питання');
    }
    if (location.pathname === '/payment-delivery') {
      setPaymentDeliveryLink('/');
      setPaymentDeliveryText('Головна');
    } else {
      setPaymentDeliveryLink('/payment-delivery');
      setPaymentDeliveryText('Оплата та доставка');
    }
  }, [location]);

  // Функція для прокручування на початок сторінки
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Корисні посилання</h4>
          <ul>
            {/* Замість Link використовуємо onClick для прокрутки на початок */}
            <li><Link to={aboutLink} onClick={scrollToTop}>{aboutText}</Link></li>
            <li><Link to={servicesLink} onClick={scrollToTop}>{servicesText}</Link></li>
            <li><a href="/blog">Блог</a></li>
            <li><Link to={faqLink} onClick={scrollToTop}>{faqText}</Link></li>
            <li><Link to={PaymentDeliveryLink} onClick={scrollToTop}>{PaymentDeliveryText}</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Контакти</h4>
          <ul>
            <li>Email: <a href="mailto:kluckodima@gmail.com">kluckodima@gmail.com</a></li>
            <li>Телефон: +380 (98) 317-61-39</li>
            <li>Адреса: м. Здолбунів,</li>
            <li> вул. Заводська, 1</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ми в соцмережах</h4>
          <div className="footer-social">
            <a href="https://t.me/dimmi_0709" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com/_dmytrofun_?igsh=MWlsNGUzNjA2cXQ2NQ==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="viber://chat?number=%2B380983176139" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faViber} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Ми на карті</h4>
          <div className="footer-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1097.036337549268!2d26.242901623639764!3d50.554112662464895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0JfQtNC-0LvQsdGD0L3RltCyINCX0LDQstC-0LTRgdGM0LrQsCAx!5e0!3m2!1suk!2sua!4v1742669732053!5m2!1suk!2sua"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Ваш сайт. Всі права захищені.</p>
      </div>
    </footer>
  );
};

export default Footer;
