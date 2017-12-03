import React, { Component } from 'react';
import searchIcon from './resources/musica-searcher.png'
import GeneralNavBarView from './GeneralNavBarView'
import FriendRowView from './FriendRowView'
import SearchView from './SearchView'
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

const friends = [
  {name: 'Amiguito Random'},
  {name: 'Amiguito Random'},
  {name: 'Amiguito Random'},
  {name: 'Amiguito Random'},
  {name: 'Amiguito Random'}
]

class FriendListView extends Component {
  render() {
    return(
      <View>
        <GeneralNavBarView
          title="Friends List"
        />

        <View style={styles.container}>
          <SearchView
            placeholder="Search Friends..."
          />

          <ScrollView style={styles.friendsList}>
            {
              friends.map( ( friend, index )=>{
                return(
                  <FriendRowView
                    name={friend.name}
                    key={index}
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
  },
  friendsList:{
    marginTop: 20,
    marginBottom: 20
  }
} )

export default FriendListView