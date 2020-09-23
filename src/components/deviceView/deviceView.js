import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import DeviceTable from '../deviceTable/deviceTable';
import Map from '../map/map';

import styles from './deviceView.module.css';

// TODO: convert into class component + add componentDidMount() with axios call
function DeviceView() {
    return (
        <div className={styles.view}>
            <Tabs defaultActiveKey="map">
                <Tab eventKey="map" title="Map">
                    <div className={styles.tile}>
                        <Map />
                    </div>
                </Tab>
                <Tab eventKey="table" title="Table">
                    <div className={styles.tile}>
                        <DeviceTable />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default DeviceView;