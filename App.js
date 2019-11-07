import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableOpacity,Alert,YellowBox,StatusBar, DrawerLayoutAndroid} from "react-native";
import Navigator from './src/navigation/navigator'

export default class App extends Component {

    render() {
        return (
        <View  style={{flex: 1}}>
        <StatusBar backgroundColor="#ffb82b" barStyle="dark-content"/>
                <Navigator/>
                </View>
               );
             }
                }