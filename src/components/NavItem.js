import { Text, Link as ChakraLink, useTheme } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

function NavItem({ path, name, nav, setNav }) {
  const theme = useTheme();
  return (
    <>
      <ChakraLink
        as={Link}
        to={path}
        spy={true}
        smooth="true"
        offset={0}
        style={{
          textDecoration: "none",
        }}
        onSetActive={() => setNav(path)}
      >
        <Text
          fontSize="lg"
          fontFamily={theme.fonts.primary}
          position="relative"
          transition="all .2s ease"
          color={nav === path ? theme.colors.primary : "#202020"}
          _before={{
            content: `""`,
            transition: "all .2s ease",
            position: "absolute",
            width: nav === path ? "100%" : "0%",
            height: "3px",
            bg: theme.colors.primary,
            left: nav === path ? "0" : "50%",
            top: "100%",
          }}
        >
          {name}
        </Text>
      </ChakraLink>
    </>
  );
}

export default NavItem;