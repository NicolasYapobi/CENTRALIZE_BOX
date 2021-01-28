import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333740' }}>
      <Text>Home!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333740'}}>
      <Text>Google maps!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333740' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: '#ffcc32' }}
      >
        <Tab.Screen name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )
          }} />
        <Tab.Screen name="Map" 
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            )
        }} />
        <Tab.Screen name="Alarm" component={SettingsScreen}
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Alarm',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="alarm" color={color} size={26}/>
            )
          }} />
        <Tab.Screen name="Settings" component={SettingsScreen}
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => (
              <MaterialIcons name="settings" color={color} size={26}/>
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;