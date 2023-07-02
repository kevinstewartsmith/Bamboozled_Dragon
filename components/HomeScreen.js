import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, View, Image, Text, AppRegistry  } from 'react-native';
import SelectOpponentScreen from './SelectOpponentScreen'; 
import { useNavigation } from '@react-navigation/native';
//import { color } from 'react-native-reanimated';


AppRegistry.registerComponent('BamboozledDragon', () => App);

const HomeScreen = ({ navigation }) => {
    //const navigation = useNavigation();

    const goToNextScreen = () => {
      navigation.navigate('SelectOpponentScreen');
    };

    console.log("App running");
    const startGamePressed = () => {
        console.log("Start Game Pressed");
        props.setHomeScreenOn(false);
        props.setSelectOpponentScreenOn(true);
      
    }
    
    
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <View style={styles.stackContainer}>
            <View style={styles.row}>
              <View style={styles.item}>
                <Image source={require('../assets/logo.jpeg')} style={{ width: 210, height: 140 }} />
              </View>
    
            </View>
            <View style={styles.row}>
              <View style={styles.buttonContainer}>
                {/* <View style={styles.buttonBox} > */}
                <TouchableOpacity style={styles.buttonBox} onPress={goToNextScreen}>
                  
                  {/* <Button
                    title="Start Game"
                    color="white"
                    //style={{ color:"white", fontSize:32, fontWeight:"bold" }}
                    onPress={goToNextScreen}
                  /> */}
                  <Text style={{ color:"white", fontSize:22, fontWeight:"bold" }}>Start Game</Text>
                </TouchableOpacity>
              </View> 
            </View>
          </View>
    
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
      },
      stackContainer: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:"orange",
        marginBottom: 300,
        width: "70%",
        marginTop: 200,
        
        
      },
      row: {
        flexDirection: 'row',
      },
      item: {
        flex: 1,
        //backgroundColor: 'red',
        marginTop: 10,
        //justifyContent: 'center',
        alignItems: 'center',
        height: 210,
      },
      blankSpace: {
        flex: 1,
        //backgroundColor: 'purple',
        // margin: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 310,
        width: "100%",
      },
      buttonContainer: {
        flex: 1,
        backgroundColor: 'white',
        // marginLeft: 40,
        // marginRight: 40,
        width: "100%",
        height: "100%",
        marginTop: 0,
        //justifyContent: 'center',
        alignItems: 'center',
        
      },
      buttonBox: {
        //flex: 1,
        backgroundColor: '#9A2AA5',
        height: 45,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    
      },
      button: {
        // flex: 1,
        //backgroundColor: 'yellow',
        // marginLeft: 40,
        // marginRight: 40,
        // height: 45,
        // width: 53,
        // marginTop: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
        //width: "70%",
      },
    });
    



export default HomeScreen