import React, { Component } from 'react';
import HomeNavBarView from './HomeNavBarView'
import EventRowView from './EventRowView'
import SearchView from './SearchView'
import searchIcon from './resources/musica-searcher.png'
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

const events  = [
  { name:'Posada Yellow', date: '23-Diciembre-2017' },
  { name:'Posada Yellow', date: '23-Diciembre-2017' },
  { name:'Posada Yellow', date: '23-Diciembre-2017' },
  { name:'Posada Yellow', date: '23-Diciembre-2017' },
  { name:'Posada Yellow', date: '23-Diciembre-2017' },
  { name:'Posada Yellow', date: '23-Diciembre-2017' }
]

class EventsListView extends Component {
  render() {
    return(
      <View>
        <HomeNavBarView></HomeNavBarView>
        <View style={styles.container}>

          <SearchView
            placeholder="Search Events..."
          />

          <ScrollView style={styles.eventsList}>
            {
              events.map( ( event, index )=>{
                return(
                  <EventRowView
                    key={index}
                    name={event.name}
                    date={event.date}
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
    backgroundColor: '#FAFAFA',
    width: '100%',
    minHeight: '100%',
    paddingTop: 16,
    paddingLeft: 26,
    paddingRight: 26,
  }
} )

export default EventsListView