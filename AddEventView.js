import React, { Component } from 'react';
import GeneralNavBarView from './GeneralNavBarView'
import FoodRowView from './FoodRowView'
import eventNameIcon from './resources/confetti.png'
import eventDateIcon from './resources/calendar-3.png'
import foodNameIcon from './resources/cutlery.png'
import addFoodIcon from './resources/add.png'
import addEventIcon from './resources/add-event.png'
import foodPriceIcon from './resources/dollar-symbol.png'
import eventAddressIcon from './resources/facebook-placeholder-for-locate-places-on-maps.png'
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

const foods = [
  {name: 'Pastor', price:250},
  {name: 'Pastor', price:250}
]

class AddEventView extends Component{
  render() {
    return(
      <View style={{flex:1}}>
        <GeneralNavBarView
          title="Add Event"
        />
        
        <View style={styles.mainContaier}>
          <ScrollView>
            <Text style={styles.title}>Events Details</Text>

            <View style={styles.formSection}>
              <View style={styles.formGroup}>
                <Image
                  source={eventNameIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Name..."
                  underlineColorAndroid='#BCBCBC' 
                />
              </View>

              <View style={styles.formGroup}>
                <Image
                  source={eventDateIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Date..."
                  underlineColorAndroid='#BCBCBC' 
                />
              </View>

              <View style={styles.formGroup}>
                <Image
                  source={eventAddressIcon}
                  style={styles.icon}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Event Address..."
                  underlineColorAndroid='#BCBCBC' 
                />
              </View>
            </View>

            <View style={styles.foodSection}>
              <Text style={styles.title}>Food</Text>

              <View style={styles.foodList}>
                {foods.map( ( food, index )=>{
                  return(
                    <FoodRowView
                      key={index}
                      name={food.name}
                      price={food.price}
                    />
                  )
                } )}
              </View>

              <View style={styles.inlineForm}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                  <View style={styles.formGroup}>
                    <Image
                      source={foodNameIcon}
                      style={styles.icon}
                    />

                    <TextInput
                      style={styles.foodInput}
                      placeholder="Food..."
                      underlineColorAndroid='#BCBCBC' 
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Image
                      source={foodPriceIcon}
                      style={styles.icon}
                    />

                    <TextInput
                      style={styles.foodInput}
                      placeholder="Price..."
                      underlineColorAndroid='#BCBCBC' 
                    />
                  </View>
                </View>

                <TouchableOpacity style={styles.formGroup}>
                  <Image
                    source={addFoodIcon}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            
            <TouchableOpacity style={styles.addButton}>
              <Image
                source={addEventIcon}
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Add Event</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContaier: {
    backgroundColor: '#FAFAFA',
    minHeight: '100%',
    flex: 1,
    paddingTop: 16,
    paddingLeft: 26,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#95989A'
  },
  formSection:{
    marginTop: 20
  },
  formGroup:{
    flexDirection: 'row',
    marginBottom:30
  },
  icon:{
    width: 25,
    height: 25,
    marginRight: 12
  },
  input:{
    width: '80%',
    paddingBottom: 10
  },
  foodInput:{
    width: 50,
    paddingBottom: 10
  },
  foodSection:{
    marginTop: 30
  },
  foodList:{
    marginTop: 10,
    marginBottom: 15,
    paddingRight: 16
  },
  inlineForm:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  addButton:{
    width: 147,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#81D2C7',
    marginTop: 10
  },
  buttonText: {
    color:'#FFFFFF',
    marginLeft: 1
  }
})

export default AddEventView