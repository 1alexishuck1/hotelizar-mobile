import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowRightCircle, BsCalendarDate } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { BiRename, BiWorld } from 'react-icons/bi';
import { FaPassport } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const FormRegistro1 = () => {
    const navigate = useNavigate();
    
    const [cargando, setCargando] = useState(false);
    const [formData, setFormData] = useState({
        email_client: "",
        password_client: "",
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
            navigate('/');
        }, 1500);
    }

  return (
    <FormControl w="100%" maxW="350px" display="flex" flexDirection="column" alignItems="center" gap="15px">
        <Box w="100%">
            <Text textAlign="center" fontSize="30px" fontWeight="bold" color="#fff">Registrate</Text>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineAlternateEmail color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                placeholder="Correo electrónico"
                onChange={handleChange} name="email_client" type="email"
                />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<RiLockPasswordLine color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                placeholder="Contraseña"
                onChange={handleChange} name="password_client" type='password'
                />
            </InputGroup>
        </Box>
        <Box w="100%">
            <Button w="100%" h="40px" rightIcon={<BsArrowRightCircle />} isLoading={cargando} onClick={handleClick} bg={cargando ? 'oscuro.100' : 'claro.100'} color={cargando ? '#1e1e1e' : '#fff'} variant='solid'>Registrarme</Button>
        </Box>
        <Box w="100%" display="flex" flexDirection="row" gap="5px">
            <Text color="#fff" fontSize="14px">¿Ya tienes cuenta?</Text>
            <Text onClick={()=>{navigate('/login')}} color="#fff" fontSize="14px" fontWeight="bold" textDecoration="underline">Inicia sesión acá</Text>
        </Box>
    </FormControl>
  )
}

export default FormRegistro1