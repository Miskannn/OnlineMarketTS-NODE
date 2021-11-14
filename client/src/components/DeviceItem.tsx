import React from 'react';
import { Col,Card,Image } from 'react-bootstrap';
import {IDevice} from "../types/deviceTypes";
import styles from "../style/DeviceItem.module.scss";
import {useHistory} from "react-router-dom";


interface DeviceItemProps{
    device: IDevice;
}


const DeviceItem: React.FC<DeviceItemProps> = ({device}) => {
 
    const history = useHistory();


    return (
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='mt-3'>
            <Card className={styles.card} border={'light'}>
               <Image className={styles.image} src={device.image}/>
               <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>Xiaomi</div>
               <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
