import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Profile from "../screens/Tabs/Profile";
import Notifications from "../screens/Tabs/Notifications";
import Search from "../screens/Tabs/Search";
import { View } from "react-native";

const TabNavigation = createBottomTabNavigator();

const Tab = () => {
  return (
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Home" component={Home} />
      <TabNavigation.Screen name="Profile" component={Profile} />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            console.log(navigation);
            e.preventDefault();
            navigation.push("PhotoNavigation");
          },
        })}
      />
      <TabNavigation.Screen name="Notifications" component={Notifications} />
      <TabNavigation.Screen name="Search" component={Search} />
    </TabNavigation.Navigator>
  );
};

export default () => {
  return <Tab />;
};
