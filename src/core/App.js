import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/themes/light";
import Home from "../features/home/components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
