import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'

const CardSection = (props) =>{
    return (
        <View style={styles.container}>
{props.children}
        </View>
    )
}

const styles = StyleSheet.create({
container:{
borderWidth:1,
padding:5,
backgroundColor:'#fff',
justifyContent: 'flex-start',
flexDirection:"row",
borderColor:"#ddd",
position:'relative',

    },

})
export default CardSection;