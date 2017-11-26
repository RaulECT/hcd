import React, { Component } from 'react';
import FormView from './FormView'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class SignInView extends Component {
  render() {
    return(
      <FormView
        title = "Sign In"
      />
    )
  }
}

export default SignInView