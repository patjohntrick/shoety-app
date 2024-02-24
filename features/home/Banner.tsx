import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import bannerData from "./bannerData";

const Banner = () => {
  const randomBannerImg = () => {
    const idx = Math.round(Math.random() * bannerData.length - 1);

    return bannerData[idx];
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: randomBannerImg() }}
          resizeMode="cover"
          style={styles.img}
        />
        <View style={styles.bannerOverlay} />
        <Text style={styles.bannerText}>JUST DO IT.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  bannerContainer: {
    position: "relative",
    borderRadius: 20,
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  bannerText: {
    fontFamily: "OswaldBold",
    fontSize: 24,
    color: "white",
  },

  img: {
    position: "absolute",
    backgroundColor: "red",
    width: "100%",
    height: 100,
    zIndex: -1,
  },

  bannerOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    height: 100,
    width: "100%",
  },
});

export default Banner;
