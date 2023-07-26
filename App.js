import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import the createBottomTabNavigator from the installed package
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Import --Ionicons-- from --expo--
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
//Instantiate the createBottonTabNavigator; This will return an object with two properties; the navigator and the screen
const Tab = createBottomTabNavigator();

//Replace Stack Navigator for Tab Navigator
export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          
          <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
     
              if (route.name === 'Welcome') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Login') {
                iconName =  'ios-list';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
    
          <Tab.Screen name="Welcome" component={WelcomeScreen} /> 
          <Tab.Screen name="Login" component={LoginScreen} />
          
          </Tab.Navigator>

        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

