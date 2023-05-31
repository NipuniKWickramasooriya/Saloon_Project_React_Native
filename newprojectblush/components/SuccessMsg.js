import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground,Image ,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/Logo.png');

export default function App() {
   const navigation=useNavigation();
   
  return (
    <ImageBackground style={styles.bgImage} source={require('../assets/Bg6.png')}>
    <View>
    <Image style={styles.image} source={image}></Image>

    <Text  style={styles.number}>Your Booking Number is 00</Text>
    
    <Text style={styles.txt}> Your Booking is Successful!</Text>
    
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}  onPress={() => navigation.navigate('Landing page')}>OK</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage:{
      flex: 1,
      resizeMode: 'cover',
      alignItems: 'center',
   },
   image:{
     width:100,
     height:100,
     alignSelf:'center',
     marginTop:280,
   },
   txt:{
     fontSize:25,
     marginTop:50,
     color:'#DB387E',
   },
    button: {
    backgroundColor: '#DB387E',
    padding: 10,
    borderRadius: 5,
    margin:10,
    width:80,
    alignSelf:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  number:{
    alignSelf:'center',
    paddingTop:30,
    color:'#DB387E',
    fontSize:17,
  },
});
