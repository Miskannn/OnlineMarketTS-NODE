import React,{useEffect} from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from "../components/BrandBar";
import DeviceList from '../components/DeviceList';
import { observer} from 'mobx-react-lite';
import {fetchTypes,fetchBrands,fetchDevices} from '../http/deviceApi';
import { Context } from '../index';
import Paginatio from "../components/Pagination"
import {IPagi} from '../types/deviceTypes';

const Shop = observer(() => {
    const {device} = React.useContext(Context)
 
    useEffect(() =>{
      fetchTypes().then((data: string[]) => device.setTypes(data));
      fetchBrands().then((data: string[]) => device.setBrands(data));
      fetchDevices().then((data: IPagi) => {
          device.setDevices(data?.rows);
          device.setTotalCount(data?.count)
      });
    })
    useEffect(() =>{
        fetchDevices(device.selectedType.id,device.selectedBrand.id,device.page,5).then((data: IPagi) => {
            device.setDevices(data?.rows);
            device.setTotalCount(data?.count)
        })
    },[device.page, device.selectedType, device.selectedBrand,device])

    return (
        <Container>
         <Row>
             <Col xs={2} sm={2} md={2} lg={2}>
                <TypeBar />
             </Col>
             <Col xs={10} sm={10} md={10} lg={10}>
                <BrandBar />
                <DeviceList />
                <Paginatio />
             </Col>
         </Row>
        </Container>
    )
})

export default Shop
