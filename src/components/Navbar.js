import {
  Flex,
  Text,
  useTheme,
  Link as ChakraLink,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import NavItem from "./NavItem";

function Navbar() {
  const theme = useTheme();
  const [nav, setNav] = useState("inicio");
  return (
    <>
      <Flex
        w="100%"
        justifyContent="end"
        position="fixed"
        zIndex="1000"
        px="4rem"
        fontFamily={theme.fonts.primary}
        fontSize="xl"
        gap="1rem"
        py="1rem"
        color="#202020"
        //backdropFilter='blur(10px)'
      >
        <Flex gap="1rem">
          <NavItem path="inicio" name="Inicio" setNav={setNav} nav={nav} />
          <NavItem path="about" name="Acerca" setNav={setNav} nav={nav} />
          <NavItem path="proyectos" name="Proyectos" setNav={setNav} nav={nav} />
          <NavItem path="contact" name="Contacto" setNav={setNav} nav={nav} />
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
