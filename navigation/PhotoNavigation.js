import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createCompatNavigatorFactory } from "@react-navigation/compat";

import SelectPhoto from "../screens/photo/SelectPhoto";
import TakePhoto from "../screens/photo/TakePhoto";
import UploadPhoto from "../screens/photo/UploadPhoto";

const PhotoTab = createMaterialTopTabNavigator();
const UploadStack = createStackNavigator();

const Photo = () => {
  return (
    <PhotoTab.Navigator tabBarPosition="bottom">
      <PhotoTab.Screen name="SelectPhoto" component={SelectPhoto} />
      <PhotoTab.Screen name="TakePhoto" component={TakePhoto} />
    </PhotoTab.Navigator>
  );
};

export default () => {
  return <Photo />;
};
