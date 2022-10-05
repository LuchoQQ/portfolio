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
import TechsIcon from "../components/TechIcon";

function About() {
  const theme = useTheme();

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); }
  100% { transform: scale(1) rotate(360deg); }
`;

  return (
    <>
      <Flex
        w="100vw"
        minH="90vh"
        id="about"
        bg="rgba(255,255,255,0.8)"
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
        >
          <Flex h="100%" flexWrap="wrap" justifyContent="center" gap="2rem">
            <Flex
              mt="2rem"
              alignSelf="center"
              gap=".5rem"
              justifyContent="center"
            >
              <Grid>
                <Text fontSize={["4xl", "4xl", "4xl", "4xl", "6xl"]} textAlign="center">
                  Sobre mí
                </Text>
                <Text
                  fontSize={["md", "md", "md", "md", "xl"]}
                  w={["300px", "300px", "400px", "400px"]}
                  textAlign="justify"
                >
                  Tengo 21 años, soy de Corrientes Argentina
                </Text>
                <Text
                  fontSize={["md", "md", "md", "md", "xl"]}
                  w={["300px", "300px", "400px", "400px"]}
                  textAlign="justify"
                >
                  Hace más de un año que descubrí la programación, desde
                  entonces tanto programar como aprender son mi principal y
                  favorita actividad del día.
                </Text>
                <Text
                  fontSize={["md", "md", "md", "md", "xl"]}
                  w={["300px", "300px", "400px", "400px"]}
                  textAlign="justify"
                >
                  Tengo experiencia realizando E-Commerces, portales,
                  landing-pages, aplicaciones webs. Tanto del lado del Frontend
                  como del Backend.
                </Text>
                <Text
                  fontSize={["md", "md", "md", "md", "xl"]}
                  w={["300px", "300px", "400px", "400px"]}
                  textAlign="justify"
                >
                  La tecnología, la ciencia y los videojuegos me fascinan,
                  siempre estoy dispuesto a conversar sobre estos tópicos!.
                </Text>
              </Grid>
            </Flex>
            <Grid alignSelf="center">
              <Image src="https://res.cloudinary.com/diylksocz/image/upload/v1664819372/output-onlinegiftools_yuorhw.gif" />
            </Grid>
          </Flex>
        </Container>
      </Flex>
      <Flex w="100vw" h="10vh" justifyContent='center' gap='1rem' flexWrap='wrap' mb='10vh'>
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856274/html_hjlzsl.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856738/CSS-Logo_nugbhg.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856817/JavaScript-logo_sxiss8.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856844/1200px-React.svg_aewkox.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857068/rzylUjaf_400x400-removebg-preview_r2o3jt.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857113/Tailwind_CSS_Logo.svg_lpcn16.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663856892/5848309bcef1014c0b5e4a9a_fbvhg7.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663858300/Typescript_logo_2020.svg_hobvh4.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857396/1200px-Node.js_logo.svg_ep0yw5.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857488/Expressjs_zhwchj.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857517/MongoDB_Logo.svg_bqal2y.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857592/1280px-Amazon_Web_Services_Logo.svg_rocnso.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857594/MySQL-logo_jz68gg.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857597/Postgresql_elephant.svg_p0dyht.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857949/Screen_Shot_2019-06-10_at_8.40.12_PM_aceu9w.png" />
        <TechsIcon src="https://res.cloudinary.com/diylksocz/image/upload/v1663857950/58482ee4cef1014c0b5e4a75_ibdwso.png" />
      </Flex>
    </>
  );
}

export default About;
