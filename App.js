import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Dimensions, TextInput } from "react-native";
import Navigate from "./navigate.js";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  return (
    <Navigate/>
  );
}

