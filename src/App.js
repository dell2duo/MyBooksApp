import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import Routes from "./Routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    "sfpro-display-medium": require("./assets/fonts/SFPro/SF-Pro-Display-Medium.otf"),
    "sfpro-text-medium": require("./assets/fonts/SFPro/SF-Pro-Text-Medium.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <>
        <StatusBar style="auto" hidden />
        <Routes />
      </>
    );
}
