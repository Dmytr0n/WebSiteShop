import Image from 'react-bootstrap/Image';
import './styles/AboutPage.css'; // Підключаємо стиль
import PCimage from '../assets/comp-tehnika.png';
import { FaStar, FaTruck, FaMoneyBillWave, FaClock, FaPhone } from 'react-icons/fa'; // Імпортуємо іконки

const AboutPage = () => {
    return (
        <div className="about-container">
            {/* Головний заголовок */}
            <header className="about-header">
                <h1>Про нас</h1>
                <p>говорять мільйони</p>
            </header>

            {/* Основний контент */}
            <section className="about-content">
                <div className="about-flex">
                    {/* Опис компанії */}
                    <div className="about-description">
                        <h2>Екскурс в історію</h2>
                        <p>
                            Наша команда займається ремонтом комп'ютерної техніки, та її продажем. Спеціалізуємося на різноманітній техніці 
                            від банківських терміналів до ремонту звичайного гаджету. У даній сфері працюємо з 2004 року. Зараз же акцентуємося на реалізації
                            майданчика з продажу відремонтованої техніки а також нових деталей та комплектуючих.
                        </p>
                        <p>
                            Ми використовуємо сучасне обладнання та сертифіковані деталі, щоб гарантувати 
                            найкращий результат.
                        </p>
                    </div>

                    {/* Зображення */}
                    <div className="about-image">
                        <Image 
                            src={PCimage} 
                            alt="Ремонт техніки" 
                            width={600} 
                            height={400} 
                            className="image"
                        />
                    </div>
                </div>
            </section>

            {/* Чому обирають нас */}
            <section className="about-reasons">
                <h2>Чому обирають нас?</h2>
                <div className="about-reasons-flex">
                    <div className="about-reason">
                        <h3><FaStar /> Висока якість</h3>
                        <p>Продаємо тільки заздалегідь перевірені та протестовані пристрої.</p>
                    </div>
                    <div className="about-reason">
                        <h3><FaTruck /> Відправка замовлення</h3>
                        <p>Оперативне пакування та відправка сформованого замолення. Підтримка усіх популярних поштових служб</p>
                    </div>
                    <div className="about-reason">
                        <h3><FaMoneyBillWave /> Доступні ціни</h3>
                        <p>Найкраще співвідношення ціни та якості.</p>
                    </div>
                    <div className="about-reason">
                        <h3><FaClock /> Технічна підтримка 24/7</h3>
                        <p>Постійна технічна підтримка проданого обладнання та безкоштовне гарантійне обслуговування.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
