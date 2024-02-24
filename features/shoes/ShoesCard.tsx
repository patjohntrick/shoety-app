import { TitleText } from "@/components";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ShoesCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/best-seller-1.png")}
        resizeMode="cover"
        // height={100}
        // width={10}
        style={styles.img}
      />
      <TitleText style={styles.title}>Air Jordan</TitleText>
      <Text>P5,100</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    maxWidth: 150,
    // width:
    minWidth: 150,
    padding: 12,
    borderRadius: 8,
    flexGrow: 1,
  },

  img: {
    height: 100,
    width: "auto",
  },

  title: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default ShoesCard;
