import React from 'react';
import EventsListView from './EventsListView'
import FriendsListView from './FriendsListView'
import AddEventView from './AddEventView'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    /*return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );*/
    return(
      
      //<EventsListView/>
     //<FriendsListView/>
     <AddEventView/>
    )
 
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
