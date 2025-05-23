// app/index.tsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola Mundo con expo-router! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eda71a",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0c0918",
  },
});
