import React from "react";
import {
  DefaultTheme,Provider as PaperProvider} from "react-native-paper";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Login from "./src/pages/login";
import Home from "./src/pages/home";
import { StatusBar } from "react-native";
import { ImageBackground } from "react-native";

const App = () => {
  const theme = {
    ...DefaultTheme,
    // Você pode personalizar seu tema aqui, por exemplo:
    colors: {
      ...DefaultTheme.colors,
      primary: "#E50914", // Exemplo de cor primária
      background: "#3C3C3C",
      placeholder: "#ffffff",
      text: "#ffffff",
    },
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#000"/>
        <Home />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
