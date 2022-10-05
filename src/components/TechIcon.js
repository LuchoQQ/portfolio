import { Image } from "@chakra-ui/react";
import React from "react";

function TechsIcon({ src }) {
  return (
    <>
      <Image
        src={src}
        height={["30px", "30px", "30px", "30px", "30px", "50px"]}
        fit="cover"
        transition="all .2s ease"
        _hover={{ transform: "scale(1.1)" }}
      />
    </>
  );
}

export default TechsIcon;
