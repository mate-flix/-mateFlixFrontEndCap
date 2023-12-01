import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MateFlix!</Text>
      {/* You can add more content to the Welcome screen as needed */}
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
});

export default WelcomeScreen;
