import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListItem, Icon } from '@rneui/themed';

const WordListItem = (props) => {
  return (
    <>
        <ListItem
            containerStyle={{ alignItems: 'center', backgroundColor:"#E5E5E5", height:50 }}
            title={props.word}
            titleStyle={{ textAlign: 'center' }}
            
        > 
            <Icon 
                name="done" 
                type="material" 
                backgroundColor="#C2C2C2" 
                borderWidth="3px" 
                borderColor="white" 
                borderRadius="20px" 
                color="white" 
                height="140%"
                width="100%"
                marginLeft="0%"
                alignItems="center"

            />
            <ListItem.Content style={{ alignItems:"center", marginLeft:0 }}>
                <ListItem.Title style={{width:"70%"}}>
                    <Text style={{ textAlign: 'center', fontWeight:"700", fontSize:20 }}>{props.word}</Text>
                </ListItem.Title>
            </ListItem.Content>
            <Icon
                name="change-history"
                type="material"
                style={{ transform: [{ rotate: '-90deg' },{ scale: 1.0 },{ translateY: 0 }] }}
                // width="180%"
                // height="180%"
                color="#999999"
                
                
            />
        </ListItem>
    </>
  )
}

export default WordListItem

const styles = StyleSheet.create({})