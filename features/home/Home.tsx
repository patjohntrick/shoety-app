import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "./Banner";
import { router } from "expo-router";
import { Container, Tab } from "@/components";
import { textStyle } from "../../styles/globalTextStyle";
import { TabItemProps } from "@/types/TabItemProps";
import { primary } from "@/constants/Colors";
// export * as textStyle from '../../styles/globalTextStyle'

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const tab: TabItemProps[] = [
    {
      key: "1",
      label: "Best Seller",
      content: "Tab 1 desc",
    },
    {
      key: "2",
      label: "Men",
      content: "Tab 2 desc",
    },
    {
      key: "3",
      label: "Women",
      content: <Text>text component</Text>,
    },
    {
      content: "Kids",
      key: "4",
      label: "Kids",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Banner />
        <View style={styles.innerContainer}>
          <Text style={[textStyle.title]}>Discover</Text>
        </View>
        <Tab tab={tab} style={styles.tab} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  innerContainer: {
    paddingHorizontal: 20,
    // fontFamily:
  },

  tab: {
    paddingHorizontal: 20,
    // backgroundColor: "red",
  },
});

export default Home;
