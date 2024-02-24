import { primary, secondary } from "@/constants/Colors";
import { StyleProp, TextStyle } from "react-native";

interface TextStyleProps {
  paragraph: StyleProp<TextStyle>;
  title: StyleProp<TextStyle>;
}

export const textStyle: TextStyleProps = {
  paragraph: {
    fontFamily: "OswaldRegular",
    fontSize: 16,
    color: secondary,
  },
  title: {
    fontFamily: "OswaldMedium",
    fontSize: 30,
    color: secondary,
  },
};
