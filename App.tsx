import * as React from 'react';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme/light";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <ThemeProvider theme={ theme }>
      <Home />
    </ThemeProvider>
  );
}
