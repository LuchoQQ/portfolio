import { Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  const theme = useTheme();
  return (
    <>
      <Grid w="100%" minH="100vh" bg={theme.colors.background} id="proyectos">
        <Text
          fontSize="3xl"
          textAlign="center"
          fontFamily={theme.fonts.primary}
          mt="10vh"
          alignSelf="center"
        >
          Mis Proyectos
        </Text>
        <Flex flexWrap="wrap" gap="3rem" justifyContent="center" my="5rem">
          <PortfolioCard
            title="Ibiza"
            type="Landing Page"
            briefDescription="Ibiza es una landing para un nightclub donde puedes ver las novedades en cuanto a eventos, descuentos y demás."
            description="Ibiza es una landing donde puedes ver los servicios que ofrece "
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664202579/Captura_de_pantalla_2022-09-26_111130_cvr7ky.png"
            stack="ReactJS, ChakraUI, NodeJS, MongoDB, Mongoose, AWS S3"
            github="https://github.com/LuchoQQ/sporty"
            web="https://ticketapp.vercel.app"
          />
          <PortfolioCard
            title="Sporty"
            type="E-Commerce"
            briefDescription="Sporty es una tienda virtual de ropa deportiva"
            description="Sporty es un E-commerce de ropa deportiva donde puedes buscar productos o filtrarlo según su precio, categoria, o marca. Los recursos de los productos se almacenan en la nube de AWS S3. Tambien posee backoffice para agregar/editar/eliminar el contenido"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620686/Captura_de_pantalla_2022-09-19_175038_pze0gr.png"
            stack="ReactJS, ChakraUI, NodeJS, MongoDB, Mongoose, AWS S3"
            github="https://github.com/LuchoQQ/sporty"
            web=""
          />
          <PortfolioCard
            title="Somos MAS"
            type="Portal"
            briefDescription="Somos MÁS es el portal de una ONG donde puedes seguir sus actividades y noticias"
            description="Somos MÁS es el foro de una ONG en donde se puede consultar las actividades, noticias, participantes, testimonios y contacto de dicha ONG. Posee un CMS donde un administrador puede agregar o editar nuevo contenido"
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663620068/Captura_de_pantalla_2022-09-19_174056_ljui82.png"
            stack="ReacjJS, ChakraUI, NodeJS, MySQL, Sequelize, AWS S3"
            github="https://github.com/alkemyTech/OT222-client"
            github2="https://github.com/alkemyTech/OT222-server"
          />
          <PortfolioCard
            title="Movieverse"
            type="Multimedia"
            description="Movieverse es una colección de series y películas donde puedes ver los detalles de tu filmación preferida."
            briefDescription="Movieverse es una colección de series y películas donde puedes ver los detalles de tu filmación preferida."
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
            stack="NextJS, Tailwind"
            github="https://github.com/LuchoQQ/movieverse"
            web="https://github.com/LuchoQQ/movieverse"
          />
        </Flex>
      </Grid>
    </>
  );
}

export default Portfolio;
