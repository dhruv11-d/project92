import * as React from 'react';
import { View, Text, TouchableOpacity ,StyleSheet, ImageBackground } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  render(){
    return(
      <View>
       <ImageBackground style={styles.Image} source={require('../assets/bg.jpg')}>
        <AppHeader/>
        <Text style ={styles.Text}>
        Non-Governmental Organization that works towards ensuring happier childhoods for all children is known as Child NGO.
        </Text>
        <Text style ={styles.phoneNoText}>
          Helpline No.
        </Text>
        <Text style ={styles.phoneNo}>
          1098
        </Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  Text: {
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
   Image: {
    width: 333,
    height: 668
  },
  phoneNoText: {
    margin: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40
  },
  phoneNo: {
    margin: 20,
    textDecorationLine: "underline",
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    textDecorationColor: 'red'
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 20,
    marginTop: 20,
    width: 250,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
});