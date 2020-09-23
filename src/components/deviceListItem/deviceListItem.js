import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './deviceListItem.module.css';

function DeviceListItem({device}) {
    return(
        <Card className={styles.card}>
            <Card.Body>
                <Card.Title className={styles.text}>{device.identification.device}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" className={styles.text}>Company: {device.identification.company}</Card.Subtitle>
                <Card.Text className={styles.text}>
                    Authorization: {device.authorization.name}, {device.authorization.role}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DeviceListItem;