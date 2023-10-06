import React from 'react'
import { useState, useEffect, } from 'react'
import ItemDetail from './ItemDetail'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { db } from '../main'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [productos, setproductos] = useState([])

    useEffect (()=>{
        const docRef = doc(db, 'ropa', `${id}`)

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setproductos(productAdapted)
        })
        .catch(error =>{
            console.log("error")
        })
    },[id])
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const oneitem = doc(db, "ropa", `${id}`)
    //     getDoc(oneitem).then((snapshot)=>{
    //         if(snapshot.exists()){
    //             const docs = snapshot.data()
    //             setproductos(docs)
    //         }
    //     })
    // })
    return (
        <div className='itemdetailcontainer'>

            <ItemDetail {...productos} />
        </div>

    )
}

export default ItemDetailContainer