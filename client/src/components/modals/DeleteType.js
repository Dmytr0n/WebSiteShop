import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { deleteType, fetchTypes } from "../../http/deviceApi"; // Імпортуємо API-функції

const DeleteType = ({ show, onHide }) => {
  const [types, setTypes] = useState([]); // Список брендів
  const [selectedType, setSelectedType] = useState(""); // Вибраний бренд

  useEffect(() => {
    if (show) {
      fetchTypes().then((data) => setTypes(data));
    }
  }, [show]); // Виконується при відкритті модального вікна

  const handleDelete = async () => {
    if (!selectedType) {
      alert("Оберіть тип для видалення!");
      return;
    }
    try {
      await deleteType(selectedType);
      alert("Тип успішно видалено!");
      onHide();
    } catch (error) {
      alert("Помилка при видаленні типу!");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Видалення типу</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Оберіть тип для видалення</Form.Label>
            <Form.Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="">Виберіть тип</option>
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
          Видалити
        </Button>
        <Button variant="secondary" onClick={onHide}>
          Скасувати
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteType;
