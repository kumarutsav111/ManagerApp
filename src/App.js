
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    componentWillMount(){
        var config = {
            apiKey: "AIzaSyCsA4fDgA0saiv25jFzpRRDyF66-AhBR3g",
            authDomain: "managerprojectutsav.firebaseapp.com",
            databaseURL: "https://managerprojectutsav.firebaseio.com",
            projectId: "managerprojectutsav",
            storageBucket: "managerprojectutsav.appspot.com",
            messagingSenderId: "824920064130"
          };
          firebase.initializeApp(config);
    }
  render() {
    return (
    <Provider store = {createStore(reducers)}>
      
        <LoginForm/>
      </Provider>
    );
  }
}
