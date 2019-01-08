import React, { Component } from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import colors from "./colors";

import Discover from "../screens/Discover";
import Settings from "../screens/Settings";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import Equipment from "../screens/Equipment";

const DiscoverStack = createStackNavigator(
  {
    Discover: Discover
  },
  {
    headerMode: "none"
  }
);

const SettingStack = createStackNavigator(
  {
    Settings: Settings
  },
  {
    headerMode: "none"
  }
);

const SearchStack = createStackNavigator(
  {
    Search: Search
  },
  {
    headerMode: "none"
  }
);

const EquipmentStack = createStackNavigator(
  {
    Equipment: Equipment
  },
  {
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Discover: DiscoverStack,
    Search: SearchStack,
    Equipment: EquipmentStack,
    Settings: SettingStack
  },
  {
    initialRouteName: "Discover",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let icon;
        if (routeName === "Discover") {
          icon = focused
            ? require("../../assets/icons/discover_ic_active.png")
            : require("../../assets/icons/discover_ic.png");
        } else if (routeName === "Search") {
          icon = focused
            ? require("../../assets/icons/search_ic_active.png")
            : require("../../assets/icons/search_ic.png");
        } else if (routeName === "Equipment") {
          icon = focused
            ? require("../../assets/icons/plus_ic.png")
            : require("../../assets/icons/plus_ic.png");
        } else if (routeName === "Settings") {
          icon = focused
            ? require("../../assets/icons/profile_ic_active.png")
            : require("../../assets/icons/profile_ic.png");
        }

        return (
          <Image
            source={icon}
            style={{ width: 26, height: 26, marginTop: 2 }}
            resizeMode={"contain"}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      inactiveTintColor: colors.secondaryColor,
      style: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 0.5,
        borderTopWidth: 0
      }
    }
  }
);

const AppNavigator = createSwitchNavigator({
  App: TabNavigator
});

export default createAppContainer(AppNavigator);
