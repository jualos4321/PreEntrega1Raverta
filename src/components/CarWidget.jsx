import { SunIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShopingCartContext'

const CarWidget = () => {
    const { cart } = useContext(CartContext)
    return (
        <div>
            <Flex>
                <Box>
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </Box>
                <Divider />
                <Box>
                    {cart.map((p)=>(
                        <div key={p.nombre}>
                            {p.quantity}
                        </div>
                    ))}
                </Box>
            </Flex>

        </div>
    )
}

export default CarWidget