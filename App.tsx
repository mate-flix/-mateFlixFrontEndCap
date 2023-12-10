import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import StackNavigator from "./stackNavigator";
import { UserContext } from "./UserContext";

export default function App() {
  return (
    <>
      <UserContext>
        <StackNavigator />
      </UserContext>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
