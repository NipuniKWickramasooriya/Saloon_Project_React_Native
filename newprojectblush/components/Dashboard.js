import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const image = require('../assets/Logo.png');

export default function SaloonBlush() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Our Service</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Hair')}>
        <Text style={styles.buttonText}>Hair</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Facial')}>
        <Text style={styles.buttonText}>Face</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Hydrotherapy')}>
        <Text style={styles.buttonText}>Full Body</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#DB387E',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#DB387E',
    marginBottom: 20,
  },
});
