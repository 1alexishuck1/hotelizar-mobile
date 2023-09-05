import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import Destacados from '../components/Destacados'

const Home = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" h="100vh">
        <Box w="85%" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column" alignItems="center" h="100vh">
            <Box w="100%" gap="20px" display="flex" flexDirection={["column", "column", "column"]}>
                <Header />
                <Destacados />
            </Box>
        </Box>
    </Box>
  )
}

export default Home