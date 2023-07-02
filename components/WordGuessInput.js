import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Icon } from '@rneui/themed';

const WordGuessInput = (props) => {
  return (
    <>
        <ListItem
            containerStyle={{ alignItems: 'center', backgroundColor:"#E5E5E5", height:50 }}
            title={props.word}
            titleStyle={{ textAlign: 'center' }}
            
        > 

            <ListItem.Content style={{ alignItems:"center", marginLeft:0 }}>
                <ListItem.Input style={{width:"70%"}}  textAlign='center'>
                    {/* <Text style={{ textAlign: 'center', fontWeight:"700", fontSize:20 }}>{props.word}</Text> */}
                </ListItem.Input>
            </ListItem.Content>

        </ListItem>
    </>
  )
}

export default WordGuessInput

const styles = StyleSheet.create({})