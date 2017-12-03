import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HomeNavBarView extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Events</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    width: '100%',
    height: 81,
    backgroundColor: '#4D91D9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 27
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFFFFF'
  }
} )

export default HomeNavBarView