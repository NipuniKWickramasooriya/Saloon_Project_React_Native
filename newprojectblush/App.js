import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Hair from './components/Hair'
import HairColoring from './components/HairColoring'
import HairCare from './components/HairCare'
import Facial from './components/Facial'
import Exfoliation from './components/Exfoliation'
import Hydrotherapy from './components/Hydrotherapy'
import PaymentMethod from './components/PaymentMethod'
import SuccessMsg from './components/SuccessMsg'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing page" component={LandingPage} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="Hair" component={Hair} />
         <Stack.Screen name="Hair Coloring" component={HairColoring} />
         <Stack.Screen name="Hair Care" component={HairCare} />
         <Stack.Screen name="Facial" component={Facial} />
         <Stack.Screen name="Exfoliation" component={Exfoliation} />
         <Stack.Screen name="Hydrotherapy" component={Hydrotherapy} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
          <Stack.Screen name="SuccessMsg" component={SuccessMsg} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});
