import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  onChangeText: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8,
  },
});

export default Input;
