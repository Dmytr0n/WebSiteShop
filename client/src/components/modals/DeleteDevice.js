import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { deleteDevice, fetchDevices } from '../../http/deviceApi';

const DeleteDevice = ({ show, onHide }) => {
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (show) {
      fetchDevices(null, null, 1, 100)
        .then((data) => setDevices(data.rows))
        .catch((err) => setError(err.response?.data?.message || 'Помилка завантаження пристроїв'));
    }
  }, [show]);

  const handleDelete = async () => {
    if (!selectedDeviceId) {
      setError('Виберіть пристрій для видалення');
      return;
    }

    try {
      await deleteDevice(selectedDeviceId);
      setDevices(devices.filter(device => device.id !== selectedDeviceId));
      setSelectedDeviceId('');
      setSuccessMessage('Пристрій успішно видалено');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Помилка при видаленні');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Видалити пристрій</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form>
          <Form.Group>
            <Form.Label>Виберіть пристрій</Form.Label>
            <Form.Select
              value={selectedDeviceId}
              onChange={(e) => setSelectedDeviceId(e.target.value)}
            >
              <option value="">Оберіть пристрій...</option>
              {devices.map((device) => (
                <option key={device.id} value={device.id}>
                  {device.name} (ID: {device.id})
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрити</Button>
        <Button variant="danger" onClick={handleDelete} disabled={!selectedDeviceId}>
          Видалити
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDevice;
