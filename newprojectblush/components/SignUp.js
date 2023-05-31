import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Alert,ImageBackground,Image} from 'react-native';
import constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/Logo.png');

export default function SaloonBlush()
{
  const navigation=useNavigation();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkField = () => {
    if (username == ""){
     alert("Please enter the username")
      return false
    }
    else if(password == "")
    {
      alert("Please enter the password")
      return false
    }
    return true
  }

const successLogin =() =>{
  if (checkField ())
  {
    alert("Successfull Login")
  }
}

  return(
     <ImageBackground 
     source={require('../assets/Bg2.png')} 
     style={styles.backgroundImage}>
    
    <View style={styles.container}>

       <Image source={image} style={styles.image} />

      <TextInput 
        style={styles.textInput} 
        placeholder="Username"
        onChangeText={(text)=>setUserName(text)}  />

      <TextInput style={styles.textInput} 
      secureTextEntry={true}
      placeholder="New Password" 
      onChangeText={(text)=>setPassword(text)} />

      <TextInput style={styles.textInput} 
      secureTextEntry={true}
      placeholder="Confirm Password" 
      onChangeText= {(text)=>setPassword(text)} />

      <TouchableOpacity style={styles.touch}
       onPress={() => navigation.navigate('Login')}>
       <Text style={styles.btnLogin}>Sign Up</Text>
      </TouchableOpacity>

    </View>

     </ImageBackground>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      paddingTop:20,
      alignItems:'center'
    },
    textInput:{
      borderWidth:2,
      padding:15,
      borderRadius:10,
      marginTop:20,
      backgroundColor:'white',
      width:300,
      height:30,
      color:'#DC9FB9',
      //paddingLeft:120,
      borderColor:'white',
    },
    btnLogin:{
      color:'#DB387E',
      fontWeight:'bold',
      fontSize:'15',
      textAlign:'center',
    },
    touch:{
      borderRadius:10,
      padding:6,
      backgroundColor:'white',
      marginTop:30,
      width:100,
      height:30,
    },
    backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
   },
  image:{
    marginTop:300,
    width:100,
    height:100,
  },
});

