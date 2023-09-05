import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto from '../img/foto.jpg';
import maps from '../img/maps.jpg';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import { FaBed } from 'react-icons/fa';
import CardComentarios from './CardComentarios';

const CardAlojamiento = () => {
    const onChange = (index, item) => {
        // Manejar el cambio de elemento en el carousel
    };

    const onClickItem = (index, item) => {
        // Manejar el clic en un elemento del carousel
    };

    const onClickThumb = (index, item) => {
        // Manejar el clic en una miniatura del carousel
    };

    const handleClick = () => {
        window.history.go(-1);
      };

  return (
    <Box cursor="pointer" w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
        <Box w="100%" height="350px" display="flex" flexDirection="column" alignItems="center">
            <Box w="100%" h="40px" display="flex" alignItems="center" justifyContent="center" bg="rgba(0, 0, 0, 0.3)" maxW={["400px", "600px", "800px"]} position="fixed" zIndex="1" top="0" >
                <Box w="90%">
                    <MdOutlineKeyboardArrowLeft color="#fff" fontSize="30px" onClick={handleClick}/>
                </Box>
            </Box>
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <Box>
                    <Image src={foto} w="100%" height="350px" objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height="350px" objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height="350px" objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height="350px" objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height="350px" objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height="350px" objectFit="fill"/>
                </Box>
            </Carousel>
        </Box>
        <Box w="85%" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" gap="10px">
                <Box>
                    <Text fontSize="20px" fontWeight="bold" color="#1e1e1e">Nombre del alojamiento</Text>
                </Box>
                <Box display="flex" flexDirection="row" gap="5px" alignItems="center" mt="-10px">
                    <CiLocationOn color="rgb(0,0,0,0.5)"/>
                    <Text color="rgb(0,0,0,0.5)">9 de Julio 531, Concepción del Uruguay</Text>
                </Box>
                <Box display="flex" flexDirection="row" gap="5px" alignItems="center" mt="-10px">
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <Text>/5</Text>
                    </Box>
                    <Text color="#1e1e1e">(30 comentarios)</Text>
                </Box>
            </Box>
            <Divider color="#1e1e1e" m="10px 0" />
            <Box color="rgb(0,0,0,0.7)">
                <Box display="flex" flexDirection="row" gap="5px" justifyContent="space-between" alignItems="center">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="row" gap="5px" justifyContent="space-between" alignItems="center">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>3 camas</Text>
                    </Box>
                </Box>
            </Box>
            <Divider color="#1e1e1e" m="10px 0" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Box w="100%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Box display="flex" flexDirection="row" gap="5px" alignItems="center">
                        <Text fontSize="18px" fontWeight="bold">Comentarios</Text>
                        <Text>(30)</Text>
                    </Box>
                    <Text textDecoration="underline">Ver todos</Text>
                </Box>
                <CardComentarios />
                <CardComentarios />
            </Box>
            <Divider color="#1e1e1e" m="10px 0" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Text fontSize="18px" fontWeight="bold">Donde estamos</Text>
                <Image mt="10px" borderRadius="5px" src={maps} />
            </Box>
        </Box>
        <br></br>
    </Box>
  )
}

export default CardAlojamiento