import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from "../screens";

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

// export default function AppStack() {
//   return (
    // <Drawer.Navigator
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}
    // >
    //   <StatusBar barStyle="dark-content" />
    //   <Drawer.Screen name="Home" component={HomeScreen} />
    //   <Drawer.Screen name="Workouts" component={Notifications} />
    // </Drawer.Navigator>
//   );
// }


const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {/* <StatusBar barStyle="dark-content" /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Workouts" component={Notifications} />
    </Drawer.Navigator>
  );
};