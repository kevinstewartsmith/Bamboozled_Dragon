import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { LinearProgress } from '@rneui/themed';
import { TimerContext } from './TimerContext';

const LinearProgressOrange = (props) => {
  const { timer, startTimer } = useContext(TimerContext);

  const progress = (10 * 60 - timer) / (10 * 60);
    
      return (
        <LinearProgress
        value={progress}
        variant="determinate"
        style={{ width: "100%", height: 10  }}
        color="#E97202"
        trackColor="#C2C3C8"
      />
      );
    
  
}
  
export default LinearProgressOrange



