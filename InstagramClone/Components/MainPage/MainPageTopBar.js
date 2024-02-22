import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessagePage from './Messages/MessagePage';

const stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator();
export default function MainPageTopBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerL}>
        <Text style={styles.text}>Instagram</Text>
      </View>

      <View style={styles.containerR}>
        <Tab.Navigator initialRouteName="Likes">
          <Tab.Screen name="Likes" component={MessagePage} />
          <Tab.Screen name="Messages" component={MessagePage} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containerL: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  containerR: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
});
