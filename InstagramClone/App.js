import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "./Components/MainPage/MainPage";
import ScrollPage from "./Components/SearchPage/ScrollPage";
import AddPhoto from "./Components/UploadImage/AddPhoto";
import ReelView from "./Components/Reels/ReelView";
import MainAccountPage from "./Components/AccountPage/MainAccountPage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          style: { backgroundColor: 'black' }, // Set the background color here
          tabBarLabelStyle: { color: 'black' } // Set the text color here
        }}
      >
        <Tab.Screen name="Pass in top bar here if possible" component={MainPage}/>
        <Tab.Screen name="Search" component={ScrollPage} />
        <Tab.Screen name="Add Photo" component={AddPhoto}/>
        <Tab.Screen name="Reels" component={ReelView} s/>
        <Tab.Screen name="Account Page" component={MainAccountPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/*  const randomWidth = useSharedValue(10);
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