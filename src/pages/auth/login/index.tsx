import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Input from '../../../components/input';
import Button from '../../../components/button';
import Goggle from '../../../components/goggle';


type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Welcome: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const checkAndAutoLogin = async () => {
    try {
      const savedToken = await AsyncStorage.getItem('jwtToken');

      if (savedToken) {
        const decodedToken = decodeJWT(savedToken);

        const isTokenExpired = decodedToken.exp < Date.now() / 1000;

        if (isTokenExpired) {
          console.log('Token has expired');
          // Handle token expiration, e.g., perform logout
        } else {
          navigation.navigate('Welcome');
        }
      }
    } catch (error) {
      console.error('Error checking and auto login:', error);
    }
  };

  const decodeJWT = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = JSON.parse(atob(base64));

    return decoded;
  };

  const loginWithEmail = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    // Replace the URL with your authentication API endpoint
    const apiUrl = 'https://your-backend-api.com/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.token;

        await AsyncStorage.setItem('jwtToken', jwtToken);

        navigation.navigate('Welcome');
      } else {
        const data = await response.json();
        Alert.alert('Error', data.message || 'Authentication failed.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'An error occurred while trying to log in.');
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Text>or join MateFlix</Text>
      <Text style={styles.title}>Login</Text>

      <Input
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <Button onPress={loginWithEmail} title="Login with Email" />

      <View style={styles.separator} />

      <TouchableOpacity onPress={navigateToSignUp}>
        <Text style={styles.joinText}>Join MateFlix</Text>
      </TouchableOpacity>
  
      <Goggle/>
 
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginBottom: 10,
  },
  joinText: {
    color: 'blue',
    marginTop: 10,
  },
});

export default LoginScreen;
