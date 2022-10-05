import { useTheme, Grid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Portfolio from "./pages/Portfolio";

function App() {
  const theme = useTheme();
  const width = window.innerWidth;
  return (
    <>
      <Grid w="100vw" minH="100vh"  >
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Contact /> 
        <Footer />
      </Grid>
    </>
  );
}

export default App;
