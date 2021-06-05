import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigation/StackNavigation";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Routes;
