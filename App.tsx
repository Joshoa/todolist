import React, { useEffect } from 'react';
import { StatusBar } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Home } from "./src/screens/Home";

export default function App() {
  SplashScreen.preventAutoHideAsync();
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <>
        <StatusBar />
        <Home />
      </>
    );
  }
}