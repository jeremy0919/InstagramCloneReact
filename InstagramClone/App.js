import React, { useContext } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider, AuthContext } from './Components/Context/IsSignedIn'; // Import AuthContext

import LogIn from './Components/ContentHolder/NotSignedIn';
import SignedIn from './Components/ContentHolder/SignedIn';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthConsumer />
      </NavigationContainer>
    </AuthProvider>
  );
}

const AuthConsumer = () => {
  const { isSignedIn } = useContext(AuthContext);

  return isSignedIn ? <SignedIn  /> : <LogIn />;
};


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