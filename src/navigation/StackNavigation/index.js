import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "../TabNavigation";
import uuid from "react-native-uuid";
import BookDetails from "../../pages/BookDetails";

const Stack = createStackNavigator();

const stackRoutes = [
  {
    name: "TabStack",
    component: TabNavigation,
  },
  {
    name: "BookDetails",
    component: BookDetails,
  },
];

const StackNavigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="TabStack">
      {stackRoutes.map((route) => (
        <Stack.Screen
          key={uuid.v4()}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigation;
