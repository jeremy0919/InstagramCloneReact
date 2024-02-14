import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import {NavigationContainer} from 'react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Button } from "react-native";
import MainAccountPage from "./Components/AccountPage/MainAccountPage";
import MainPage from "./Components/MainPage/MainPage";
import ReelView from "./Components/Reels/ReelView";
import scrollPage from "./Components/SearchPage/scrollPage";
import AddPhoto from "./Components/UploadImage/AddPhoto";
//instagram is build mostly on stacks
const Tab = createBottomTabNavigator()
export default function App() {
return(
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Main Page" component={MainPage}/>
      <Tab.Screen name="Search" component={scrollPage} />
      <Tab.Screen mame ="Add Photo" component={AddPhoto}/>
      <Tab.Screen mame ="Reels" component={ReelView}/>
      <Tab.Screen name="Account Page" component={MainAccountPage}/>

    
   
    </Tab.Navigator>
  </NavigationContainer>
)

}


/*  const randomWidth = useSharedValue(10);

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