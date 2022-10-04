import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import React from "react";

function PortfolioCard({
  title,
  description,
  src,
  briefDescription,
  type,
  stack,
  github,
  github2,
  web,
}) {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize="4xl"
              fontFamily={theme.fonts.primary}
            >{`${title} Project`}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex h="auto" flexDir="column">
              <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                {description}
              </Text>
              <Text fontSize="xl" fontFamily={theme.fonts.primary} mt="2rem">
                {`Stack: ${stack}`}
              </Text>
              {github ? (
                <Flex mt="2rem" gap="1rem">
                  <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                    Repositorio:{" "}
                  </Text>
                  <Link href={github}>
                    <Icon as={AiOutlineGithub} fontSize="4xl" />
                  </Link>
                  {github2 ? (
                    <Link href={github2}>
                      <Icon as={AiOutlineGithub} fontSize="4xl" />
                    </Link>
                  ) : null}
                </Flex>
              ) : null}
              <Flex>
                <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                  Web:{" "}
                </Text>
                {web ? (
                  <Link href={web}>
                    <Icon as={AiOutlineGlobal} fontSize="4xl" />
                  </Link>
                ) : null}
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Grid
        maxW="20vw"
        justifySelf="center"
        position="relative"
        boxShadow="1px 1px 5px 5px #dedede"
      >
        <Flex gap="1rem" bg="#fff" flexDir="column">
          <Image src={src} w={["320px", "300px"]} />
          <Grid p="1rem" gap="1rem">
            <Box>
              <Text
                fontFamily={theme.fonts.primary}
                textAlign="center"
                fontSize="2xl"
                color="#505050"
              >
                {title}
              </Text>
              <Text
                fontSize="lg"
                textAlign="center"
                fontFamily={theme.fonts.primary}
                color="#707070"
              >
                {type}
              </Text>
            </Box>
            <Text
              textAlign="center"
              fontFamily={theme.fonts.primary}
              color="#505050"
              fontSize="sm"
            >
              {briefDescription}
            </Text>
          </Grid>
          <Flex justifyContent="center" mt="auto" mb="1rem">
            <Button onClick={onOpen} border="1px solid #202020" bg="#fff">
              <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                Ver mas
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default PortfolioCard;
