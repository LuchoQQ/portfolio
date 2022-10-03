import {
  chakra,
  Container,
  Flex,
  Grid,
  Image,
  shouldForwardProp,
  Text,
} from "@chakra-ui/react";
import { keyframes, useTheme } from "@emotion/react";
import { isValidMotionProp, motion } from "framer-motion";
import React from "react";

function About() {
  const theme = useTheme();

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }
  100% { transform: scale(1) rotate(360deg); }
`;

  const animation = `${animationKeyframes} 20s linear infinite`;

  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <>
      <Flex
        w="100vw"
        minH="100vh"
        id="about"
        bg={theme.colors.background}
        position="relative"
      >
        <Image
          src="https://res.cloudinary.com/diylksocz/image/upload/v1664822092/62-623426_r-and-js-garden-restaurant-chinese-flower-png-removebg-preview_lth1p6.png"
          transform="rotate(90deg)"
          h="200px"
          position="absolute"
          top="115px"
          left="-100px"
          filter="blur(1px)"
        />
        <Container
          fontFamily={theme.fonts.primary}
          maxW="1400px"
          minW="50vw"
          backdropFilter="blur(1px)"
          position="relative"
          zIndex="10"
          bg="rgba(255,255,255,0.8)"
        >
          <Flex h="100%" flexWrap="wrap" justifyContent="center" gap="2rem">
            <Grid
              mt="2rem"
              alignSelf="center"
              gap=".5rem"
              justifyContent="center"
            >
              <Text fontSize="4xl" textAlign="center">
                Sobre mí
              </Text>
              <Text
                fontSize="md"
                w={["300px", "300px", "400px", "400px"]}
                textAlign="justify"
              >
                Tengo 21 años, soy de Corrientes Argentina
              </Text>
              <Text
                fontSize="md"
                w={["300px", "300px", "400px", "400px"]}
                textAlign="justify"
              >
                Hace más de un año que descubrí la programación, desde entonces
                tanto programar como aprender son mi principal y favorita
                actividad del día.
              </Text>
              <Text
                fontSize="md"
                w={["300px", "300px", "400px", "400px"]}
                textAlign="justify"
              >
                Tengo experiencia realizando E-Commerces, portales,
                landing-pages, aplicaciones webs. Tanto del lado del Frontend
                como del Backend.
              </Text>
              <Text
                fontSize="md"
                w={["300px", "300px", "400px", "400px"]}
                textAlign="justify"
              >
                La tecnología, la ciencia y los videojuegos me fascinan, siempre
                estoy dispuesto a conversar sobre estos tópicos!.
              </Text>
            </Grid>
            <Grid alignSelf="center">
              <Image src="https://res.cloudinary.com/diylksocz/image/upload/v1664819372/output-onlinegiftools_yuorhw.gif" />
            </Grid>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}

export default About;
