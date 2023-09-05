import { Box, Button, ButtonGroup, CardBody, CardFooter, Boxider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import foto from '../img/foto.jpg';
import { AiFillStar } from 'react-icons/ai';
import { ImLocation2 } from 'react-icons/im';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();
    const onChange = (index, item) => {
        // Manejar el cambio de elemento en el carousel
    };

    const onClickItem = (index, item) => {
        // Manejar el clic en un elemento del carousel
    };

    const onClickThumb = (index, item) => {
        // Manejar el clic en una miniatura del carousel
    };

  return (
    <Box onClick={()=>{navigate('/alojamiento')}} cursor="pointer" w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
        <Box w="100%">
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <Box>
                    <Image src={foto} w="340px" height="200px" borderRadius="10px 10px 0 0"/>
                </Box>
                <Box>
                    <Image src={foto} w="340px" height="200px" borderRadius="10px 10px 0 0"/>
                </Box>
                <Box>
                    <Image src={foto} w="340px" height="200px" borderRadius="10px 10px 0 0"/>
                </Box>
                <Box>
                    <Image src={foto} w="340px" height="200px" borderRadius="10px 10px 0 0"/>
                </Box>
                <Box>
                    <Image src={foto} w="340px" height="200px" borderRadius="10px 10px 0 0"/>
                </Box>
                <Box>
                    <Image src={foto} w="340px" height="200px" borderRadius="10px 10px 0 0"/>
                </Box>
        </Carousel>
        <Box borderRadius="0 0 10px 10px" h="80px" mb="20px" mt="-40px" w="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" boxShadow="-4px 7px 21px 0px rgba(112,112,112,0.75)">
            <Box w="100%" p="0px 10px" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text textAlign="left" fontWeight="bold" fontSize="20px">Nombre del alojamiento</Text>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <AiFillStar />
                    <Text textAlign="left">5</Text>
                </Box>
            </Box>
            <Box p="0px 10px" w="100%" display="flex" flexDirection="row" alignItems="center">
                <ImLocation2 color="gray.300" bg="gray.300" />
                <Text color="gray.600">9 de Julio, Concepción del Uruguay</Text>
            </Box>
            <Box p="0px 10px" w="100%" display="flex" flexDirection="row" alignItems="center" gap="5px">
                <Text fontWeight="bold">50 USD</Text>
                <Text color="gray.600">/noche</Text>
            </Box>
        </Box>
        </Box>
        
    </Box>
  )
}

export default Card