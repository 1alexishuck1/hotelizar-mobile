// customTheme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
      oscuro: {
        100: "#012231",
      },
      claro: {
        100: "#5A85A9"
      },
      claroTransp:{
        100: "#0122318A"
      }
    },
    fonts: {
      body: 'Roboto, sans-serif', // Cambia la fuente para el cuerpo del texto
      heading: 'Roboto, sans-serif', // Cambia la fuente para los títulos
    },
  })

export default theme;
