import React from 'react';
import { FaWindows, FaTools, FaFan, FaAppStore, FaDatabase, FaCogs, FaMouse, FaShieldAlt } from 'react-icons/fa';
import './styles/Services.css'

// Компонент для відображення додаткових послуг
const Services = () => {
  return (
    <section className="additional-services">
      <h2>Наші додаткові послуги</h2>
      <div className="services-container">
        <div className="service-card">
          <FaWindows size={40} />
          <h3>Встановлення Windows</h3>
          <p>Швидке та якісне встановлення операційної системи Windows. Підтримка усіх версій та налаштування під ваші потреби.</p>
        </div>
        <div className="service-card">
          <FaTools size={40} />
          <h3>Ремонт системних блоків</h3>
          <p>Ремонт та діагностика системних блоків, заміна компонентів, оновлення апаратного забезпечення.</p>
        </div>
        <div className="service-card">
          <FaFan size={40} />
          <h3>Чистка від пилу та охолодження</h3>
          <p>Комплексна чистка від пилу та заміна термопасти для покращення охолодження вашого комп'ютера.</p>
        </div>
        <div className="service-card">
          <FaAppStore size={40} />
          <h3>Установка програмного забезпечення</h3>
          <p>Встановлення необхідних програм, налаштування їх для зручної роботи та безпеки.</p>
        </div>
        <div className="service-card">
          <FaDatabase size={40} />
          <h3>Відновлення даних</h3>
          <p>Професійне відновлення втрачених або пошкоджених даних з жорстких дисків, флешок та інших носіїв.</p>
        </div>
        <div className="service-card">
          <FaCogs size={40} />
          <h3>Оптимізація комп'ютера</h3>
          <p>Оптимізація роботи вашого ПК: очищення від зайвих файлів, налаштування автозапуску програм, покращення швидкості роботи.</p>
        </div>
        <div className="service-card">
          <FaMouse size={40} />
          <h3>Ремонт периферійної техніки</h3>
          <p>Ремонт і налаштування периферійних пристроїв: миші, клавіатури, принтери, сканери, монітори та інші аксесуари.</p>
        </div>
        <div className="service-card">
          <FaShieldAlt size={40} />
          <h3>Захист і лікування ПК від вірусів</h3>
          <p>Повний захист вашого ПК від вірусів, шкідливого ПЗ та відновлення після зараження. Професійне налаштування антивірусного програмного забезпечення.</p>
        </div>
      </div>
      <h3>Ціни на послуги</h3>
      <div className="table-container">
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vT8axtcpLFvdyM1Y7xZiyyftDYdR_5WHS-7oMUOSwpSTQG62Ry9qHoSDf6qIsPfJOMYAqkgC-cEnOHS/pubhtml?widget=true&headers=false&chrome=false"
          title="Прайс-лист послуг"
        />
      </div>
    </section>
  );
};

export default Services;
