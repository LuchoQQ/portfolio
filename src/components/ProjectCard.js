import { Flex, Text, Image, useTheme, Button, Grid } from "@chakra-ui/react";
import React from "react";

function ProjectCard({ title, description, img, reverse }) {
  const theme = useTheme();
  return (
    <>
      <Flex
        maxW="1000px"
        flexDir={reverse === true ? "row-reverse" : "row"}
        gap="2rem"
      >
        <Grid
          fontFamily={theme.fonts.primary}
          flexDir="column"
          justifyContent="center"
          gap="1rem"
        >
          <Text fontSize="2xl">{title}</Text>
          <Text>{description}</Text>
          <Flex>
            <Flex
              p="0.5rem 1rem 0.5rem 1rem"
              bg="red"
              borderRadius="10px"
              justifyContent="center"
              alignContent="center"
            >
              <Text>Github</Text>
            </Flex>
          </Flex>
        </Grid>
        <Image
          src={img}
          w="250px"
          fit="cover"
          border={`10px solid ${theme.colors.primary}`}
        />
      </Flex>
    </>
  );
}

export default ProjectCard;
