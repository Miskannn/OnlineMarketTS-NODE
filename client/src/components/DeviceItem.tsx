import React from 'react';
import { Col,Card,Image } from 'react-bootstrap';
import {IDevice} from "../types/deviceTypes";
import styles from "../style/DeviceItem.module.scss";
import {useHistory} from "react-router-dom";
import { UnauthorisedPath } from '../utils/Path';
import star from "../assets/star.png"

interface DeviceItemProps{
    device: IDevice;
}


const DeviceItem: React.FC<DeviceItemProps> = ({device}) => {
 
    const history = useHistory();


    return (
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className='mt-3' onClick={() => history.push(UnauthorisedPath.DEVICE_ROUTE + '/' + device.id)}>
             <Card className={styles.card} border={"dark"}>
                <Image className={styles.image} src={device.image}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
