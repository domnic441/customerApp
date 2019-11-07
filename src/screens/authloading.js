import React, { Component } from "react";
import {
View,
Text,
StyleSheet,
ActivityIndicator,
AsyncStorage
} from "react-native";

class AuthLoading extends Component {

constructor() {
super()
this.loadApp()
}

loadApp = async () => {
const userToken = await AsyncStorage.getItem('userToken')

this.props.navigation.navigate(userToken ? 'Home' : 'Login')
}

render() {
return (
<View style={styles.container}>
<ActivityIndicator />
</View>
);
}
}
export default AuthLoading;

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
}
});