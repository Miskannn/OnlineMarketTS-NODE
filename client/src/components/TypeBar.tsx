import { observer } from 'mobx-react-lite'
import React from 'react'
import deviceStore from '../store/deviceStore'
import { ListGroup } from 'react-bootstrap'
import {IType} from "../types/deviceTypes"


const TypeBar = observer(() => {
    const types: IType[] = deviceStore.types;
    return (      
        <ListGroup className='mt-2'>
          {types.map((type: IType) =>
             <ListGroup.Item 
             style={{cursor: 'pointer'}} 
             active={type.id === deviceStore?.selectedType?.id} 
             onClick = {() => deviceStore.setSelectedType(type)} 
             key={type.id}
             
             >
                 {type.name}
            </ListGroup.Item>)
          }
       </ListGroup>
    )
})

export default TypeBar;
