import React, {useContext} from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import {Pagination} from "react-bootstrap"

const Paginatio = observer(() => {
    const {device} = useContext(Context);
    const totalPageCounter: number = Math.ceil(device.totalCount / device.limit);
    const pages: number[] = [];

    for(let i = 0; i < totalPageCounter; i++){
        pages.push(i + 1)
    }

    return (
        <Pagination className='mt-3'>
            {pages.map(page => <Pagination.Item
             key={page} 
             active={device.page === page}
             onClick={() => device.setPage(page)}
             >{page}</Pagination.Item>)}
        </Pagination>
    )
})

export default Paginatio
