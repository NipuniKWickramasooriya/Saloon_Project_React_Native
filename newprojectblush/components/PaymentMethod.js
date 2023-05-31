import * as React from 'react';
import { Text, View, StyleSheet,ImageBackground,Image,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/Logo.png');

export default function App() {
  const navigation=useNavigation();
  return (
    <ImageBackground  style={styles.background} source={require('../assets/Bg5.png')}>

    <View style={styles.container}>
        <Image source = {image} style={styles.logo}/>

        <Text style={styles.topic}>Your Details</Text>

        <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="Enter the name" 
          onChangeText={(text)=>setPassword(text)} />

           <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="Enter the Booking Date" 
          onChangeText={(text)=>setPassword(text)} />

    <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="Enter the Booking Time" 
          onChangeText={(text)=>setPassword(text)} />

          
        <Text style={styles.topic}>Payment Method</Text>

        <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="Card Holder Name" 
          onChangeText={(text)=>setPassword(text)} />

           <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="card Number" 
          onChangeText={(text)=>setPassword(text)} />

    <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="Expires" 
          onChangeText={(text)=>setPassword(text)} />

           <TextInput style={styles.textInput} 
          secureTextEntry={true}
          placeholder="CVV" 
          onChangeText={(text)=>setPassword(text)} />

          <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}  onPress={() => navigation.navigate('SuccessMsg')}>Submit</Text>
      </TouchableOpacity>

    </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
 container:{
   flex:1,
 },
  background:{
 flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
  },
logo:{
  width:100,
  height:100,
  marginTop:50,
  alignSelf:'center',
},
 topic:{
      alignSelf:'center',  
      marginTop:50,  
      fontSize:20,
      color:'#DB387E',
      fontWeight:'bold',
    },
      textInput:{
      borderWidth:2,
      padding:15,
      borderRadius:10,
      marginTop:20,
      width:300,
      height:30,
      color:'#DC9FB9',
      borderColor:'#DB387E',
      alignSelf:'center', 
    },
     button: {
    backgroundColor: '#DB387E',
    padding: 10,
    borderRadius: 5,
    marginTop:20,
    width:80,
    marginLeft:260,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'center',
  },
});
