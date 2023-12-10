import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/pages/auth/login";
import RegisterScreen from "./src/pages/auth/signup";
import Main from "./src/pages/home";
import ForgotPassword from "./src/pages/auth/forgotPassword";
import Goggle from "./src/components/goggle";
import VerifyScreen from "./src/pages/auth/verify";
// import HomeScreen from "./src/pages/chatHome";
// import FriendsScreen from "./src/pages/friendScreen";
// import ChatsScreen from "./src/pages/chatScreen";
// import ChatMessagesScreen from "./src/pages/chatMessagesScreen";

const StackNavigator: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Main" component={Main} />

         <Stack.Screen name="Goggle" component={Goggle} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="VerifyScreen" component={VerifyScreen}
        
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
