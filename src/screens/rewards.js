import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableWithoutFeedback,ScrollView} from 'react-native';
import {Icon,Card} from 'react-native-elements';
import ElevatedView from 'react-native-elevated-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Rewards extends Component{
render(){
return(
<View style={styles.container}>
<ScrollView>
<View style={{flexDirection:'column',paddingTop:70,paddingLeft:40}}>
<Text>Rewards you have earned</Text>
<View style={{flexDirection:'row',alignItems:'center'}}>
<Icon size={23} name='rupee' type='font-awesome' />
<Text style={{fontSize:40}}> 234.56</Text>
</View>
</View>
<View style={{flexDirection:'column',padding:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<ElevatedView
elevation={3}

style={styles.stayElevated1}>
<View style={{flexDirection:"column",marginTop:15}}>
<Image
source={require('../img/clap.png')}
style={{width:wp('16%'), height:hp('8%'),backgroundColor:'#ffc44d',borderRadius:50}}
/>
<View style={{flexDirection:"column",paddingTop:10,alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>
<Text>150</Text>
<Text> coins</Text>
</View>
<Text>REFERRAL</Text>
</View>
</View>
</ElevatedView>

<ElevatedView

elevation={3}
style={styles.stayElevated1}>
<View style={{flexDirection:"column",marginTop:15}}>
<Icon size={50} name='wallet' type='simple-line-icon'/>
<View style={{flexDirection:"column",paddingTop:10,alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>
<Icon size={13} name='rupee' type='font-awesome' />
<Text> 150</Text>
</View>
<Text>CASH BACK</Text>
</View>
</View>
</ElevatedView>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<ElevatedView
elevation={3}

style={styles.stayElevated1}>
<View style={{flexDirection:"column",marginTop:15}}>
<Image
source={require('../img/clap.png')}
style={{width:wp('16%'), height:hp('8%'),backgroundColor:'#ffc44d',borderRadius:50}}
/>
<View style={{flexDirection:"column",paddingTop:10,alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>
<Text>150</Text>
<Text> coins</Text>
</View>
<Text>REFERRAL</Text>
</View>
</View>
</ElevatedView>

<ElevatedView

elevation={3}
style={styles.stayElevated1}>
<View style={{flexDirection:"column",marginTop:15}}>
<Icon size={50} name='wallet' type='simple-line-icon'/>
<View style={{flexDirection:"column",paddingTop:10,alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>
<Icon size={13} name='rupee' type='font-awesome' />
<Text> 150</Text>
</View>
<Text>CASH BACK</Text>
</View>
</View>
</ElevatedView>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<ElevatedView
elevation={3}

style={styles.stayElevated1}>
<View style={{flexDirection:"column",marginTop:15}}>
<Image
source={require('../img/clap.png')}
style={{width:wp('16%'), height:hp('8%'),backgroundColor:'#ffc44d',borderRadius:50}}
/>
<View style={{flexDirection:"column",paddingTop:10,alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>

<Text>150</Text>
</View>
<Text>REFERRAL</Text>
</View>
</View>
</ElevatedView>

<ElevatedView

elevation={3}
style={styles.stayElevated1}>
<View style={{flexDirection:"column",marginTop:15}}>
<Icon size={50} name='wallet' type='simple-line-icon'/>
<View style={{flexDirection:"column",paddingTop:10,alignItems:'center'}}>
<View style={{flexDirection:"row",alignItems:'center'}}>
<Icon size={13} name='rupee' type='font-awesome' />
<Text> 150</Text>
</View>
<Text>CASH BACK</Text>
</View>
</View>
</ElevatedView>
</View>
</View>
</ScrollView>
</View>

);

}
}

export default Rewards;

const styles=StyleSheet.create({
container: {
flexDirection:'column',
},

stayElevated1: {
width: 160,
height: 130,
margin: 10,
alignItems:"center",
backgroundColor: 'white',

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