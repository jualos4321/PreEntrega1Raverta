import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Flex>
                <Spacer/>
                <Box pr="770">
                    <h1>{greeting}</h1>
                </Box>
            </Flex>
        </>
    )
}

export default ItemListContainer