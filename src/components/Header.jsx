import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import fondo from '../img/fondo-header.png';
import { ImLocation2 } from 'react-icons/im';
import { BsFillCalendar2RangeFill, BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [formData, setFormData] = useState({
        origen: '',
        checkIn: '',
        checkOut: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleClick = async() =>{
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
            navigate('/resultados');
        }, 1500);
    }

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
        <FormControl display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap="10px" backgroundImage={fondo} backgroundSize="cover" backgroundPosition="center" width="100vw" height="100vh" position="relative" top="0">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="rgba(0, 0, 0, 0.3)" // Fondo oscuro semitransparente
          zIndex="" // Colocar detrás del contenido
        ></Box>
            <Box h="auto" p="20px" bg="claroTransp.100" borderRadius="10px" w="90%" display="flex" justifyContent="center" flexDirection={["column", "column", "row"]} alignItems="center" gap="10px">
                <Box w="100%">
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        children={<ImLocation2 color='#fff'/>}
                        />
                        <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                        placeholder="¿A donde vas?"
                        onChange={handleChange}
                        />
                    </InputGroup>
                </Box>
                <Box w="100%" display="flex" flexDirection="row" gap="10px">
                    <Box w="48.5%">
                        <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsFillCalendar2RangeFill color='#fff'/>}/>
                            <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}} type='text' w="100%" h="40px" variant='outline' placeholder="Check-In" name="caract_cel" onChange={handleChange} />
                        </InputGroup>
                    </Box>
                    <Box w="48.5%">
                        <InputGroup>
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsFillCalendar2RangeFill color='#fff'/>}/>
                            <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}} type='text' w="100%" h="40px" variant='outline' placeholder="Check-Out" name="nro_cel" onChange={handleChange} />
                        </InputGroup>
                    </Box>
                </Box>
                <Box w={["90%", "90%", "50%"]}>
                    <Button w={["100%", "100%", "100%"]} h="40px" rightIcon={<BsArrowRightCircle />} isLoading={cargando} onClick={handleClick} bg={cargando ? 'oscuro.100' : 'claro.100'} color={cargando ? '#1e1e1e' : '#fff'} variant='solid'>Buscar</Button>
                </Box>
            </Box>
            
        </FormControl>
    </Box>
  )
}

export default Header