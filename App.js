import React,{Component} from 'react';
import { StyleSheet, Text, View ,main, StatusBar,TouchableOpacity} from 'react-native';
import firebase from 'firebase'
import Header from './src/components/common/Header'
import Login from './src/components/formelements/LoginForm'
import Button from './src/components/common/Button'
import Spinner from './src/components/common/Spinner';


export default class App extends Component {  
   state={
     LoggedIn:null
   }
componentWillMount(){
  if (!firebase.apps.length) {
    firebase.initializeApp({

      apiKey: "AIzaSyCIa8rVLFB9wZysnwp40n37uSpiRdTWeTA",
      authDomain: "fir-test-c5685.firebaseapp.com",
      databaseURL: "https://fir-test-c5685.firebaseio.com",
      projectId: "fir-test-c5685",
      storageBucket: "fir-test-c5685.appspot.com",
      messagingSenderId: "634738695167",
      appId: "1:634738695167:web:e8a27405197935a5"
    
    });
}
firebase.auth().onAuthStateChanged((user)=>{
if(user){
  this.setState({LoggedIn:true})
}else{
  this.setState({LoggedIn:false})
}
})

}

renderData(){
  if(this.state.LoggedIn){
    return (
    
    <Button>
      Log Out
    </Button>)
  }else{
    return <Login />
  }
}

renderContent(){
  switch(this.state.LoggedIn){
    case true:
    return <TouchableOpacity onPress={()=>firebase.auth().signOut()}>
      <Text>

      Log Out
      </Text>
      
      </TouchableOpacity>
    case false:
      return <Login />;
      default:
        return <Spinner size="large"/>
      } 
}
  
  render(){
  return (
    <View style={{marginTop:StatusBar.currentHeight}} >
      <Header headerText={"Firebase Authentication App"}/>
      {this.renderContent()}
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:"center"
  },
});
