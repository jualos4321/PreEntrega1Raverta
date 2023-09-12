import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const productos = [
        { id: 1, nombre: "producto1", descripcion: "descripcion1", categoria: "A" },
        { id: 2, nombre: "producto2", descripcion: "descripcion2", categoria: "A" },
        { id: 3, nombre: "producto3", descripcion: "descripcion3", categoria: "B" },
        { id: 4, nombre: "producto4", descripcion: "descripcion4", categoria: "B" },
        { id: 5, nombre: "producto5", descripcion: "descripcion5", categoria: "C" }
    ]

    const getProductos = new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        } else {
            reject(new Error("no hay datos"))
        }
    })

    getProductos
        .then((res) => {
        })
        .catch((err) => {
            console.log(Error)
        })

    return (
        <>

            <ItemDetail productos={productos} />
        </>

    )
}

export default ItemDetailContainer