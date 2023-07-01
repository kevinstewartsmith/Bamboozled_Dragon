import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearProgress } from '@rneui/themed';

const LinearProgressOrange = (props) => {
  
    
      return (
        <LinearProgress
        value={0.1}
        variant="determinate"
        style={{ width: "100%", height: 10  }}
        color="#E97202"
        trackColor="#C2C3C8"
      />
      );
    
  
}
  
export default LinearProgressOrange




