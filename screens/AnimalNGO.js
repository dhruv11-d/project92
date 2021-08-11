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
         Animal care NGOs for street dogs and other stray animals. Animal welfare organizations are concerned with the health, safety and psychological wellness of individual animals.
        </Text>
        <Text style ={styles.phoneNoText}>
          Phone No.
        </Text>
        <Text style ={styles.phoneNo}>
          9871963535
        </Text>
         <Text style ={styles.phoneNo}>
          9832053036
        </Text>
         <Text style ={styles.phoneNo}>
          9213961501
        </Text>
         <Text style ={styles.phoneNo}>
          9953440509
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
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
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
    fontSize: 30
  },
  phoneNo: {
    margin: 20,
    textDecorationLine: "underline",
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 33,
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