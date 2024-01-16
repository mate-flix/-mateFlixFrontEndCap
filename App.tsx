import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/auth/login'; // Update the path
import SignUpScreen from './src/pages/auth/login'; // Update the path
import WelcomeScreen from './src/pages/home'; // Update the path

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Welcome: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
