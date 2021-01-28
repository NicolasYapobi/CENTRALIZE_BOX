import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function HomeScreen() {
  return (
    <SafeAreaProvider>
    <Header 
      centerComponent={{ text: 'BOX HOME', style: { color: '#7f6619'}}}
      containerStyle={{
        backgroundColor: '#ffcc32'
      }}
    />
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#333740'}}>
      <Image source={require('./assets/box-outline.png')}/>
      <Text style={{color: 'white'}}>
        sALUT
      </Text>
    </View>
    </SafeAreaProvider>
  );
}

export default HomeScreen;