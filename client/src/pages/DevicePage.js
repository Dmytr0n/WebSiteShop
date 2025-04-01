import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import { FaBatteryFull, FaWifi, FaRegLightbulb, FaMicrochip, FaMemory, FaMobileAlt, FaCogs, FaHeadphones, FaDesktop } from 'react-icons/fa'; 
import { useParams } from 'react-router-dom';
import { fetchOneDevices } from '../http/deviceApi';

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevices(id).then(data => setDevice(data));
  }, [id]);

  // Іконки для характеристик
  const icons = [
    <FaBatteryFull style={{ fontSize: '2rem', color: '#28a745', transform: 'rotate(15deg)' }} />,
    <FaWifi style={{ fontSize: '2rem', color: '#007bff', transform: 'rotate(-20deg)' }} />,
    <FaRegLightbulb style={{ fontSize: '2rem', color: '#ffc107', transform: 'rotate(30deg)' }} />,
    <FaMicrochip style={{ fontSize: '2rem', color: '#6c757d', transform: 'rotate(10deg)' }} />,
    <FaMemory style={{ fontSize: '2rem', color: '#17a2b8', transform: 'rotate(-15deg)' }} />,
    <FaMobileAlt style={{ fontSize: '2rem', color: '#dc3545', transform: 'rotate(25deg)' }} />,
    <FaCogs style={{ fontSize: '2rem', color: '#343a40', transform: 'rotate(-5deg)' }} />,
    <FaHeadphones style={{ fontSize: '2rem', color: '#fbbf24', transform: 'rotate(20deg)' }} />,
    <FaDesktop style={{ fontSize: '2rem', color: '#4f46e5', transform: 'rotate(-30deg)' }} />
  ];

  return (
    <Container className="mt-4" style={{ backgroundColor: '#e2effb', padding: '60px 20px', borderRadius: '10px' }}>
      <Row className="mb-4">
        {/* Left column - Image */}
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
            style={{
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              border: '5px solid #2b6cb0', // Темно-синя обводка
            }}
          />
        </Col>

        {/* Middle column - Device Info */}
        <Col md={4} className="d-flex flex-column align-items-center">
          <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 'bold', color: '#1e3c72' }}>
            {device.name}
          </h2>

          <Row className="d-flex justify-content-around w-100 mb-4">
            {/* Іконки для пристрою */}
            {icons.slice(0, 3).map((icon, index) => (
              <Col key={index} className="d-flex justify-content-center align-items-center">
                {icon}
              </Col>
            ))}
          </Row>
        </Col>

        {/* Right column - Price and Button */}
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: '1.5rem',
              border: '5px solid #3182ce',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease-in-out',
            }}
          >
            <h3 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#1e3c72' }}>Від {device.price} грн.</h3>
            <Button
              variant="dark"
              size="lg"
              style={{
                borderRadius: '20px',
                padding: '10px 20px',
                fontSize: '1.2rem',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#343a40')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '')}
            >
              Додати в кошик
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Device Info */}
      <Row className="d-flex flex-column m-3">
        <h1 className="mb-3" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3c72' }}>Характеристики</h1>
        {device.info.map((info, index) => {
          // Рандомні іконки
          const icon = icons[Math.floor(Math.random() * icons.length)];

          return (
            <Row
              key={info.id}
              style={{
                background: index % 2 === 0 ? '#f8f9fa' : '#e9ecef',
                padding: '15px',
                borderRadius: '10px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div style={{ marginRight: '15px' }}>
                {icon}
              </div>
              <p style={{ fontSize: '1.1rem', color: '#495057' }}>
                <strong>{info.title}:</strong> {info.description}
              </p>
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;
