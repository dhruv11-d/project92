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
        10 NGOs helping women to fight for their rights in India:- Guria India, ActionAid India, Majlis Manch, Sayodhya Home For Women In Need, Shikshan Ane Samaj Kalyan Kendra, International Foundation for Crime Prevention and Victim Care (PCVC), Committee for Legal Aid to Poor, Prerana,
        </Text>
        <Text style ={styles.phoneNoText}>
          Helpline No.
        </Text>
        <Text style ={styles.phoneNo}>
          1091
        </Text>
         <Text style ={styles.phoneNo}>
          181
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
    fontSize: 18.5
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