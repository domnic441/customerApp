import React, { Component } from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class OrderInvoice extends Component{
render(){
return(
<View>
<View style={{margin:15}}>
<View style={styles.container}>
<Text style={styles.order}>Order #B12HDGFDD</Text>
<View style={styles.delivered}>
<Icon name='check' type='antdesign' size={20} iconStyle={{color:'green'}}/>
<Text style={{textAlign:'center'}}>DELIVERED</Text>
</View>
</View>
<Text>Lorem Ipsum restaurant name</Text>
<Text>Location(area)</Text>
</View>
<View style={{backgroundColor:'#E8E8E8',height:'8%',justifyContent:'center'}}>
<Text style={{paddingLeft:20}}>ITEMS</Text>
</View>
<View style={{borderBottomWidth:1}}>
<View style={{flexDirection:'row',margin:20,justifyContent:'space-between'}}>
<Icon name="thumbs-up" type="font-awesome" />
<View style={{flexDirection:'column'}}>
<Text style={{color:'black',fontWeight:'bold',fontSize:20}}>Lorem Ipsum Item name</Text>
<Text>Location</Text>
</View>

<View style={{flexDirection:'row'}}>
<Icon name="rupee" type="font-awesome" size={15}/>
<Text style={{color:'green',marginLeft:7}}>XYZ.ab</Text>
</View>
</View>
</View>
<View style={{borderBottomWidth:1 ,backgroundColor:'#f8f8f8'}}>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:15}}>
<View style={{flexDirection:'column'}}>
<Text style={{color:'gray'}}>Sub Total:</Text>
<Text style={{color:'gray'}}>Delivery Fee:</Text>
<Text style={{fontSize:17,color:'black',fontWeight:'bold'}}>Order Total:</Text>
</View>
<View style={{flexDirection:'column'}}>
<Text>XY.ab</Text>
<Text>a.y</Text>
<Text>XYZ.ab</Text>
</View>
<View style={{flexDirection:'column',marginTop:10}}>
<Text>Paid by cash</Text>
<Text style={{color:'green'}}>DOWNLOAD RECEIPT</Text>
</View>
</View>
</View>
<View style={{flexDirection:'row',borderBottomWidth:1,padding:15}}>
<Text style={{color:'gray'}}>Delivered by </Text>
<Text style={{color:'black', fontWeight:'bold',fontSize:16}}> Person name</Text>
<Icon name='star' type='antdesign' iconStyle={{color:'gold',marginLeft:120}} size={20}/>
<Text style={{marginLeft:10}}>4.3/5</Text>
</View>
</View>
);
}
}

export default OrderInvoice;

const styles=StyleSheet.create({
container:{
flexDirection:'row',
justifyContent:'space-between',
marginTop:10
},
order:{
color:'black',
fontSize:18
},
delivered:{
flexDirection:'row',
alignItems:'center',
backgroundColor:'#E8E8E8',
height:hp('3.5%'),
width:wp('25%'),
borderRadius:13
},


})