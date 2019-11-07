import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableWithoutFeedback,ScrollView} from 'react-native';
import {Icon,Card} from 'react-native-elements';
import ElevatedView from 'react-native-elevated-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class PaymentMethod extends Component{
render(){
return(
<View style={styles.container}>
<ScrollView>
<Text style={{fontSize:40}}> 234.56</Text>
<ElevatedView
elevation={3}

style={styles.stayElevated}>
<Text>hwllo</Text>
</ElevatedView>
</ScrollView>
</View>
);
}}
export default PaymentMethod

const styles=StyleSheet.create({
container: {
flexDirection:'column',
},

stayElevated: {
width: 160,
height: 130,
margin: 10,
alignItems:"center",
backgroundColor: 'white',

},



});