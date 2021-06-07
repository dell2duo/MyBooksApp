import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import uuid from "react-native-uuid";

import { Home as HomeIcon, Book, User } from "react-native-feather";

import Home from "../../pages/Home";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const stackRoutes = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Libraries",
    component: Home,
  },
  {
    name: "Profile",
    component: Home,
  },
];

const tabBarOptions = {
  activeTintColor: "#000",
  inactiveTintColor: "#BFBEBF",
  labelStyle: {
    paddingTop: 10,
    fontSize: 10,
    fontFamily: "sfpro-display-medium",
  },
  style: {
    paddingTop: 10,
    paddingBottom: 10,
    height: 65,
    elevation: 0,
  },
  keyboardHidesTabBar: true,
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              return <HomeIcon stroke={color} height={size} width={size} />;
            case "Libraries":
              return <Book stroke={color} height={size} width={size} />;
            case "Profile":
              return <User stroke={color} height={size} width={size} />;

            default:
              break;
          }
        },
      })}
      tabBarOptions={tabBarOptions}
    >
      {stackRoutes.map((route) => (
        <Tab.Screen
          key={uuid.v4()}
          name={route.name}
          component={route.component}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity activeOpacity={0.7} {...props} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
