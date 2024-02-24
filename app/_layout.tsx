import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { StatusBar } from "expo-status-bar";
import Colors, { primary, secondary } from "@/constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(tabs)",
// };

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    OswaldExtraLight: require("../assets/fonts/Oswald-ExtraLight.ttf"),
    OswaldLight: require("../assets/fonts/Oswald-Light.ttf"),
    OswaldRegular: require("../assets/fonts/Oswald-Regular.ttf"),
    OswaldMedium: require("../assets/fonts/Oswald-Medium.ttf"),
    OswaldSemiBold: require("../assets/fonts/Oswald-SemiBold.ttf"),
    OswaldBold: require("../assets/fonts/Oswald-Bold.ttf"),
    // ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  // const themeProviderValueProps =
  //   colorScheme === "dark" ? DarkTheme : DefaultTheme;

  // const theme = {
  //   dark: true,
  //   colors: {
  //     primary: "rgb(0, 0, 0)",
  //     background: "rgb(255, 255, 255)",
  //     card: "rgb(255, 255, 255)",
  //     text: "rgb(28, 28, 30)",
  //     border: "rgb(216, 216, 216)",
  //     notification: "rgb(255, 59, 48)",
  //   },
  // };

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerTitleStyle: { fontFamily: "OswaldMedium", color: secondary },
            headerShadowVisible: false,
            headerStyle: { backgroundColor: primary },
            headerRight: () => (
              <View style={{ marginRight: 20 }}>
                <FontAwesome5 name="shopping-bag" size={18} color={secondary} />
              </View>
            ),
          }}
        />
        {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
      </Stack>
    </ThemeProvider>
  );
}
