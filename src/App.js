import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Roboto_900Black, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { PlayfairDisplay_700Bold } from "@expo-google-fonts/playfair-display";

import Routes from "./Routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "sfpro-display-medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
    "sfpro-text-medium": require("./assets/fonts/SFPro/SF-Pro-Text-Medium.otf"),
    Roboto_900Black,
    Roboto_400Regular,
    PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <>
        <StatusBar style="auto" />
        <Routes />
      </>
    );
}
