import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from "../components/BrandBar";
import DeviceList from '../components/DeviceList';
import { observer} from 'mobx-react-lite';
import deviceStore from "../store/deviceStore"
import { fetchTypes } from '../http/deviceApi';

const Shop = observer(() => {

 
    React.useEffect(() =>{
      fetchTypes().then((data: any) => deviceStore.setTypes(data))
    },[])

    return (
        <Container>
         <Row>
             <Col xs={2} sm={2} md={2} lg={2}>
                <TypeBar />
             </Col>
             <Col xs={10} sm={10} md={10} lg={10}>
                <BrandBar />
                <DeviceList />
             </Col>
         </Row>
        </Container>
    )
})

export default Shop
