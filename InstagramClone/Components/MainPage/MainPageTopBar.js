import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagePage from './Messages/MessagePage';

export default function MainPageTopBar() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.containerL}>
        <Text style={styles.text}>Instagram</Text>
      </View>

      <View style={styles.containerR}>
        <Button title="button"></Button>
        <Stack.Navigator initialRouteName="MessagePage">
          <Stack.Screen
            name="Likes"
            component={MessagePage}
            options={{
              headerRight: () => (
                <Button
                  title="Go to Likes"
                  onPress={() => {
                    // Navigate to the Likes screen
                    // You can customize this logic as needed
                  }}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Messages"
            component={MessagePage}
            options={{
              headerRight: () => (
                <Button
                  title="Go to Messages"
                  onPress={() => {
                    // Navigate to the Messages screen
                    // You can customize this logic as needed
                  }}
                />
              ),
            }}
          />
        </Stack.Navigator>
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
