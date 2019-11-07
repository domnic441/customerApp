import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableWithoutFeedback,ScrollView,TextInput} from 'react-native';
import {Icon,Card} from 'react-native-elements';
import ElevatedView from 'react-native-elevated-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class WalletBalance extends Component{
render(){
return(
<View style={styles.container}>
<View style={{flexDirection:'column',paddingTop:50,paddingLeft:30}}>
<Text>Your BiteMII wallet balance </Text>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon size={23} name='rupee' type='font-awesome' />
<Text style={{fontSize:40}}> 234.56</Text>
</View>
</View>
<View style={{flexDirection:'column',paddingLeft:30,paddingTop:50}}>
<Text style={{fontSize:15}}>Recharge Wallet</Text>
<Text style={{fontSize:13,paddingTop:15}}>Fill your Bite MII wallet with below denominations {"\n"}or
enter your own amount
</Text>
</View>
<View style={{flexDirection:'row',paddingTop:20,paddingLeft:20}}>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<ElevatedView
elevation={3}
style={styles.stayElevated}>
<View style={{flexDirection:"column"}}>
<Text style={{fontSize:30}}>25</Text>
</View>

</ElevatedView>
<ElevatedView
elevation={3}
style={styles.stayElevated}>
<View style={{flexDirection:"column" }}>
<Text style={{fontSize:30}}>50</Text>
</View>
</ElevatedView>

<ElevatedView
elevation={3}
style={styles.stayElevated1}>
<View style={{flexDirection:"column"}}>
<Text style={{fontSize:30}}>100</Text>
</View>
</ElevatedView>

<ElevatedView
elevation={3}
style={styles.stayElevated}>
<View style={{flexDirection:"column" }}>
<Text style={{fontSize:30}}>200</Text>
</View>
</ElevatedView>

<ElevatedView
elevation={3}
style={styles.stayElevated}>
<View style={{flexDirection:"column" }}>
<Text style={{fontSize:30}}>300</Text>
</View>

</ElevatedView>
</ScrollView>
</View>
<View style={{alignItems:'center',paddingTop:20}}>
<TextInput
placeholder='enter your amount (should be greater than 20)'
style={{borderBottomWidth:1,width:'85%'}}
/>
</View>
<View style={{flexDirection:'row',backgroundColor:'#ffc44d',position:'absolute',bottom:0,width:'100%',height:'10%'
,justifyContent:"space-between",alignItems:'center',paddingLeft:20,paddingRight:30}}>
<Text style={{fontSize:15}}>PROCEED TO PAY</Text>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#F0F0F0',width:'20%',borderRadius:5}}>
<Icon size={13} name='rupee' type='font-awesome' />
<Text style={{fontSize:20}}> 250</Text>
</View>
</View>
</View>

);

}
}

export default WalletBalance;

const styles=StyleSheet.create({
container: {
flex:1,
flexDirection:'column',
},
stayElevated: {
width: 90,
height:70,
margin: 10,
alignItems:"center",
justifyContent:"center",
backgroundColor: 'white',
borderRadius:10

},
stayElevated1: {
width: 90,
height:70,
margin: 10,
alignItems:"center",
justifyContent:"center",
backgroundColor: 'white',
borderRadius:10,
backgroundColor:'#ffc44d'

},
bottomText:{
fontSize:15,
fontWeight:'bold',
color:'black',
paddingTop:10,
textAlign:'center',

},
box:{
borderWidth:1,
borderColor:'#E8E8E8',
width:wp('27%'),
height:70,
marginTop:10,
backgroundColor:"#F8F8F8"
},
icon:{
marginTop:10
}

});