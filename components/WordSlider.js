import React from 'react'
//import { Slider, Icon } from "react-native-elements";
import { Slider, } from '@rneui/themed';


const WordSlider = () => {

    
 
      return (
        <Slider
          animateTransitions
          animationType="timing"
          maximumTrackTintColor="#ccc"
          maximumValue={100}
          minimumTrackTintColor="#ccc"
          minimumValue={0}
          onSlidingComplete={() =>
            console.log("onSlidingComplete()")
          }
          onSlidingStart={() =>
            console.log("onSlidingStart()")
          }
          onValueChange={value =>
            console.log("onValueChange()", value)
          }
          orientation="horizontal"
          step={5}
          style={{ width: "80%", height: 80 }}
          thumbStyle={{
            height: 50,
            width: 50,
            borderColor: "#B2CAC4",
            backgroundColor: "white",
            borderWidth: "2px",
            borderRadius: "40px"
          }}
          thumbTintColor="#0c0"
          thumbTouchSize={{ width: 40, height: 40 }}
          trackStyle={{ height: 10, borderRadius: 20 }}
          value={50}
        />
      );
    }

export default WordSlider