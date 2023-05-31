import React,{useState} from 'react';
import {View,StyleSheet,ImageBackground,Text,Image,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/Logo.png');

export default function App()
{
  const navigation = useNavigation();
  
  return(
     <ImageBackground 
     source={require('../assets/Bg3.png')} 
     style={styles.backgroundImage}
     >
    

    <View style={styles.container}>
      
    <Text style={styles.topic}>Hair</Text>
    
    
     <View style={styles.buttonContainer}>
      <TouchableOpacity 
      style={styles.button}  onPress={() => navigation.navigate('Hair')}>
        <Text style={styles.buttonText}>Cuts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Coloring</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Care</Text>
      </TouchableOpacity>
    </View>

    <Image source={image} style={styles.hairCuts}/>

     <View style={styles.buttonContainerList}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Layered Cut</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Bob Cut</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Feather Cuts</Text>
      </TouchableOpacity>
    </View>

    </View>

     </ImageBackground>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      paddingTop:20,
    },
    backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
   },
   topic:{
     fontSize:40,
     marginTop:60,
     marginLeft:150,
     color:'white',
     fontWeight:'bold',
   },
   hairCuts:{
     marginTop:60,
     width:200,
     height:200,
     alignSelf: 'center', //align center an image
   },
 
    //buttons get as horizontal line
    buttonContainer: {
     marginTop:80, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#DB387E',
    padding: 10,
    borderRadius: 5,
    margin:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

 
});

