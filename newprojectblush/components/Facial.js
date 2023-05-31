import React,{useState} from 'react';
import {View,StyleSheet,ImageBackground,Text,Image,TouchableOpacity,CheckBox} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/facial-mask.png');

export default function App()
{
const [isSelected, setSelection] = useState(false);
const navigation=useNavigation();

  return(
     <ImageBackground source={require('../assets/Bg3.png')} style={styles.backgroundImage}>
    
    <View style={styles.container}>
      
    <Text style={styles.topic}>Facial</Text>
    
     <View style={styles.buttonContainer}>

      <TouchableOpacity onPress={() => navigation.navigate('Facial')} style={styles.button}>
      
      <Text style={styles.buttonText}>Facial</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Exfoliation')}>
        <Text style={styles.buttonText}>Exfoliation</Text>
      </TouchableOpacity>

    </View>

    <Image source={image} style={styles.hairCuts}/>

     <View style={styles.buttonContainerList}>

        <View style={styles.buttonContainerList}>
      <TouchableOpacity style={styles.button}>
       <View style={styles.checkboxContainer}>
        <Text style={styles.buttonText}>Hydrafacial</Text>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        </View>
      </TouchableOpacity>
    </View>

     <View style={styles.buttonContainerList}>
      <TouchableOpacity style={styles.button}>
       <View style={styles.checkboxContainer}>
        <Text style={styles.buttonText}>Chemical Peel</Text>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        </View>
      </TouchableOpacity>
    </View>
      
       <View style={styles.buttonContainerList}>
      <TouchableOpacity style={styles.button}>
       <View style={styles.checkboxContainer}>
        <Text style={styles.buttonText}>Diamond Glow</Text>
        <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
        </View>
      </TouchableOpacity>
    </View>

    </View>

 <TouchableOpacity style={styles.buttonOK} onPress={() => navigation.navigate('PaymentMethod')}>
        <Text style={styles.buttonTextOK}>OK</Text>
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
    },
    backgroundImage:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
   },
   topic:{
     fontSize:20,
     marginTop:30,
     marginLeft:150,
     color:'white',
     fontWeight:'bold',
   },
   hairCuts:{
     marginTop:50,
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
 checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:0,
  },
  checkbox: {
    
  },
  buttonOK:{
     backgroundColor: '#DB387E',
    padding: 10,
    borderRadius: 5,
    marginTop:20,
    width:80,
    marginLeft:260,
  },
  buttonTextOK:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:'center',
  },
});

