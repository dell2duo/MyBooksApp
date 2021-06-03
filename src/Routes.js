import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigators/StackNavigation";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Routes;
