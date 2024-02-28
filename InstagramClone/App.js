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
import UserName from './Components/SignUp/UserName';
import NotSignedIn from './Components/ContentHolder/NotSignedIn';
export default function App() {
  return (
    <UserName/>
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