import React from 'react'
import { Card,CardBody,Image,Stack,Text,Divider,Button,ButtonGroup,CardFooter,Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { useState,useEffect } from 'react'

const Item = () => {

    const {categoria} = useParams ()
    const [productos, setproductos] = useState ([])

    useEffect(()=>{
        const db = getFirestore()

        const itemscollection = collection(db,'ropa')
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
        <div>
            {
                productos.map((p)=>(
                    <div key={p.nombre}>
                        <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <img src={p.imagen} alt="" />
                        <Heading size='md'>{p.nombre}</Heading>
                        
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                        <Link to={`/Item/${p.id}`}>
                            detalle
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
                    </div>
                ))
            }
            
        </div>
    )
}

export default Item