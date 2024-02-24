import React, { ReactNode, useState } from "react";
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { textStyle } from "../styles/globalTextStyle";
import { TabItemProps } from "@/types/TabItemProps";
import { primary, secondary } from "@/constants/Colors";

interface TabProps {
  tab: TabItemProps[];
  style?: StyleProp<ViewStyle>;
  defaultTabKey?: string | number;
}

interface TabLabelProps {
  style?: StyleProp<ViewStyle>;
  tabKey: string;
  currentKey: string | number;
  label: TabItemProps["label"];
  onChange: (key: string) => void;
}

// Tab
const Tab = ({ tab, defaultTabKey, style }: TabProps) => {
  const [activeTab, setActiveTab] = useState(defaultTabKey ?? tab[0].key);
  //   const hasDuplicateKey = tab.some((val, i) => tab.indexOf(val) !== i);
  //   if (hasDuplicateKey) throw new Error("Found dulicated key");

  const TabContentContent = tab.filter((item) => item.key === activeTab)[0]
    .content;

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <View style={[styles.tabContainer]}>
      <FlatList
        style={style}
        data={tab}
        horizontal
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabLabel
            tabKey={item.key}
            label={item.label}
            onChange={onChange}
            currentKey={activeTab}
          />
        )}
      />
      <TabContent content={TabContentContent} style={style} />
    </View>
  );
};

// TabLabel
const TabLabel = ({
  onChange,
  tabKey,
  label,
  currentKey,
  style,
}: TabLabelProps) => {
  const isActive = tabKey === currentKey;
  //   console.log(style);
  return (
    <TouchableOpacity
      onPress={() => onChange(tabKey)}
      style={[
        // style,
        styles.labelContainer,
        { backgroundColor: isActive ? secondary : "white" },
      ]}
    >
      <Text
        style={[textStyle.paragraph, { color: isActive ? primary : secondary }]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// TabContent
const TabContent = ({
  content,
  style,
}: Pick<TabItemProps, "content"> & Pick<TabProps, "style">) => {
  const isString = typeof content === "string";
  return (
    <View style={[style, styles.tabContentContainer]}>
      {isString ? <Text>{content}</Text> : content}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  labelContainer: {
    marginRight: 12,
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  labelText: {
    color: "black",
  },

  tabContentContainer: {
    marginTop: 12,
  },

  tabContainer: {
    marginTop: 8,
  },
});

export default Tab;
