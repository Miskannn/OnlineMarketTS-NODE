import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import {Card, Row } from 'react-bootstrap';
import { Context } from '..';
import { IBrand } from '../types/deviceTypes';


const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row style={{alignItems: "flex-start",marginLeft: 1}} className='d-flex mt-2'>
            {device.brands.map((brand: IBrand) => 
                <Card 
                style={{cursor: 'pointer', alignSelf: 'flex-start', maxWidth: 95, textAlign: 'center', marginLeft: 4}}
                border={brand.id === device.selectedBrand?.id? 'primary': 'dark'} 
                onClick={() => device.setSelectedBrand(brand)} 
                key={brand.id}  
                >
                   {brand.name}
                </Card>            
            )}
        </Row>
    )
})

export default BrandBar
