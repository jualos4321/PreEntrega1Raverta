import React, { useContext, useState } from 'react'
import { Button, Stack, Box } from '@chakra-ui/react'
import CarWidget from './CarWidget'
import { CartContext } from '../context/ShopingCartContext'


const ItemCount = ({stock, initial, onAdd}) => {
   const [quantity, setQuantity] = useState(initial)

   const increment = () =>{
    if(quantity < stock){
        setQuantity(quantity+1)
    }
   }

   const decrement = () =>{
    if(quantity > 1){
        setQuantity(quantity - 1)
    }
   }

    return (
        <div>
            <Stack direction={['column', 'row']} spacing="24px">
                <Box w="40px" h="40px">
                    <Button onClick={increment}>
                        +
                    </Button>
                </Box>
                <Box>
               {quantity}
                </Box>
                <Box w="40px" h="40px">
                    <Button onClick={decrement}>
                        -
                    </Button>
                </Box>
                <Box>
                    <Button variant='ghost' colorScheme='blue' onClick={()=> onAdd(quantity)} disabled={!stock}>
                        Agregar al carrito
                    </Button>
                </Box>
            </Stack>
            
        </div>
    )
}

export default ItemCount