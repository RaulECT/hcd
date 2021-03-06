/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HomeScreenview from './views/HomeScreenView'
import FormView from './views/FormView'
import SignInView from './views/SignInView'
import LogInView from './views/LogInView'
import AddEventView from './views/AddEventView'
import HomeNavBarView from './views/HomeNavBarView'
import EventsListView from './views/EventsListView'
import EventDetailView from './views/EventDetailView'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      /*<View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>*/
      //<HomeScreenview/>
      //<FormView/>
      //<SignInView/>
      //<LogInView/>
      //<HomeNavBarView/>
      //<EventsListView/>
      //<AddEventView/>
      <EventDetailView/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
