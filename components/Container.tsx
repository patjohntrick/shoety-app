import React, { CSSProperties, ReactNode } from "react";
import {
  SafeAreaView,
  StyleProp,
  StyleSheetProperties,
  TextStyle,
  ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native";

interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Container = ({ children, style }: ContainerProps) => {
  return (
    <SafeAreaView style={[style, styles.container]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
});

export default Container;
