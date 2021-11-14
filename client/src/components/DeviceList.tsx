import { observer } from 'mobx-react-lite'
import React from 'react'
import { Row } from 'react-bootstrap'
import deviceStore from '../store/deviceStore'
import { IDevice } from '../types/deviceTypes'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const devices: IDevice[] = deviceStore.devices
    return (
        <Row className='d-flex'>
            {devices.map((device: IDevice) => <DeviceItem key={device.id} device={device}/>)}
        </Row>
    )
})

export default DeviceList
