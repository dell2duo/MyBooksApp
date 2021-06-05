import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import uuid from "react-native-uuid";

import Home from "../../pages/Home";

const Tab = createBottomTabNavigator();

const stackRoutes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "libraries",
    component: Home,
  },
  // {
  //   name: "profile",
  //   component: TabNavigation,
  // },
];

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {stackRoutes.map((route) => (
        <Tab.Screen
          key={uuid.v4()}
          name={route.name}
          component={route.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
