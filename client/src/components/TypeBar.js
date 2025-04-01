import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from "../index";
import { FaTrash } from "react-icons/fa"; // Іконка закриття меню
import "./styles/TypeBar.css";

const TypeBar = observer(({ isOpen, setIsOpen }) => {
  const { device } = useContext(Context);

  const closeSidebar = () => {
    setIsOpen(false); // Закрити панель
  };

  const resetFilters = () => {
    device.setSelectedType(''); // Скидаємо обрану категорію
    device.setSelectedBrand(''); // Скидаємо обраний бренд
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h3 className="sidebar-title">Категорії</h3>
      <ListGroup>
        {device.types.map(type => (
          <ListGroup.Item 
            className={`sidebar-item ${type.id === device.selectedType.id ? "active" : ""}`}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h3 className="sidebar-title">Бренди</h3>
      <ListGroup>
        {device.brands.map(brand => (
          <ListGroup.Item 
            className={`sidebar-item ${brand.id === device.selectedBrand.id ? "active" : ""}`}
            onClick={() => device.setSelectedBrand(brand)}
            key={brand.id}
          >
            {brand.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <button className="reset-btn" onClick={resetFilters}>
          <FaTrash /> Скинути фільтри
        </button>
    </div>
  );
});

export default TypeBar;

