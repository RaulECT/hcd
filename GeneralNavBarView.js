import React, { Component } from 'react';
import backIcon from './resources/left-arrow.png'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

class GeneralNavBar extends Component {
  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            source={backIcon}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    width: '100%',
    height: 81,
    backgroundColor: '#4D91D9',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 27
  },
  backIcon: {
    width: 19.5,
    height: 16.2
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginLeft: 10
  }
} )

export default GeneralNavBar


