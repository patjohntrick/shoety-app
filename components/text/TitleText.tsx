import { textStyle } from "@/styles/globalTextStyle";
import React, { PropsWithChildren } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

interface TextTitleProps {
  style?: StyleProp<TextStyle>;
}

const TitleText = ({ children, style }: PropsWithChildren & TextTitleProps) => {
  return (
    <Text style={[textStyle.paragraph, styles.title, style]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "OswaldMedium",
  },
});

export default TitleText;
