import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { deleteBrand, fetchBrands } from "../../http/deviceApi"; // Імпортуємо API-функції

const DeleteBrand = ({ show, onHide }) => {
  const [brands, setBrands] = useState([]); // Список брендів
  const [selectedBrand, setSelectedBrand] = useState(""); // Вибраний бренд

  useEffect(() => {
    if (show) {
      fetchBrands().then((data) => setBrands(data));
    }
  }, [show]); // Виконується при відкритті модального вікна

  const handleDelete = async () => {
    if (!selectedBrand) {
      alert("Оберіть бренд для видалення!");
      return;
    }
    try {
      await deleteBrand(selectedBrand);
      alert("Бренд успішно видалено!");
      onHide();
    } catch (error) {
      alert("Помилка при видаленні бренду!");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Видалення бренду</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Оберіть бренд для видалення</Form.Label>
            <Form.Select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
              <option value="">Виберіть бренд</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
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

export default DeleteBrand;
