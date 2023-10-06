import { Box, Flex, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {
    const {categoria} = useParams ()
    const [productos, setproductos] = useState ([])

    useEffect(()=>{
        const db = getFirestore()

        const itemscollection = collection(db, "ropa")
        getDocs(itemscollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc)=> 
            ({
              ...doc.data(), id:doc.id
            }))
            setproductos(docs)
        })
    }, [])
   

        const filtredProducts = productos.filter((producto) => producto.categoria === categoria)
    
    return (
        <>
       
        {
            productos.map((p)=>(
                <div key={p.nombre}>
                </div>
            ))
        }
        
        </>
    )
}

export default ItemListContainer