import { Icon, Link } from "@chakra-ui/react";
import React from "react";

function IconLink({icon, path}) {
  return (
    <>
      <Link href={path} isExternal>
        <Icon as={icon} fontSize="3xl" />
      </Link>
    </>
  );
}

export default IconLink;
