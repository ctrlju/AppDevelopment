import React, { useCallback } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

import { Link, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import { screenHeight, screenWidth } from "../helpers/dimensions";

export default function Home() {
  const [fontsLoaded, fontError] = useFonts({
    SFRegular: require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    SFSemibold: require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    SFBold: require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    SFLight: require("../assets/fonts/SF-Pro-Display-Light.otf"),
    SFThin: require("../assets/fonts/SF-Pro-Display-Thin.otf"),
    SFUltralight: require("../assets/fonts/SF-Pro-Display-Ultralight.otf"),
    SFMedium: require("../assets/fonts/SF-Pro-Display-Medium.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded) {
    return null; // Você pode retornar um componente de carregamento aqui se preferir
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Screens & Components</Text>
      <Link href={"/login"} style={styles.links}>
        Login
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    margin: 20
  },
  title: {
    marginBottom: 20,
    fontFamily: "SFUltralight",
    fontSize: screenWidth * 0.1
  },
  links: {
    fontFamily: "SFLight",
    fontSize: screenWidth * 0.045
  }
});
