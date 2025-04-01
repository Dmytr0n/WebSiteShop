import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Row } from 'react-bootstrap';
import DeviceItem from './DeviceItem';
import { Context } from "../index";

const DeviceList = observer(() => {
    const { device } = useContext(Context);

    // Use the search query from the context
    const searchQuery = device.searchQuery;

    // Фільтрація пристроїв на основі запиту
    const filteredDevices = device.devices.filter(device =>
        device.name && device.name.toLowerCase().includes(searchQuery.toLowerCase()) // Check that device.name exists
    );

    return (
        <div>
            {/* Виведення фільтрованих пристроїв */}
            <Row className="d-flex">
                {filteredDevices.map(device =>
                    <DeviceItem key={device.id} device={device} />
                )}
            </Row>
        </div>
    );
});

export default DeviceList;
