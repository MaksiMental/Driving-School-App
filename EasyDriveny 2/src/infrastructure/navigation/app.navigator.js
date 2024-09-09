import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { DrivingSchoolNavigator } from "./drivingSchool.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsScreen } from "../../features/settings/settings.screen";
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Skoler") {
          iconName = "search-outline";
        } else if (route.name === "Kort") {
          iconName = "map";
        } else if (route.name === "Indstillinger") {
          iconName = "md-settings";
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    })}
  >
    <Tab.Screen
      name="Skoler"
      component={DrivingSchoolNavigator}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Kort"
      component={MapScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Indstillinger"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);
