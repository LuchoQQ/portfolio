import { Flex, Grid, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import IconLink from "../components/IconLink";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Grid
        w="100vw"
        h="20vh"
        bg={theme.colors.background}
        position="relative"
        zIndex="10"
        justifyContent="center"
        alignContent="center"
      >
        <Text fontFamily={theme.fonts.secondary} fontSize='2xl'>Portfolio by LuchoQQ</Text>
        <Flex justifyContent="center" mt="1rem" gap="1rem">
          <IconLink icon={AiFillGithub} path="http://www.github.com/luchoqq" />
          <IconLink
            icon={AiFillLinkedin}
            path="http://www.linkedin.com/in/luchoqq"
          />
          <IconLink icon={AiFillMail} path="mailto:luchoqq25@gmail.com" />
        </Flex>
      </Grid>
    </>
  );
}

export default Footer;
