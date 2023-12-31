import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React, {useContext} from 'react'
import LinearProgressOrange from './LinearProgressOrange'
import { SafeAreaView } from 'react-native'
import WordListItem from './WordListItem'
import { Icon } from '@rneui/themed';
import { Swipeable } from 'react-native-gesture-handler'
import GestureRecognizer from 'react-native-swipe-gestures';
import TimerComponent from './TimeLeft'
//import TimerComponent from './TimeLeft'
import { TimerContext } from './TimerContext';

const words = [ "Byzantine", "Amphibian", "Untoward", "Glacial", "Fanciful"]

const WordListItemBlock = (word) => {
  


    return (  
      
        <View style={styles.row}>
            <View style={styles.item6}>
                <WordListItem word={word} />
            </View>
        </View>
  
    )
}

const YourWordsScreen = ({ navigation }) => {
  const { percentComplete } = useContext(TimerContext);
  
  const handleSwipeUp = () => {
    console.log("swiped up")
    navigation.navigate('OpponentWordScreen');
    

}

  return (
    <GestureRecognizer onSwipeUp={handleSwipeUp}>
    <SafeAreaView style={{}}>
        <StatusBar style="auto" />
        <LinearProgressOrange value={percentComplete} />
        <View style={styles.container2} >
            <View style={styles.row}>
                <View style={styles.item}>
                    <Image source={require('../assets/sword.jpeg')} style={{width: 60, height: 100, }} resizeMode='contain' />
                </View>

            </View>
            {/* <View style={styles.row}>
                <View style={styles.item2}>
                    <Text style={{ fontSize: 12, fontWeight:"bold" }}>TIME LEFT</Text>
                </View>

            </View>
            <View style={styles.row}>
                <View style={styles.item3}>
                    <Text style={{ fontSize: 48, fontWeight:"bold" }}>9:56</Text>
                </View>
            </View> */}
            <TimerComponent rowStyle={styles.row} itemStyle2={styles.item2} itemStyle3={styles.item3} color="black" />
            <View style={styles.row}>
                <View style={styles.item4}>
                    <Text style={{ fontSize: 30, fontWeight:"bold" }}>Your Words</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item5}>
                    <Text style={{ fontSize: 18, fontWeight:"bold" }}>Check them off as you say them.</Text>
                </View>
            </View>
            <>
            
            { words.map((word, idx) => WordListItemBlock(word)) }
            
            
            </>
            <View style={styles.row}>
                <View style={styles.item7}>
                    <Text style={{ fontSize: 13, fontWeight:"bold" }}>Type for definition. Swipe for new word.</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.item8}>
                  <Icon 
                    name="arrow-upward" 
                    type="material" 
                    //backgroundColor="#C2C2C2" 
                    height="80%"
                    color="#C4C4C4" 
                    size={40}


                    alignItems="center"

                />
                <Text 
                  style={{
                    fontSize: 10,
                    textAlign:"center",
                    color:"#C4C4C4"

                }}>
                  SWIPE UP
                </Text>
                <Text 
                  style={{ 
                    fontSize: 18, 
                    fontWeight:"bold", 
                    textAlign:"center", 
                    marginTop:20, 
                    color:"#96299E"
                }}>
                  Guess [Opponent]'s Words
                </Text>
              </View>
            </View>
        </View>
        

    </SafeAreaView>
    </GestureRecognizer>

  )
}

export default YourWordsScreen

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"blue",
      height: "100%",
      width: "100%",
    },
    container2: {
        backgroundColor: "white", 
        height:"100%",
        width: "100%",
        alignItems: 'center',
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
      //flex: 1,
      //backgroundColor: 'red',
    //   marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: "100%",
      
      
    },
    item2: {
        flex: 1,
        //backgroundColor: 'red',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        backgroundColor:"transparent",
        // marginLeft: 50,
        // marginRight: 50,
      },
      item4: {
        flex: 1,
        //backgroundColor: 'red',
        marginTop: 20,
        //justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor:"transparent",

      },
      item5: {
        //flex: 1,
        backgroundColor: "transparent",
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        backgroundColor:"transparent",
 

      },
      item6: {
        width: "90%",
        height: 50,
        backgroundColor:"orange",
        marginTop: 0,
        marginBottom: 10,
      },
      item8: {
        width: "90%",
        height: 60,
        backgroundColor:"transparent",
        marginTop: 20,
        marginBottom: 0,
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