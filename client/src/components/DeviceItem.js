import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/consts';
import { FaShoppingCart } from 'react-icons/fa'; // Імпортуємо іконку кошика
import './styles/DeviceItem.css'; // Імпортуємо CSS файл для компонента DeviceItem

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col md={3} className="mt-5" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card className="device-card">
        <Image className="device-image" width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="device-name">{device.name}</div>
        <div className="device-price">{device.price} $  <FaShoppingCart className="cart-icon" /></div> {/* Виводимо ціну */}
      </Card>
    </Col>
  );
};

export default DeviceItem;
