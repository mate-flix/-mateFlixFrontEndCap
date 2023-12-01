import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ScrollView } from 'react-native';
interface SignUpProps {}

enum SignUpStep {
    Email,
    Name,
    Password,
}
const SignUp :React.FC<SignUpProps> = ()=> {
    const [step,setStep] = useState<SignUpStep>(SignUpStep.Email)
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleContinue = ()=>{
        switch (step) {
            case SignUpStep.Email:
                setStep(SignUpStep.Name)
                break;
            case SignUpStep.Name:
                setStep(SignUpStep.Password)
                break;
            case SignUpStep.Password:
                handleSignUp()
                break;
            default:
                break;

        }
    }
    const handleSignUp = async () => {
        try {
            const response = await fetch('https://api.example.com/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({firstname, lastname, email, password}),
            });

            if (!response.ok) {
                throw new Error('Sign up failed');
            }
            console.log('Sign up successful');
        } catch (error) {
            if (error instanceof TypeError && error.message === 'Network request failed') {
                console.error('Network error.Please check your internet connection')
            } else {
                console.error('Sign up error:');
            }
        } }
    return (
        <View style={styles.container}>
            {step === SignUpStep.Email && (
                <><><Text style={styles.title}>Join Mate-Flix</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}/>
                </>
                    <Button title={"Continue"} onPress={handleContinue}/></>
            )}
            {step === SignUpStep.Name && (
                <><><TextInput
                    style={styles.input}
                    placeholder="Enter your first name"
                    value={firstname}
                    onChangeText={(text) => setFirstname(text)}/>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter your last name"
                        value={lastname}
                        onChangeText={(text) => setLastname(text)}/>
                </>
                    <Button title={"Continue"} onPress={handleContinue}/></>
            )}

            {step === SignUpStep.Password && (
                <><TextInput
                    style={styles.input}
                    placeholder="Create your password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}/>
                    <Button title={step === SignUpStep.Password ? 'Join Now' : 'Continue'}
                            onPress={handleContinue}/></>
            )}
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