import React, { useState } from 'react';
import { FaRegQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Додав іконки
import './styles/Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Які методи оплати ви приймаєте?',
      answer: 'Ми приймаємо оплату через банківські картки, PayPal, а також готівкою при отриманні (тільки для певних регіонів). Ви можете обрати зручний метод оплати під час оформлення замовлення.'
    },
    {
      question: 'Як довго триває доставка?',
      answer: 'Зазвичай доставка займає від 2 до 5 робочих днів в залежності від вашого місцезнаходження та обраного способу доставки. Ви отримаєте сповіщення з трек-номером, щоб стежити за статусом вашого замовлення.'
    },
    {
      question: 'Чи можна повернути товар?',
      answer: 'Так, ми приймаємо повернення протягом 14 днів після отримання товару, якщо він не був у використанні, і зберіг свою упаковку та комплектацію. Деталі можна знайти в нашій політиці повернення товарів.'
    },
    {
      question: 'Як я можу зв\'язатися з вами для консультації?',
      answer: 'Ви можете звернутися до нас через контактну форму на сайті, або зателефонувати за вказаними номерами в розділі "Контакти". Наші фахівці готові допомогти вам з вибором техніки.'
    },
    {
      question: 'Чи є гарантія на вашу продукцію?',
      answer: 'Так, на всю продукцію, що ми продаємо, надається гарантія від виробника. Тривалість гарантії залежить від категорії товару та виробника, але зазвичай вона становить від 6 до 24 місяців.'
    },
    {
      question: 'Чи можна отримати консультацію перед покупкою?',
      answer: 'Так, наші консультанти завжди готові допомогти вам вибрати потрібну техніку, в залежності від ваших потреб та бюджету. Ви можете звернутися до нас через чат на сайті або по телефону.'
    },
    {
      question: 'Які бренди ви продаєте?',
      answer: 'Ми працюємо з найпопулярнішими брендами, такими як ASUS, Lenovo, HP, Dell, Samsung, MSI, Gigabyte, і багатьма іншими. На нашому сайті ви знайдете широкий вибір комп\'ютерної техніки від провідних виробників.'
    },
    {
      question: 'Як я можу відслідковувати своє замовлення?',
      answer: 'Після відправлення замовлення, ви отримаєте на електронну пошту або через SMS трек-номер, за яким зможете відслідковувати статус доставки на сайті нашого кур\'єрського партнера.'
    },
  ];

  return (
    <div className="faq-container">
      <h2>Часті питання</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              <FaRegQuestionCircle size={20} style={{ marginRight: '10px' }} /> {/* Іконка питання */}
              {faq.question}
              <span style={{ marginLeft: '10px' }}>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />} {/* Іконка розкриття */}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
