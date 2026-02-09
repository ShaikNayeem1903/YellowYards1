import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/public/auth/splash';
import Login from '../screens/public/auth/Login';
import Verify from '../screens/public/auth/Verify';
import SetPassword from '../screens/public/auth/SetPassword';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
   Verify: undefined;  
   SetPassword: undefined;  
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
