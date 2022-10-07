import {
  Flex,
  Text,
  useTheme,
  Link as ChakraLink,
  Box,
  Icon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import IconLink from "./IconLink";
import NavItem from "./NavItem";

function Navbar() {
  const theme = useTheme();
  const [nav, setNav] = useState("inicio");
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        position="fixed"
        zIndex="1000"
        px="4rem"
        fontFamily={theme.fonts.primary}
        fontSize="xl"
        gap="1rem"
        py="1rem"
        color="#202020"
        backdropFilter={['', '', '', 'blur(10px)', 'blur(10px)']}

      >
        <Flex flexDir="column" >
          <Icon
            as={FaBars}
            display={["block", "block", "block", "none", "none"]}
            fontSize="4xl"
            onClick={() => setMobile(!mobile)}
            zIndex="10"
            alignSelf="center"
          />
          <Flex
            /* position="absolute"
            top="0"
            left="0"
            transition="all 0.5s ease"
            w="100vw"
            h="100vh"
            flexDir="column"
            justifyContent="center"
            gap="3rem"
            bg="rgba(255,255,255,0.8)"
            backdropFilter="blur(10px)" */
            position='fixed'
            top='0'
            left={mobile ? '0' : '-110vw'}
            display={["flex", "flex", "flex", "none", "none"]}
            flexDir="column"
            alignSelf="center"
            justifyContent="center"
            gap="3rem"
            w="100vw"
            h='100vh'
            bg='rgba(255,255,255,0.8)'
          >
            <NavItem path="inicio" name="Inicio" setNav={setNav} nav={nav} />
            <NavItem path="about" name="Acerca" setNav={setNav} nav={nav} />
            <NavItem
              path="proyectos"
              name="Proyectos"
              setNav={setNav}
              nav={nav}
            />
            <NavItem path="contact" name="Contacto" setNav={setNav} nav={nav} />
          </Flex>
        </Flex>
        <Flex
          gap="1rem"
          mr="auto"
          display={["none", "none", "none", "flex", "flex"]}
          
        >
          <IconLink icon={AiFillGithub} path="http://www.github.com/luchoqq" />
          <IconLink
            icon={AiFillLinkedin}
            path="http://www.linkedin.com/in/luchoqq"
          />
          <IconLink icon={AiFillMail} path="mailto:luchoqq25@gmail.com" />
        </Flex>
        <Flex gap="1rem" display={["none", "none", "none", "flex", "flex"]}>
          <NavItem path="inicio" name="Inicio" setNav={setNav} nav={nav} />
          <NavItem path="about" name="Acerca" setNav={setNav} nav={nav} />
          <NavItem
            path="proyectos"
            name="Proyectos"
            setNav={setNav}
            nav={nav}
          />
          <NavItem path="contact" name="Contacto" setNav={setNav} nav={nav} />
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
