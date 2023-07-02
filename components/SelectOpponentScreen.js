import React, {useContext} from 'react'
import { View, StatusBar, StyleSheet, Text, Button,TouchableOpacity } from 'react-native'
//import { Button, } from '@rneui/themed';
import WordSlider from './WordSlider';
import { TimerContext } from './TimerContext';

const SelectOpponentScreen = ({ navigation }) => {
    const { timer, startTimer } = useContext(TimerContext);
    const startGamePressed = () => {
        startTimer()
        navigation.navigate('YourWordsScreen');

    }
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.stackContainer}>
        <View style={styles.row}>
            <View style={styles.item}>
                <Text style={{fontSize: 35}}>Difficulty</Text>
                <Text style={{fontSize: 18}}>Adjust the level of the words you receive.</Text>
                
                <WordSlider />
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.item2}>
                <Text style={{fontSize: 25, color:"#559783", fontWeight:"bold"}}>Easy</Text>
                <Text style={{fontSize: 13, color:"#559783", textAlign: "center"}}>Fewer points per word, but easier to use in conversation.</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.item3}>
                <Text style={{fontSize: 32, fontWeight:"bold"}}>Select Opponent</Text>
            </View>
        </View>
        <View style={styles.row}>
            <View style={styles.item4}>
                <Button title='Import Contacts' style={{fontSize: 32, fontWeight:"bold"}}>Import Contacts</Button>
                <View style={{
                    backgroundColor:"#E5E5E5", 
                    width:"100%", 
                    height: 45,
                    marginTop: 10,
                }}>

                </View>
            </View>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.item5} onPress={startGamePressed}>
            
                {/* <Button title="I'm Ready" color="white" style={{fontSize: 32, fontWeight:"bold"}}> I'm Ready</Button> */}
                <Text style={{color:"white", fontSize: 22, fontWeight:"bold"}}>Start Game</Text>

            </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"transparent",
    },
    stackContainer: {
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor:"orange",
      marginBottom: 90,
      width: "85%",
      marginTop: 130,
      backgroundColor:"transparent",
      
      
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
      height: 140,
      
    },
    item2: {
        flex: 1,
        //backgroundColor: 'red',
        marginTop: 0,
        //justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        backgroundColor:"transparent",
        marginLeft: 50,
        marginRight: 50,
      },
      item4: {
        flex: 1,
        //backgroundColor: 'red',
        marginTop: 5,
        //justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        backgroundColor:"transparent",

      },
      item5: {
        flex: 1,
        backgroundColor: "transparent",
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor:"#559783",
 

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
      //backgroundColor: 'teal',
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
  


export default SelectOpponentScreen