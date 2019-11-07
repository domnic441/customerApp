import React, { Component } from "react";
import {StyleSheet, Text, View,TouchableWithoutFeedback,Switch} from 'react-native';
import {Card,Button,Icon} from 'react-native-elements'
let props='';
class Filter extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 ,flexDirection: 'column'}}>
       <Text style={{fontSize:20,paddingTop:10,paddingLeft:15,fontWeight:'bold'}}>Set Filter</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:25,paddingTop:15}}>
          <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:15,fontWeight:'bold'}}>VEG Only</Text>
         <Icon name="square-inc" type="material-community" size={17} iconStyle={{color:'green',padding:4}}/>
          </View>
          <Switch
                   onValueChange = {props.toggleSwitch1}
                   value = {props.switch1Value}/>
          </View>
          <View style={{flexDirection:'column',justifyContent:'center'}}>
           <Text style={styles.text}>Sort by delivery time</Text>
           <Text style={styles.text}>Sort by delivery time</Text>
           <Text style={styles.text}>Sort by delivery time</Text>
           <Text style={styles.text}>Sort by delivery time</Text>
           <Text style={styles.text}>Sort by delivery time</Text>
           </View>
           <View style={styles.button}>
           <Text style={{color:'white'}}>APPLY FILTERS</Text>
           </View>
      </View>
    );
  }
}

export default Filter;
const styles=StyleSheet.create({
text:
{
borderBottomWidth:1,
fontSize:15,
paddingLeft:25,
paddingTop:15,
paddingBottom:15
},
button:{
position:'absolute',
right:10,
bottom:10,
alignItems:'center',
justifyContent:'center',
backgroundColor:'green',
marginTop:20,
width:'30%',
height:'8%'
}
});