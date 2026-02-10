import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { moderateScale, verticalScale, scale } from 'react-native-size-matters';

import Home from '../../screens/protected/Home';
import Filter from '../../screens/protected/Filter';
import Chat from '../../screens/protected/Chat';
import Profile from '../../screens/protected/Profile';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,

    tabBarStyle: styles.tabBar,

    tabBarItemStyle: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    tabBarIconStyle: {
      marginTop: 20,
    },

    tabBarIcon: ({ focused }) => {
      let iconName: any;

      if (route.name === 'Home') iconName = 'home';
      else if (route.name === 'Filter') iconName = 'sliders';
      else if (route.name === 'Chat') iconName = 'mail';
      else if (route.name === 'Profile') iconName = 'user';

      return focused ? (
        <View style={styles.activeCircle}>
          <Icon name={iconName} size={22} color="#1E2A47"/>
        </View>
      ) : (
        <Icon name={iconName} size={22} color="#FFF"  />
      );
    },
  })}
>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Filter" component={Filter} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


  const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#1E2A47',
    height: verticalScale(65),
    borderRadius: 40,
    marginHorizontal: scale(20),
    marginBottom: verticalScale(15),
    borderTopWidth: 0,
    elevation: 0,
    paddingBottom: 0,
    
  },

  activeCircle: {
    width: scale(45),
    height: scale(45),
    borderRadius: 50,
    backgroundColor: '#FFD600',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
});

