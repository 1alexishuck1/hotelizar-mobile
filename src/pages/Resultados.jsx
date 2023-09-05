import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import Volver from '../components/Volver'
import Filtros from '../components/Filtros'
import Card from '../components/Card'
import BtnMapa from '../components/BtnMapa'

const Resultados = () => {

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" h="100vh">
        <Volver text="Resultados"/>
        <BtnMapa />
        <Box w="85%" mt="50px" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column" alignItems="center" h="100vh">
            <Box w="100%" gap="20px" display="flex" flexDirection={["column", "column", "row"]}>
              <Box>
                <Filtros/>
              </Box>
              <Box>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Resultados