import { Flex, Text, Image, useTheme, Button } from "@chakra-ui/react";
import React from "react";

function ProjectCard({ title, description, img, reverse }) {
  const theme = useTheme();
  return (
    <>
      <Flex maxW="1000px" flexDir={reverse === true ? 'row-reverse' : 'row'} gap='2rem'>
        <Flex
          fontFamily={theme.fonts.primary}
          flexDir="column"
          justifyContent="center"
          gap="1rem"
        >
          <Text fontSize="2xl">{title}</Text>
          <Text>{description}</Text>
          <Button>Github</Button>
        </Flex>
        <Image
          src={img}
          w="300px"
          border={`10px solid ${theme.colors.primary}`}
        />
      </Flex>
    </>
  );
}

export default ProjectCard;
