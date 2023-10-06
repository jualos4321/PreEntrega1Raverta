import React, { useContext, useState } from 'react'
import { Card, CardBody, Image, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Heading, Center, Box } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/ShopingCartContext'

const ItemDetail = ({ id, nombre, descripcion, precio,categoria, imagen }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useContext(CartContext)

  const handelOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item ={
     id,nombre,precio
    }
    addItem(item, quantity)
  } 

  

  return (
    <>


      <Center p="1rem">

        <Card maxW='sm'>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{nombre}</Heading>
              <Text>
                {descripcion}
                <img src={imagen} alt="" />
              </Text>
              <Text>
                ${precio}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>

            {
              quantityAdded > 0 ? (
               <Button colorScheme='blue' variant='ghost'><Link to={'/cart/'}>Ir al carrito</Link></Button> 
              ) : (
                <ItemCount initial={1} stock={10} onAdd={handelOnAdd} />
              )
            }
          </CardFooter>
        </Card>
      </Center>


    </>

  )
}

export default ItemDetail