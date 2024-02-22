import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white" }}>Sample</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
