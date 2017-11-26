import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const signInText = "You don´t have an account? "
const logInText = "You have an account? "

class FormView extends Component {
  render() {
    let text = this.props.title == 'Sign In' ? logInText: signInText
    let option = this.props.title == 'Sign In' ? 'Log In': 'Sign In'

    return(
      <View style={styles.container}>
        <Text style={styles.title}> {this.props.title} </Text>

        <View style={styles.fieldsView}>
          <TextInput
            style={styles.fields}
            placeholder = "E-mail"
          />

          <TextInput
            style={styles.fields}
            placeholder = "Password"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <View>
            <Text style={styles.buttonText}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          {text}
          <Text style={styles.testOption}>{option}</Text> 
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  fieldsView: {
    marginTop: 63
  },
  title: {
    fontSize: 30,
    color: '#FFA608'
  },
  fields: {
    width: 306,
    height: 51,
    paddingLeft: 37,
    marginBottom: 30,
    fontSize: 18,
    backgroundColor: 'rgba(255, 166, 8, .31)'
  },
  button: {
    width: 204,
    height: 51,
    backgroundColor: '#0054B2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  footerText: {
    marginTop: 65,
    color: '#95989A',
    fontSize: 15
  },
  testOption: {
    color: '#0054B2',
    fontSize: 15
  }
} )

export default FormView

