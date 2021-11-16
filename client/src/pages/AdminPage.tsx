
import React,{useState} from 'react'
import {Container,Button,Row} from "react-bootstrap"
import CreateBrand from '../modals/CreateBrand'
import CreateDevice from '../modals/CreateDevice'
import CreateType from '../modals/CreateType'


const AdminPage = () => {
;
    const [brandCreateVisible,setBrandCreateVisible] = useState(false);
    const [typeCreateVisible,setTypeCreateVisible] = useState(false);
    const [deviceCreateVisible,setDeviceCreateVisible] = useState(false);
    const [brandRemoveVisible,setBrandRemoveVisible] = useState(false);
    const [typeRemoveVisible,setTypeRemoveVisible] = useState(false);
    const [deviceRemoveVisible,setDeviceRemoveVisible] = useState(false);

    return (
        <Container className="mt-5">
            <Row style={{backgroundColor: '#112b26',color: '#FFF'}}>
              <Button onClick={() => setTypeCreateVisible(true)} variant={"outline-success"} className="p-2 mt-1">Create type</Button>
              <Button onClick={() => setBrandCreateVisible(true)} variant={"outline-success"} className="p-2 mt-1">Create brand</Button>
              <Button onClick={() => setDeviceCreateVisible(true)} variant={"outline-success"} className="p-2 mt-1">Create device</Button>
            </Row>
            <Row style={{backgroundColor: '#111430',color: '#FFF'}}>
              <Button  variant={"outline-danger"} className="p-2 mt-1">Remove type</Button>
              <Button  variant={"outline-danger"} className="p-2 mt-1">Remove brand</Button>
              <Button  variant={"outline-danger"} className="p-2 mt-1">Remove device</Button>
            </Row>
            <CreateBrand show={brandCreateVisible} onHide={() => setBrandCreateVisible(false)}/>
            <CreateDevice show={deviceCreateVisible} onHide={() => setDeviceCreateVisible(false)}/>
            <CreateType show={typeCreateVisible} onHide={() => setTypeCreateVisible(false)}/>
        </Container>

    )
}

export default AdminPage
