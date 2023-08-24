import { SunIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'

const CarWidget = () => {
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
                    <p>2</p>
                </Box>
            </Flex>

        </div>
    )
}

export default CarWidget