import React from "react";
import { Button } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface LandingPageProps {
  navigation: any; // Import the type from 'react-navigation' or 'react-navigation/native'
}

const LandingPage: React.FC<LandingPageProps> = ({ navigation }) => {
  const navigateToNextScreen = () => {
    navigation.navigate("NextScreen");
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("../../components/images/mateflixLogo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>
          Welcome to an affordable living experience
        </Text>
        <Text style={styles.title1}>tailored for students in Nigeria.</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={navigateToNextScreen}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button1} onPress={navigateToNextScreen}>
          <Text style={styles.buttonText1}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontStyle: "normal",
  },
  title1: {
    fontSize: 20,
    marginBottom: 10,
    fontStyle: "normal",
  },
  button: {
    position: "absolute",
    bottom: 50,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  button1: {
    position: "absolute",
    top: 10,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText1: {
    color: "white",
    fontSize: 18,
    backgroundColor: "black",
    alignItems: "center",
  },
});

export default LandingPage;
