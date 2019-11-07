import React, { Component } from "react";
import {StyleSheet, Text, View,TouchableWithoutFeedback,Image,ScrollView} from 'react-native';
import {Card,Button,Icon} from 'react-native-elements';
import PostData from '../data/posts.json';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class PastOrders extends Component{
 componentDidMount() {
  this.fetchData();
 }

   fetchData = async () => {
   let collection={
   id:1482,
   device_id:DeviceInfo.getUniqueID()
   }
   try{
     const response = await fetch( string.HTTP+'/order_list',{
     method:'POST',
     body:JSON.stringify(collection),
     headers: {
        'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
          'Content-Type': 'application/json'
           }});
     const json = await response.json();
     if (json.success==true){
     this.setState({ data:json.order_details });
     }
     else{
     console.log('Bad response verify your credentials')
     }
 }  catch (err) {
           console.warn(err);
         }
   };
title(){
return(
<View style={{flexDirection:'row'}}>
<Text >
<Icon name="check" type="antdesign" size={10} />
{" "} Delivered</Text>
</View>
)
}
subTitle(text){
return(
<View style={{flexDirection:'column'}}>
<Text style={styles.link}>
 {text}</Text>
 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
 <Text style={styles.link}>
  {text}</Text>
  <Text style={styles.link}>
   {text}</Text>
   </View>
</View>
)
}


render(){
return(
<View>
<ScrollView >
{PostData.map((details,index)=>
{
return(

<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Restaurant')} key={index}>
<Card containerStyle={{borderRadius:10}}image={require('../img/logo.jpg')}  featuredTitle = "Delivered"
featuredTitleStyle={{position:'absolute',top:10,left:10,borderRadius:10,backgroundColor:'white',color:'black',fontSize:hp('2.3%'),
width:wp('20%'),textAlign:'center'}}>
<View style={{flexDirection:"column",padding:5}}>
<Text style={{position:'absolute',top:-60,color:'white',fontSize:hp('2.5%')}}>Hotel Name</Text>
<Text style={{position:'absolute',top:-40,color:'white',fontSize:hp('2.5%')}}>Hotel Location</Text>
<Text style={{fontSize:15,color:'black'}}>16 Apr 2019 3.50pm</Text>
<View style={{flexDirection:'row', justifyContent:"space-between"}}>
<Text style={{fontSize:15}}>Order #2533545</Text>
<TouchableWithoutFeedback onPress={() =>this.props.navigation.navigate('OrderInvoice')}>
<View style={{flexDirection:'row' }}>
<Text style={{fontSize:15,color:'green'}}>Details</Text>
<Icon name="right" type="antdesign" size={12} iconStyle={{marginTop:5,marginLeft:5}}/>
</View>
</TouchableWithoutFeedback>
</View>
<View  style={{flexDirection:'row',padding:3}} >
<Icon name="staro" type="antdesign" size={15} />
<Text style={{paddingLeft:5}}>4.5</Text>
</View>
</View>
</Card>
</TouchableWithoutFeedback>

)
}
)}
</ScrollView >
</View>
);
}
}
const styles = StyleSheet.create({

carouselContainer:{

},
restaurantLogo:{
width:wp('20%'),
height:hp('10%'),
borderRadius:5
},
title:{
fontSize:hp('2.7%'),
color:'black',
fontWeight:'bold',
marginTop:15,
marginBottom:10,
marginLeft:20
},
link: {

		fontSize:hp('2.3%'),

		color:'black',
		textAlign: 'left',


	},
});
export default PastOrders;