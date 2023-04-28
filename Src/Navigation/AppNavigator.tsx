import { NAVIGATION } from '@/Constants';
import { Home, ImageDetails } from '@/Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const RootStack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <RootStack.Navigator initialRouteName={NAVIGATION.home}>
      <RootStack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.home}
        component={Home}
      />
      <RootStack.Screen
        options={{ headerShown: false }}
        name={NAVIGATION.imageDetails}
        component={ImageDetails}
      />
    </RootStack.Navigator>
  );
}
