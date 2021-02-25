import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PermissionsAndroid, Button } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
// import Geolocation from 'react-native-geolocation-service';

global.granted = false;

const requestLocalisation = async() => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Centralize Box Permission",
        message:
          "Centralize Box needs access to your localisation so you can track your box",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
      }
    );
  } catch (err) {
    console.warn(err);
  }
}

function MapScreen() {
  return (
    <View>
      <MapView style={styles.map}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
      <View>
        <Button title="TRACK BOX"
          onPress={requestLocalisation}>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 60,
  },
});

export default MapScreen;