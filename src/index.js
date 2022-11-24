import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/arimo/500.css";
import "@fontsource/poppins/800.css";
import "@fontsource/merriweather-sans/500.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
    fonts: {
        primary: "Arimo",
        secondary: "Poppins",
        tertiary: "Merriweather Sans",
    },
    colors: {
        primary: "#772222",
        background: "#F9F4EE",
    },
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
    },
});
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
