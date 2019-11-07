import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class PlaceOrder extends Component{
render(){
return (
<View style={styles.container}>
<View style={{flexDirection:'column',borderBottomWidth:1, padding:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text}>Delivery address</Text>
<Text style={styles.text1}>EDIT</Text>
</View>
<Text style={styles.text2}>Address</Text>
</View>
<View style={{flexDirection:'column',borderBottomWidth:1, padding:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={styles.text}>Payment Method</Text>
<Text style={styles.text1}>CHANGE</Text>
</View>
<Text style={styles.text2}>Debit/Credit</Text>
</View>
<View style={styles.button}>
<Text style={{fontSize:15,fontWeight:'bold'}}>PAY & PLACE ORDER</Text>
</View>
</View>
)}}
export default PlaceOrder;
const styles = StyleSheet.create ({
container:{
flex:1,
flexDirection:'column'
},

text:{
 fontSize:15,
 },

 text1:{
 fontSize:10,
 color:'green'
 },
 text2:{
  fontSize:13,
  fontWeight:'bold',
  padding:10
  },
button:{
position:'absolute',
bottom:0,
alignItems:'center',
justifyContent:'center',
width:'100%',
height:'8%',
backgroundColor:'#ffc44d',

}

})