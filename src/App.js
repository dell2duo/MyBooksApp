import { StatusBar } from "expo-status-bar";
import React from "react";

import Routes from "./Routes";

export default function App() {
  return (
    <>
      <StatusBar style="auto" hidden />
      <Routes />
    </>
  );
}
