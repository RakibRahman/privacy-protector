import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
// import "./Style.css";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
