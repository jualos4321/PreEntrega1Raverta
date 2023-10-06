import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShopingCartContext'
import { Box, Button, Card, Center, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const Cart = () => {
  const { cart, cleanCart } = useContext(CartContext)
  console.log(cart)
  return (
    <div>
      <Button onClick={() => cleanCart()} colorScheme='blue'>Limpiar carrito</Button>
      {cart.map((p) => (
        <Center p='1rem' >
          <Card bg="grey" boxShadow='base'>
            <Stack  mr="40" ml='40' >
              <div key={p.nombre}>
                <Text>
                <Box m='2'>{p.nombre}</Box>

                <Box m='2'> ${p.precio}</Box>

                <Box m='2'>la cantidad: {p.quantity}</Box>
                </Text>
              </div>
              <Button bg='grey'><Link to={'/form/'}>Finalizar compra</Link></Button>
            </Stack>
           
          </Card>
          
        </Center>
        
        

      ))}


    </div>
  )
}

export default Cart