import { Box, Card, Center,Button, Stack, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, getFirestore, Firestore } from 'firebase/firestore'
import { db } from '../main'

 

const Form = () => {
 
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [idPurchase, setIdPurchase] = useState("2564dfds")
    const [orderid, setOrderId] =useState(null)

 

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert("campo nombre vacío") : alert(`Bienvenido, ${nombre}`)
        email === "" ? alert("campo email vacío") : alert(`Registrado con el email, ${email}`)

        addDoc(ordersCollection,order).then(({ id })=> setOrderId(id))

    }

    const order ={
        nombre, email
    }

    const ordersCollection = collection(db, "orden")

    return (

        <>
        <Center>
            <Stack bg={'gray'} p="40"  boxShadow={'outline'}> 
            
            <form onSubmit={handleSubmit}>

               <Box bg={"white"}> <Input colorScheme='blue' pr={"10"}  type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} /></Box>
                <Box bg={"white"} mb="20" ><Input colorScheme='blue' pr={"10"} type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /></Box>

                <Button colorScheme='blue' ml="15" type='submit'>Enviar</Button>

            </form>

           <Box color={"white"} boxShadow={'outline'}> <h3>Id de tu compra:{orderid}</h3></Box>
           
            </Stack>
            </Center>

        </>

    )

}

 

export default Form