import {
  Box,
  Flex,
  chakra,
  Container,
  shouldForwardProp,
  Text,
  useTheme,
  Icon,
  Grid,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import About from "./pages/About";
import Hero from "./pages/Hero";
import pattern from "./pattern.svg";

function App() {
  const theme = useTheme();

  const width = window.innerWidth;
  return (
    <>
      <Grid w="100vw" minH="100vh" scrollBehavior="unset" scroll>
        <Navbar />
        <Hero />
        <About />
        <Grid w="100%" minH="100vh" bg={theme.colors.background} id="proyectos">
          <Flex flexWrap="wrap" gap="10rem" justifyContent="center" my="5rem">
            <ProjectCard
              title="Somos MÁS"
              description="Irure fugiat aliqua aliqua cillum ipsum. Do dolore esse pariatur officia dolore et nisi ex consequat. Ullamco velit sit esse ad ad commodo culpa excepteur excepteur exercitation nostrud minim laborum. Ut magna nisi voluptate enim amet. Exercitation non ad esse reprehenderit. Do ad aliqua commodo magna aliquip id velit pariatur."
              img="https://res.cloudinary.com/diylksocz/image/upload/v1663619009/Captura_de_pantalla_2022-09-19_172307_rwq49k.png"
            />
            <ProjectCard
              title="Somos MÁS"
              description="Irure fugiat aliqua aliqua cillum ipsum. Do dolore esse pariatur officia dolore et nisi ex consequat. Ullamco velit sit esse ad ad commodo culpa excepteur excepteur exercitation nostrud minim laborum. Ut magna nisi voluptate enim amet. Exercitation non ad esse reprehenderit. Do ad aliqua commodo magna aliquip id velit pariatur."
              img="https://res.cloudinary.com/diylksocz/image/upload/v1663620068/Captura_de_pantalla_2022-09-19_174056_ljui82.png"
              reverse={true}
            />
            <ProjectCard
              title="Somos MÁS"
              description="Irure fugiat aliqua aliqua cillum ipsum. Do dolore esse pariatur officia dolore et nisi ex consequat. Ullamco velit sit esse ad ad commodo culpa excepteur excepteur exercitation nostrud minim laborum. Ut magna nisi voluptate enim amet. Exercitation non ad esse reprehenderit. Do ad aliqua commodo magna aliquip id velit pariatur."
              img="https://res.cloudinary.com/diylksocz/image/upload/v1663619922/Captura_de_pantalla_2022-09-19_173744_gwryo6.png"
            />
          </Flex>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
