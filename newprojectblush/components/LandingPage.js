import React from 'react';
import {Text,View,ImageBackground,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const img = require('../assets/Logo.png');

export default function Landing() { 

const navigation=useNavigation();

   return (

     <ImageBackground source={require('../assets/Bg1.png')} style={styles.backgroundImage}>
     
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
    <Image source={img} style={styles.logo}></Image>
    </TouchableOpacity>

    <Text style={styles.logoText}>Saloon Blush</Text>
   
    </ImageBackground>
  );
  
}

const styles = StyleSheet.create({
backgroundImage:{
  flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
},
btn:{

},
logoText:{
  fontWeight:'bold',
  fontSize:30,
  color:'#DB387E',
  alignSelf:'center',
},

logo:{
  marginTop:280,
  width:200,
  height:200,
},
});