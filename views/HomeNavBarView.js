import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class HomeNavBar extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity>
          <View>

          </View>
        </TouchableOpacity>

        <Text style={styles.title}>App Title</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    width: '100%',
    height: 81,
    backgroundColor: '#FFA608',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20
  }
} )

export default HomeNavBar