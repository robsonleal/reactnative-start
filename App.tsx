import * as React from 'react';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/light";

export default function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Home />
    </ThemeProvider>
  );
}
