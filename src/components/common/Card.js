import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


const Card = (props)=>{
  return(
<View style={styles.container}>
{props.children}
 </View>
)
}

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    borderRadius:2,
    borderColor:'#ddd',
    borderWidth:0,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.1,
    shadowRadius:2,
    elevation:1,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    width:'100%'
  }
})

export default Card;