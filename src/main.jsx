import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/ubuntu";
import {
  colors,
  fonts,
  fontWeights,
  fontSizes,
} from "/src/constants/constants.js";
import LayoutProvider from "./context/LayoutContext";
import { switchTheme } from "./components/coreThemeComponents/switch";
import { checkboxTheme } from "./components/coreThemeComponents/checkbox.jsx";
const theme = extendTheme({
  colors,
  fonts,
  fontWeights,
  fontSizes,
  components: { Switch: switchTheme, Checkbox: checkboxTheme },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </LayoutProvider>
  </React.StrictMode>
);
