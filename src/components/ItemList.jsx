import React from 'react'
import Item from './Item'



const ItemList = ({ productos }) => {

    
    return (
        <>
        <div>
            {
                productos.map((p) => {
                    return (
                        <div>
                        <Item producto={p} key={p.id}/>
                        </div>
                        
                    )
                   
                })
            }</div>
            </>
            
    )
}

export default ItemList