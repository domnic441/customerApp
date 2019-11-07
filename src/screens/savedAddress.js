import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';

class SavedAddress extends Component{
render(){
return (
<View style={styles.container}>
<View style={{flexDirection:'column'}}>
<Text style={styles.text2}>Add New</Text>
<TouchableWithoutFeedback >
<View style={{alignItems:'center'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#F8F8F8',padding:10,width:'90%',borderRadius:10}}>
<Text>Search Locations</Text>
<Icon name='search1' type='antdesign'/>
</View>
</View>
</TouchableWithoutFeedback>
</View>

<View style={{flexDirection:'column', padding:20}}>
<Text style={styles.text}>Current Location</Text>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon name='location' type='evilicon' size={30}/>
<Text style={styles.text2}>Demo address</Text>
</View>
</View>
<View style={{flexDirection:'column',backgroundColor:'#F0F0F0', padding:18}}>
<Text style={styles.text}>Saved Locations</Text>
</View>
<View style={{flexDirection:'column'}}>
<View style={{flexDirection:'row', padding:15,justifyContent:'space-between',alignItems:'center',borderBottomWidth:1}}>
<Text style={styles.text}>Cecilia Chapman{"\n"}
                          711-2880 Nulla St.{"\n"}
                          Mankato Mississippi 96522{"\n"}
                          (257) 563-7401</Text>
<Icon name='delete' type='antdesign' size={20} iconStyle={{color:'red'}}/>
</View>
<View style={{flexDirection:'row', padding:15 ,justifyContent:'space-between',alignItems:'center',borderBottomWidth:1}}>
<Text style={styles.text}>Cecilia Chapman{"\n"}
                           711-2880 Nulla St.{"\n"}
                           Mankato Mississippi 96522{"\n"}
                           (257) 563-7401</Text>
<Icon name='delete' type='antdesign' size={20} iconStyle={{color:'red'}}/>
</View>
<View style={{flexDirection:'row', padding:15 ,justifyContent:'space-between',alignItems:'center',borderBottomWidth:1}}>
<Text style={styles.text}>Cecilia Chapman{"\n"}
                          711-2880 Nulla St.{"\n"}
                           Mankato Mississippi 96522{"\n"}
                           (257) 563-7401</Text>
<Icon name='delete' type='antdesign' size={20} iconStyle={{color:'red'}}/>
</View>
</View>
</View>
)}}
export default SavedAddress;
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
  fontSize:15,
  fontWeight:'bold',
  padding:20
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