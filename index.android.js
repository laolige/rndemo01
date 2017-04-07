/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import NavigationBar from './js/component/NavigationBar';
import HomePage from './js/pages/HomePage';

export default class demo01 extends Component {
  render() {
    return (
      <View style={styles.container}>

          <HomePage/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
      flex:1
    }
});

//require方式导入，必选使用module.exports=LoginView;
// var BagView = require('./BagView');
// var LoginView = require('./LoginView');
// var BannerView = require('./BannerView');
// var NavigationBar = require('./NavigationBar');
// export default class demo01 extends Component {
//     render() {
//         return (
//             <NavigationBar/>
//         );
//     }
// }
AppRegistry.registerComponent('demo01', () => demo01);
