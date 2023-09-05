import { Box } from '@chakra-ui/react'
import React from 'react'
import CardAlojamiento from '../components/CardAlojamiento'

const Alojamiento = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" h="100vh">
        <Box w="100%" gap="20px" display="flex" flexDirection={["column", "column", "column"]}>
            <CardAlojamiento />
        </Box>
    </Box>
  )
}

export default Alojamiento