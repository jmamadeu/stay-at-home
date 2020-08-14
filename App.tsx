import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { AppLoading } from 'expo';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import {
  Sniglet_400Regular,
  Sniglet_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/sniglet';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Sniglet_400Regular,
    AmaticSC_400Regular,
    AmaticSC_700Bold,
    Sniglet_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style='auto' />
        <Routes />
      </>
    );
  }
}
