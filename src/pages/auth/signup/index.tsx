import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../types';

// Define the navigation prop type
type VerifyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'VerifyScreen'>;
interface SignUpProps {}

enum SignUpStep {
  Email,
  Name,
  Password,
}

const SignUp: React.FC<SignUpProps> = () => {
  const [step, setStep] = useState<SignUpStep>(SignUpStep.Email);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<VerifyScreenNavigationProp>();

  const handleContinue = async () => {
    try {
      setLoading(true);
      switch (step) {
        case SignUpStep.Email:
          setStep(SignUpStep.Name);
          break;
        case SignUpStep.Name:
          setStep(SignUpStep.Password);
          break;
        case SignUpStep.Password:
          await handleSignUp();
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('https://a894-197-210-226-50.ngrok-free.app/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      console.log('Server response:', response);

      if (!response.ok) {
        // Handle sign-up failure
        // ...
      } else {
        // Sign up successful
        console.log('Sign up successful');

        // Navigate to the verification screen
        navigation.navigate('VerifyScreen', {email});
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  return (
    <View style={styles.container}>
      {step === SignUpStep.Email && (
        <>
          <Text style={styles.title}>Join Mate-Flix</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Button title="Continue" onPress={handleContinue} />
        </>
      )}
      {step === SignUpStep.Name && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <Button title="Continue" onPress={handleContinue} />
        </>
      )}

      {step === SignUpStep.Password && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Create your password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title={step === SignUpStep.Password ? 'Join Now' : 'Continue'} onPress={handleContinue} />
        </>
      )}

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default SignUp;
