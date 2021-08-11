import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AnimalNGO from './screens/AnimalNGO';
import WomenNGO from './screens/WomenNGO';
import BirdNGO from './screens/BirdNGO';
import ChildNGO from './screens/ChildNGO';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  AnimalNGO: AnimalNGO,
  WomenNGO: WomenNGO,
  ChildNGO: ChildNGO,
  BirdNGO: BirdNGO,
});

const AppContainer = createAppContainer(AppNavigator);