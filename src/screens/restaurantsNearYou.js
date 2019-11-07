import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,ScrollView,SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import PostData from '../data/posts.json';
import {Card,Button,Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class RestaurantsNearYou extends Component{
   constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
            carouselItems: [
            {
                title:"Item 1"
            },
            {
                title:"Item 2"
            },
            {
                title:"Item 3"
            },
            {
                title:"Item 4"
            },
            {
                title:"Item 5"
            }
        ]}
    }

    _renderItem({item,index}){
        return (
            <View style={{flex:1}}>
                <Image
                      style={{borderRadius:15,width:'100%',height:180}}
                    source={require('../img/banner1.png')}
                    />
            </View>
        )
    }
render(){
return(
<View style={{marginTop:20}}>
<ScrollView >
{PostData.map((details,index)=>
{
return(
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Restaurant')} key={index}>
<Card containerStyle={{borderRadius:10}}>
<View style={{flexDirection:"row"}}>
<Image
style={styles.restaurantLogo}
source={require('../img/logo.jpg')}
/>
<View style={{flexDirection:"column",marginLeft:10}}>
<Text style={{fontSize:18,fontWeight:'bold',color:'black'}}> {details.restaurant}</Text>
<Text style={{fontSize:15}}> {details.address}</Text>
<View style={{alignItems:'flex-start',flexDirection:'row' ,alignItems:"center",marginTop:10}}>
<Icon name="square-inc" type="material-community" size={15} iconStyle={{color:'green'}}/>
<Icon name="square-inc" type="material-community" size={15} iconStyle={{color:'red'}}/>
<View  style={{marginLeft:20,flexDirection:'row'}} >
<Icon name="clockcircleo" type="antdesign" size={15}/>
<Icon name="staro" type="antdesign" size={15}/>
<Icon name="hearto" type="antdesign" size={15}/>
</View>
</View>
</View>
</View>
</Card>
</TouchableWithoutFeedback>
)
}
)}
</ScrollView>
</View>
);
}
}

export default RestaurantsNearYou;

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
}
});