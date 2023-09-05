import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { SiGooglemaps } from 'react-icons/si'

const BtnMapa = () => {

  return (
    <Box w="100%" display="flex" justifyContent="center" position="fixed" zIndex="10" bottom="5%">
        <Button borderRadius="50px" w="150px" h="45px" rightIcon={<SiGooglemaps fontSize="20px"/>} bg='oscuro.100' color='#fff' variant='solid'>Mapa</Button>
    </Box>
  )
}

export default BtnMapa