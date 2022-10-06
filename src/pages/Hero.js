import {
  Box,
  chakra,
  Container,
  Flex,
  Grid,
  Icon,
  Image,
  keyframes,
  Link,
  shouldForwardProp,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { isValidMotionProp, motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import IconLink from "../components/IconLink";
function Hero() {
  const theme = useTheme();

  const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%;  x: '500px'}
  100% { transform: scale(1) rotate(360deg); border-radius: 20%; x: '0px' }
`;

  const animation = `${animationKeyframes} 90s linear infinite`;
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const width = window.innerWidth;
  console.log(width);
  return (
    <>
      <Flex
        w="100vw"
        h="100vh"
        justifyContent="center"
        id="inicio"
        style={{
          overflow: "hidden",
        }}
      >
        <Image
          src="https://res.cloudinary.com/diylksocz/image/upload/v1664759569/Cloudy_psbvbb.svg"
          w="100%"
        />

        {/* CLOUDS */}
        <ChakraBox
          style={{
            overflow: "hidden",
          }}
          animate={{
            x: [width - 120, 0, width - 120],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 100,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          position="absolute"
          top="10vh"
          left="-50vw"
        >
          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664761094/7b3206253b507c5237e8e92c7e1fa19f__1_-removebg-preview_ke21wk.png"
            h="4rem"
          />
        </ChakraBox>

        <ChakraBox
          style={{
            overflow: "hidden",
          }}
          animate={{
            x: [0, width - 120, 0],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 60,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          position="absolute"
          top="30vh"
          left="0"
        >
          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664761094/7b3206253b507c5237e8e92c7e1fa19f__1_-removebg-preview_ke21wk.png"
            h="4rem"
          />
        </ChakraBox>
        <ChakraBox
          style={{
            overflow: "hidden",
          }}
          animate={{
            x: [width - 120, 0, width - 120],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 80,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          position="absolute"
          top="50vh"
          left="0vw"
        >
          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664761094/7b3206253b507c5237e8e92c7e1fa19f__1_-removebg-preview_ke21wk.png"
            h="4rem"
          />
        </ChakraBox>
        <ChakraBox
          style={{
            overflow: "hidden",
          }}
          animate={{
            x: [0, width - 120, 0],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 90,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          position="absolute"
          top="70vh"
          left="0vw"
        >
          <Image
            src="https://res.cloudinary.com/diylksocz/image/upload/v1664761094/7b3206253b507c5237e8e92c7e1fa19f__1_-removebg-preview_ke21wk.png"
            h="4rem"
          />
        </ChakraBox>

        {/*  */}
        <Flex
          position="absolute"
          w="90vw"
          h="80vh"
          alignSelf="center"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <Box
            w="100%"
            h="100%"
            boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
            border="1px solid rgba( 255, 255, 255, 0.18)"
            borderRadius="10px"
            position="absolute"
          ></Box>
          <Flex
            w="100%"
            h="100%"
            bg="rgba(255, 255, 255, 0.15)"
            position="absolute"
            justifyContent="center"
            alignItems="center"
            gap="6rem"
            flexDir={["column", "column", "row", "row", "row"]}
          >
            <Flex justifyContent="center">
              <Grid flexWrap="wrap" textAlign="center" gap="1rem">
                <Text
                  fontSize="6xl"
                  fontFamily={theme.fonts.secondary}
                  textAlign="center"
                >
                  Hola!
                </Text>
                <Text fontSize="2xl" fontFamily={theme.fonts.primary}>
                  Soy{" "}
                  <span
                    style={{ color: theme.colors.primary, fontWeight: "600" }}
                  >
                    Luciano Sánchez{" "}
                  </span>
                  , desarrollador Web Fullstack
                </Text>
                <Text
                  fontFamily={theme.fonts.primary}
                  fontSize={["sm", "sm", "sm", "sm", "md"]}
                  textAlign="center"
                  justifySelf="center"
                  w="320px"
                >
                  Muchas gracias por visitar mi portfolio, en este sitio podrás
                  ver algunos de los proyectos en los que hé trabajado, sobre mí
                  y como contactarme.
                </Text>
                <Flex
                  justifyContent="center"
                  alignContent="center"
                  p="0.5rem 1rem 0.5rem 1rem"
                  w="200px"
                  justifySelf="center"
                  rounded="20px"
                  border="1px solid #202020"
                  role="group"
                  _hover={{
                    bg: "#202020",
                  }}
                  transition="all 0.2s ease"
                >
                  <Link
                    href="Luciano_Sanchez_Fullstack_CV.pdf"
                    download
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      fontFamily={theme.fonts.primary}
                      _groupHover={{ color: "#fff" }}
                    >
                      Descargar CV
                    </Text>
                  </Link>
                </Flex>
              </Grid>
            </Flex>
            <Flex
              w="50%"
              justifyContent="center"
              alignContent="center"
              overflow="hidden"
            >
              <Box as={motion.div} animation={animation}>
                <Image src="https://res.cloudinary.com/diylksocz/image/upload/v1664747598/pngtree-sunset-in-japan-png-image_4078813-removebg-preview_gi1blq.png" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Hero;
