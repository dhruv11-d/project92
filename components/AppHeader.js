import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>NGO's For Help</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#1B83FA'
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;