import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateType from '../components/modals/CreateType';
import CreateDevice from '../components/modals/CreateDevice';
import DeleteDevice from '../components/modals/DeleteDevice'; // Додаємо модальне вікно для видалення
import DeleteBrand from '../components/modals/DeleteBrand';
import DeleteType from '../components/modals/DeleteType';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false); // Для видалення пристрою
  const [deleteBrandVisible, setDeleteBrandVisible] = useState(false);
  const [deleteTypeVisible, setDeleteTypeVisible] = useState(false); 

  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Додати тип</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>Додати бренд</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeviceVisible(true)}>Додати пристрій</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeleteVisible(true)}>Видалити пристрій</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeleteBrandVisible(true)}>Видалити бренд</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={() => setDeleteTypeVisible(true)}>Видалити тип</Button>

      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <DeleteDevice show={deleteVisible} onHide={() => setDeleteVisible(false)} /> 
      <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)} />
      <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
