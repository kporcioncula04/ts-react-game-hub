import React from "react";
import ReactDOM from "react-dom/client";
// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
