import React, { Component } from 'react';
import HomeNavBar from './HomeNavBarView'
import EventItemListView from './EventItemListView'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const events = [
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'},
  {name: 'Cumpleaños del Sr. Snuffles', date: '25-Nov-2017'}
]

class EventsListView extends Component {
  render() {
    return(
      <View>
        <HomeNavBar/>

        <View style={styles.container}>
          <Text style={styles.mainText}>Your Events:</Text>

          <ScrollView style={styles.eventsListSection}>
            {
              events.map( ( event, index )=> {
                return(
                  <EventItemListView
                    key = {index}
                    eventName = {event.name}
                    eventDate = {event.date}
                  />
                )
              } )
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#F0F0F0',
    height: '100%'
  },
  mainText: {
    fontSize: 20,
    color: '#95989A',
    marginTop: 40,
    marginLeft: 30
  },
  eventsListSection: {
    marginTop: 40,
    paddingLeft: 20
  }
} )

export default EventsListView