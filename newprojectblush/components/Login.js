import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Alert,ImageBackground,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/Logo.png');

export default function Login()
{
  const navigation=useNavigation();
  
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
    }
     else {
      
      console.log('Logging in...');
      navigation.navigate('Dashboard');
    }
  };

  return(
     <ImageBackground source={require('../assets/Bg2.png')} style={styles.backgroundImage}>
    
    <View style={styles.container}>

      <Image source={image} style={styles.image} />

      <TextInput style={styles.textInput} placeholder="Username" onChangeText={(text)=>setUserName(text)}  />

      <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Password" onChangeText={(text)=>setPassword(text)} />

      <Text style={styles.forgotPwMsg}>Forgot Password?</Text>

      <TouchableOpacity style={styles.touch} onPress={handleLogin}>
       <Text style={styles.btnLogin}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orMsg}>or</Text>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
      <Text style={styles.signupMsg}>Sign Up</Text>
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
      paddingLeft:120,
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
  forgotPwMsg:{
    marginTop:10,
    color:'white',
  },
  orMsg:{
    marginTop:10,
    color:'white',
  },
  signupMsg:{
    marginTop:10,
    color:'white',
  },
});

