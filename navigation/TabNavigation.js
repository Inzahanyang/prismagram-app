import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Notifications from "../screens/Notifications";
import Search from "../screens/Search";
import { View } from "react-native";

const TabNavigation = createBottomTabNavigator();

const MyStack = () => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Home" component={Home} />
      <TabNavigation.Screen name="Profile" component={Profile} />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log("add");
          },
        }}
      />
      <TabNavigation.Screen name="Notifications" component={Notifications} />
      <TabNavigation.Screen name="Search" component={Search} />
    </TabNavigation.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
