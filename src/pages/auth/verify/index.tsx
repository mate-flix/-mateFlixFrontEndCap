import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Button from '../../../components/button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../../types';

// Define the navigation prop type
type VerifyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VerifyScreen'>;

// Define the route prop type
type VerifyScreenRouteProp = RouteProp<RootStackParamList, 'VerifyScreen'>;

// VerifyScreen component
const VerifyScreen: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigation = useNavigation<VerifyScreenNavigationProp>();
  const route = useRoute<VerifyScreenRouteProp>();
  const email = route.params?.email || '';

  const handleVerification = async () => {
    try {
      if (verificationCode) {
        const response = await fetch(`https://a894-197-210-226-50.ngrok-free.app/api/v1/auth/verifyEmail?token=${verificationCode}`, {
          method: 'GET',
        });

        if (response.ok) {
          const responseBody = await response.text();
          console.log('Response from server:', responseBody);

          if (responseBody.includes('verified successfully')) {
            Alert.alert('Success', 'Account verified successfully.', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Login'),
              },
            ]);
          } else if (responseBody.includes('already been verified')) {
            Alert.alert('Info', 'This account has already been verified. Please login.', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Login'),
              },
            ]);
          } else {
            Alert.alert('Error', responseBody || 'Failed to verify account.');
          }
        } else {
          const responseBody = await response.text();
          Alert.alert('Error', responseBody || 'Failed to verify account.');
        }
      } else {
        Alert.alert('Error', 'Please enter the verification code.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      Alert.alert('Error', 'An error occurred while trying to verify your account.');
    }
  };

  return (
    <View style={verifyStyles.container}>
      <Text style={verifyStyles.title}>Verification</Text>
      <Text style={verifyStyles.subtitle}>
        Enter the verification code sent to your email or click the link in your email.
      </Text>
      <Text style={verifyStyles.emailLabel}>{email}</Text>

      <TextInput
        style={verifyStyles.input}
        placeholder="Verification Code"
        onChangeText={(text) => setVerificationCode(text)}
      />

      <Button onPress={handleVerification} title="Verify" />

      <TouchableOpacity>
        <Text style={verifyStyles.resendLink}>Resend Verification Link</Text>
      </TouchableOpacity>
    </View>
  );
};

const verifyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  emailLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  resendLink: {
    color: '#007bff',
    marginTop: 20,
  },
});

export default VerifyScreen;
