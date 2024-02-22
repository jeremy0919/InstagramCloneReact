import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "./Components/MainPage/MainPage";
import ScrollPage from './Components/SearchPage/ScrollPage';
import UploadImageMain from './Components/UploadImage/UploadImageMain';
import ReelView from "./Components/Reels/ReelView";
import MainAccountPage from "./Components/AccountPage/MainAccountPage";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessagePage from './Components/MainPage/Messages/MessagePage';

const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator initialRouteName="Feed">
      <TopTab.Screen name="Feed" component={MainPage} />
      <TopTab.Screen name="Likes" component={MessagePage} />
      <TopTab.Screen name="Messages" component={MessagePage} />
    </TopTab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            style: { backgroundColor: 'black' },
            tabBarLabelStyle: { color: 'black' },
          }}
 
        >
          <Tab.Screen name="MainPage" component={TopTabNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Search" component={ScrollPage} options={{ headerShown: false }} />
          <Tab.Screen name="Add Photo" component={UploadImageMain} />
          <Tab.Screen name="Reels" component={ReelView} />
          <Tab.Screen name="Account Page" component={MainAccountPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

/*  const randomWidth = useSharedValue(10);r
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: "black", margin: 30 },
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
  );*/