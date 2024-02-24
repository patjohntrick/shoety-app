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
import ShoesCard from "../shoes/ShoesCard";
import { shoesData } from "../shoes/shoesData";
import type { ShoesDataProps } from "../shoes/shoesData";
import { ShoesCategoryList } from "./ShoesCategoryList";
// export * as textStyle from '../../styles/globalTextStyle'

const Home = () => {
  const [activeTab, setActiveTab] = useState("1");
  const tabItem: TabItemProps[] = shoesData.reduce(
    (acc: any, curr: ShoesDataProps) => {
      const hasCategory =
        !acc.length ||
        !acc.filter((item: TabItemProps) => item.label === curr.category)
          .length;

      console.log("hasCategory", hasCategory);

      if (hasCategory) {
        const tabContent = shoesData.filter(
          (value) => value.category === curr.category
        );
        return acc.concat({
          id: curr.category,
          label: curr.category,
          content: <ShoesCategoryList item={tabContent} />,
        });
      }
      // console.log("curr", curr);
      return acc;
    },
    []
  );

  console.log("tabItem", tabItem);
  const tab: TabItemProps[] = [
    {
      key: "1",
      label: "Best Seller",
      content: (
        <View style={styles.tabContentContainer}>
          <ShoesCard />
          <ShoesCard />
          <ShoesCard />
        </View>
      ),
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

  tabContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
    gap: 12,
  },
});

export default Home;
