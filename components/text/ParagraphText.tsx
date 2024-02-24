import { textStyle } from "@/styles/globalTextStyle";
import React, { PropsWithChildren } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface ParagraphTextProps {
  style?: StyleProp<TextStyle>;
}

const ParagraphText = ({
  children,
  style,
}: PropsWithChildren & ParagraphTextProps) => {
  return <Text style={[style, textStyle.title]}>{children}</Text>;
};

export default ParagraphText;
