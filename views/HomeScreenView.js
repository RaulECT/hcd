import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class HomeScreenView extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.appTitle}>App Title</Text>
                
                <TouchableOpacity style={styles.signinButton}>
                    <View>
                        <Text style={styles.signinTextButton}>Sign in</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton}>
                    <View>
                        <Text style={styles.loginTextButton}>Log in</Text>
                    </View>
                </TouchableOpacity>
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
    appTitle: {
        color: '#FFA608',
        fontSize: 60
    },
    signinButton: {
       backgroundColor: '#0054B2',
       marginTop: 40,
       width: 204,
       height: 51,
       justifyContent: 'center',
       alignItems: 'center'
        
    },
    signinTextButton: {
        color: '#FFFFFF',
        fontSize: 20
    },
    loginButton: {
        borderColor: '#0054B2',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 15,
        width: 204,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginTextButton: {
        color: '#0054B2',
        fontSize: 20
    }
} )

export default HomeScreenView