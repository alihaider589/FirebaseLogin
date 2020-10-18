
import React, { Component } from 'react'
import { Text, View,TouchableOpacity ,StyleSheet} from 'react-native'

const Button = ({onPress,children})=>{

    return(
     <TouchableOpacity
     onPress={onPress}
     style={styles.buttonStyle}>
         <Text style={styles.textStyle}>{children}</Text>
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:5,
        borderWidth:1,
        borderColor:'blue',
        marginRight:5,
        marginLeft:5,
        height:30,

    },
    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:20,
        fontWeight:"600",
    
    }
})

export default Button