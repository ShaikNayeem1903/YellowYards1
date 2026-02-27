import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/public/auth/splash';
import Login from '../screens/public/auth/Login';
import Verify from '../screens/public/auth/Verify';
import SetPassword from '../screens/public/auth/SetPassword';
import ForgotPassword from '../screens/public/auth/ForgetPassword';
import ResetPassword from '../screens/public/auth/ResetPassword';
import GetStarted from '../screens/public/auth/GetStarted';
import Tabs from './bottomtabs/Tabs';
import PropertyDetails from '../screens/protected/PropertyDetails';
import MessagesScreen from '../screens/protected/MessagesScreen';
import ChatScreen from '../screens/protected/ChatScreen';
import Support from '../screens/protected/Support';
import Inquiries from '../screens/protected/Inquiries';
import CallHistory from '../screens/protected/callHistory/index';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
   Verify: undefined;  
   SetPassword: undefined;  
   ForgetPassword: undefined;  
   ResetPassword: undefined;  
   GetStarted: undefined;  
   Tabs: undefined;  
   PropertyDetails: undefined;
   ChatScreen: undefined;
   MessagesScreen: undefined;
   Support: undefined;
   Inquiries: undefined;
   CallHistory: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="ForgetPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="PropertyDetails" component={PropertyDetails} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Support" component={Support} options={{ headerShown: false }} />
        <Stack.Screen name="Inquiries" component={Inquiries} />
        <Stack.Screen name="CallHistory" component={CallHistory} />
       

        


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
