/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { AppNavigator } from '@/Navigation/AppNavigator';
import { navigationRef } from '@/Navigation/NavigationRef';
import { Layout } from '@/Theme';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

function App(): JSX.Element {
  const backgroundStyle = {
    ...Layout.fill,
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar />
        <AppNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
