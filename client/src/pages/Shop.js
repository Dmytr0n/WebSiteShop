import React, { useContext,useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchTypes, fetchBrands, fetchDevices } from '../http/deviceApi';
import Pages from '../components/modals/Pages';

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
      fetchDevices(null, null, 1, 2).then(data => {device.setDevices(data.rows); device.setTotalCount(data.count)})
    }, []);
  
    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 3)
          .then(data => {
            device.setDevices(data.rows);
            device.setTotalCount(data.count);
          });
    }, [device.page, device.selectedType, device.selectedBrand]);
    
  return (
    <Container>
      <Row className='mt-2'>
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <DeviceList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
