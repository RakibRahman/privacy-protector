import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
// import "./Style.css";
import { App } from "./App";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
