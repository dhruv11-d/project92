import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';
import AnimalNGO from '../screens/AnimalNGO.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
      <ImageBackground style={styles.Image} source={require('../assets/bg.jpg')}>
        <AppHeader />
         <Image
          style={{ width: 190, height: 152, alignSelf:'center' }}
          source={require('../assets/logo.png')}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('AnimalNGO');
          }}>
          <Text style={styles.buttonText}>Animal NGO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
           this.props.navigation.navigate('BirdNGO');
          }}>
          <Text style={styles.buttonText}>Bird NGO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
            this.props.navigation.navigate('WomenNGO');
          }}>
          <Text style={styles.buttonText}>Women NGO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'magenta' }]}
          onPress={() => {
            this.props.navigation.navigate('ChildNGO');
          }}>
          <Text style={styles.buttonText}>Child NGO</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   Image: {
    width: 333,
    height: 668
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 20,
    marginTop: 50,
    width: 250,
    height: 60,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
});