import React, { Component } from 'react';
import HomeNavBar from './HomeNavBarView'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class EventItemListView extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.eventNameText}> { this.props.eventName } </Text>
        <Text style={styles.eventDateText}> { this.props.eventDate } </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    width: 326,
    height: 59,
    backgroundColor: 'rgba( 255, 166, 8, .21 )',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  eventNameText: {
    color: '#B27303',
    fontSize: 15,
    fontWeight: 'bold'
  },
  eventDateText: {
    color: '#B27303',
    fontSize: 13
  }
} )

export default EventItemListView