import React from 'react'
import { Card,CardBody,Image,Stack,Text,Divider,Button,ButtonGroup,CardFooter,Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

    return (
        <div>
            
            <Card maxW='sm'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{producto.nombre}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                        <Link to={`/Item/${producto.id}`}>
                            detalle
                            </Link>
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item