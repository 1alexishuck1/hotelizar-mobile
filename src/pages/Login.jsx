import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import FormLogin from '../components/FormLogin';
import fondo from '../img/fondo_login.jpg'

const Login = () => {
  return (
    <Box w="100%" backgroundImage={fondo} backgroundSize="cover" backgroundPosition="center" width="100vw" height="100vh" display="flex" flexDirection="column" alignItems="center" h="100vh" justifyContent="center">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="rgba(0, 0, 0, 0.3)" // Fondo oscuro semitransparente
          zIndex="" // Colocar detrás del contenido
        ></Box>
        <Box w="85%" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100vh">
            <Box w="100%" gap="20px" display="flex" justifyContent="center" alignItems="center" flexDirection={["column", "column", "row"]}>
                <FormLogin />
            </Box>
        </Box>
    </Box>
  )
}

export default Login