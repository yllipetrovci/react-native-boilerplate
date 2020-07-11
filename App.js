import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Screens
 */
import HomeScreen from './src/pages/home-screen';
import LoginScreen from './src/pages/login-screen';

const Stack = createStackNavigator();
const defaultOptions = {
  headerShown: false
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={defaultOptions}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;