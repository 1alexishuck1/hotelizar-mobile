import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

const Destacados = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
        <Box w="100%">
            <Text fontWeight="bold">Destacados</Text>
        </Box>
        <Box>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Box>
    </Box>
  )
}

export default Destacados