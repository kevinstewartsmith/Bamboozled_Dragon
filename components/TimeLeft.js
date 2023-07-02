import React, { useContext } from 'react';
import { TimerContext } from './TimerContext';
import { StyleSheet, Text, View } from 'react-native'

const TimerComponent = (props) => {
  const { timer, startTimer } = useContext(TimerContext);

  const formattedTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
        <View style={props.rowStyle}>
            <View style={props.itemStyle2}>
                <Text style={{ fontSize: 12, fontWeight:"bold", color:props.color }}>TIME LEFT</Text>
            </View>
        </View>
        <View style={props.rowStyle}>
            <View style={props.itemStyle3}>
                <Text style={{ fontSize: 48, fontWeight:"bold", color:props.color }}>{formattedTime()}</Text>
            </View>
        </View>
    </>
  );
};

export default TimerComponent;
