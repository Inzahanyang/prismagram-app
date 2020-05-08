import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { createCompatNavigatorFactory } from "@react-navigation/compat";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createCompatNavigatorFactory(createStackNavigator)(
  {
    TabNavigation,
    PhotoNavigation,
  },
  {
    headerMode: "none",
    mode: "modal",
  }
);

export default () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};
