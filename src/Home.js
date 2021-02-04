import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SwitchSelector from "react-native-switch-selector";

var lock = require('./assets/lock.png')
var unlock = require('./assets/close.jpg')

const options = [
  { label: "open", value: "open"},
  { label: "close", value: "close"},
];

function HomeScreen() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  return (
    <SafeAreaProvider>
      <Header 
        centerComponent={{ text: 'BOX HOME', style: { color: 'white'}}}
        containerStyle={{
          backgroundColor: '#8557ff'
        }}
      />
      <View>
        <View style={styles.container}>
          <View style={styles.container_box}>
            <Text style={styles.text_title}>
              System
            </Text>
            <Text/>
              MyBox
            <Image source={require("./assets/box-outline.png")}></Image>
            <SwitchSelector
              options={options}
              inital={0}
              buttonColor={'#8557ff'}
              borderColor={'#8557ff'}
              onPress={value => console.log("Box is ${value}")}/>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.container_box}>
            <Text style={styles.text_title}>
              History
            </Text>
            <Text>
              Last date: {currentDate}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
  },
  container_box: {
    margin: 20
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderWidth: 2,
    borderRadius: 6,
  },
  text_title: {
    fontSize: 30,
  }
})

export default HomeScreen;