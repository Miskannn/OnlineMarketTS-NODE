import { observer } from 'mobx-react-lite'
import {Card, Row } from 'react-bootstrap';
import deviceStore from '../store/deviceStore';
import { IBrand } from '../types/deviceTypes';


const BrandBar = observer(() => {
    const brands: IBrand[] = deviceStore.brands;

    return (
        <Row style={{alignItems: "flex-start",marginLeft: 1}} className='d-flex mt-2'>
            {brands.map((brand: IBrand) => 
                <Card 
                style={{cursor: 'pointer', alignSelf: 'flex-start', maxWidth: 95, textAlign: 'center', marginLeft: 4}}
                border={brand.id === deviceStore.selectedBrand?.id? 'primary': 'dark'} 
                onClick={() => deviceStore.setSelectedBrand(brand)} 
                key={brand.id}  
                >
                   {brand.name}
                </Card>            
            )}
        </Row>
    )
})

export default BrandBar
