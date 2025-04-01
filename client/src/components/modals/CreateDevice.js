import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';


const CreateDevice = observer(({ show, onHide }) => { 
  const { device } = useContext(Context);
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [brand, setBrand] = useState(null)
  const [type, setType] = useState(null)
  const [info, setInfo] = useState([]);

   useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
      }, []);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter(item => item.number !== number));
  };

  const selectFile = e => {
      setFile(e.target.files[0])
  }

  const changeInfo = (key, value, number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
  };

  const addDevice = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price',`${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data => onHide())
  }
  
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Додати пристрій
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{device.selectedType.name || "Виберіть тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => (
                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{device.selectedBrand.name || "Виберіть бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => (
                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control className="mt-3" value={name}  onChange={e => setName(e.target.value)} placeholder="Введіть назву пристрою" />
          <Form.Control className="mt-3" value={price} onChange={e => setPrice(Number(e.target.value))} placeholder="Введіть вартість пристрою" type="number" />
          <Form.Control className="mt-3" onChange={selectFile} type="file" />
          <hr />
          <Button variant="outline-dark" onClick={addInfo}>Додати нову властивість</Button>
          {info.map(i => (
            <Row key={i.number} className="mt-2">
              <Col md={4}>
                <Form.Control
                  placeholder="Введіть назву характеристики"
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Введіть опис характеристики"
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                />
              </Col>
              <Col md={4}>
                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>Видалити</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
        <Button variant="outline-success" onClick={addDevice}>Додати</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
