import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, View, Image,  } from 'react-native';
import SelectOpponentScreen from './components/SelectOpponentScreen'; 
import HomeScreen from './components/HomeScreen';
//import SelectOpponentScreen from './components/SelectOpponentScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState } from 'react';

export default function App({navigation}) {
  const Stack = createNativeStackNavigator();
  const [homeScreenOn, setHomeScreenOn] = useState(true);
  const [selectOpponentScreenOn, setSelectOpponentScreenOn] = useState(false);

  

  return (
    <>
    {/* {homeScreenOn && <HomeScreen setHomeScreenOn={setHomeScreenOn} setSelectOpponentScreenOn={setSelectOpponentScreenOn} />}
    {selectOpponentScreenOn && <SelectOpponentScreen />} */}

    <SelectOpponentScreen />

    </>

     
  );
}

