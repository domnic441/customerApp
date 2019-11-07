import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,ScrollView,SafeAreaView,TouchableWithoutFeedback,FlatList,Alert} from 'react-native';
import PostData from '../data/posts.json';
import {Card,Button,Icon} from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import Carousel from 'react-native-snap-carousel';
import string from '../common/api'
import { withNavigation } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Home extends Component{
static navigationOptions = {
    header: null
  };
  constructor(props){
        super(props);
        this.state = {

             interval:'',
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
        ],
          data: [],
        }
    }


renderEntries({item,index}){

        return (

        <View>
           <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Restaurant')} key={index}>
           <Card containerStyle={{borderRadius:10}} >
           <View style={{flexDirection:"row"}}>
           <Image
           resizeMode="cover"
           style={styles.restaurantLogo}
           source={require('../img/logo.jpg')}
           />
           <View style={{flexDirection:"column",marginLeft:10}}>
           <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}> {item.restaurant_name}</Text>

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
           </View>

        );
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
<View style={styles.container}>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('SearchLocation')}>
<View style={{backgroundColor:'#ffc44d',height:'11%'}}>
<View style={{backgroundColor:'white',marginTop:10,borderRadius:5,width:'95%',marginLeft:10}}>
<Text style={{paddingLeft:10,paddingTop:5}} >Deliver to</Text>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
marginBottom:5}}>
<Text style={{marginLeft:10}} >#21,aathichudi international pre school</Text>
<Icon name="pencil" type="simple-line-icon" size={15} iconStyle={{position:'absolute',right:7}}/>
</View>
</View>
</View>
</TouchableWithoutFeedback>
<ScrollView >
<View style={{margin:5}}>
<Text style={styles.title}>Offers for you</Text>
<SafeAreaView >
         <View style={{alignItems:'center'}}>
            <Carousel
                    autoplay={true}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={400}
                    itemWidth={350}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) }
                />
                </View>
</SafeAreaView>
<View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15,marginLeft:15,marginRight:15}}>
<Text style={{fontSize:15,color:'black'}}>Restaurants near you</Text>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('RestaurantsNearYou')}>
<View style={{flexDirection:"row",alignItems:'center'}}>
<Text style={{fontSize:14,color:'black'}}>VIEW ALL</Text>
<Icon name="right" type="antdesign" size={12}/>
</View>
</TouchableWithoutFeedback>
</View>
  </View>
<FlatList
          data={this.state.data}
          keyExtractor={(item, index) => item.key}
          renderItem={this.renderEntries}


        />
</ScrollView>
</View>
);
}
}

export default Home;

const styles = StyleSheet.create({
container:{
flex:1,
},
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