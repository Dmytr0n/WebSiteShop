import { useState } from "react";
import { Truck, CreditCard } from "lucide-react";
import './styles/PaymentDelivery.css';

export default function PaymentDelivery() {
  const [tab, setTab] = useState("payment");

  return (
    <div className="card">
      <div className="tabs">
        <button 
          className={`tab ${tab === "payment" ? "active" : ""}`} 
          onClick={() => setTab("payment")}
        >
          <CreditCard className="icon" /> Оплата
        </button>
        <button 
          className={`tab ${tab === "delivery" ? "active" : ""}`} 
          onClick={() => setTab("delivery")}
        >
          <Truck className="icon" /> Доставка
        </button>
      </div>

      {tab === "payment" && (
        <div className="content">
          <h2>Методи оплати</h2>
          <p>Ми пропонуємо різноманітні способи оплати для вашої зручності:</p>
          <ul>
            <li><strong>Оплата карткою (Visa / MasterCard)</strong> - швидкий та безпечний метод оплати через ваші банківські картки.</li>
            <li><strong>Google Pay / Apple Pay</strong> - миттєві платежі через ваші мобільні пристрої.</li>
            <li><strong>Банківський переказ</strong> - оплата через банківський рахунок для безпеки великих сум.</li>
            <li><strong>Оплата при отриманні (накладений платіж)</strong> - оплата безпосередньо при отриманні товару.</li>
            <li><strong>Оплата через PayPal</strong> - зручний і безпечний онлайн-метод оплати.</li>
            <li><strong>Оплата через мобільні додатки (Приват24, Ощад24)</strong> - можливість оплачувати через банківські додатки.</li>
            <li><strong>Часткова оплата (розстрочка або кредит)</strong> - оплата в декілька етапів за допомогою партнерів (наприклад, розстрочка через ПриватБанк).</li>
          </ul>
          <p>Виберіть метод оплати, який підходить саме вам. Усі методи абсолютно безпечні та захищені.</p>
        </div>
      )}

      {tab === "delivery" && (
        <div className="content">
          <h2>Методи доставки</h2>
          <p>Ми пропонуємо кілька варіантів доставки для вашої зручності:</p>
          <ul>
            <li><strong>Нова Пошта</strong> - доставка протягом 1-3 днів по всій Україні.</li>
            <li><strong>Укрпошта</strong> - економічний варіант доставки, що займає від 3 до 7 днів.</li>
            <li><strong>Кур'єрська доставка (в межах міста)</strong> - доставка безпосередньо до вашого дому в межах міста.</li>
            <li><strong>Самовивіз з магазину</strong> - можливість забрати товар самостійно з нашого магазину без додаткових витрат на доставку.</li>
            <li><strong>Доставка через компанії-партнери (Meest, Justin)</strong> - доставка через перевірених партнерів по Україні.</li>
            <li><strong>Міжнародна доставка</strong> - можливість доставки за кордон для наших міжнародних клієнтів.</li>
          </ul>
          <p>Виберіть зручний спосіб доставки та отримайте своє замовлення швидко та безпечно. Доставка здійснюється по всій Україні та за кордон.</p>
        </div>
      )}
    </div>
  );
}
