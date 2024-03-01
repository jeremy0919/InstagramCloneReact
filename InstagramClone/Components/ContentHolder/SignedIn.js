import React from 'react';
import { StatusBar, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from '../MainPage/MainPage';
import ScrollPage from '../SearchPage/ScrollPage';
import UploadImageMain from '../UploadImage/UploadImageMain';
import ReelView from '../Reels/ReelView';
import MainAccountPage from '../AccountPage/MainAccountPage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MessagePage from '../MainPage/Messages/MessagePage';

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

export default function SignedIn() {
  return (
    <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor="transparent" translucent />
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
    </View>
  );
}
