import React from 'react'
import { Card, CardBody, Image, Stack, Text, Divider, Button, ButtonGroup, CardFooter, Heading, Center } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ productos }) => {
  const { id } = useParams()

  const filtredProducts = productos.filter((producto) => producto.id == id)

    return (
      <>
        {filtredProducts.map((p) =>{

          return (
            <div key={p.id}>
              <Center p="1rem">

              <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{p.nombre}</Heading>
            <Text>
              {p.descripcion}
              {p.categoria}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <ItemCount />
          <ButtonGroup spacing='2'>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
              </Center>
            </div>
          )
         
        })}
        
      </>
         
    )
}

export default ItemDetail