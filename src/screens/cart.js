import React, { Component } from "react";
import {Platform,StyleSheet, Text, View,Button} from 'react-native';
import {Header,Icon} from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
var swipeoutBtns = [
  {
    text: 'Edit',
    color:"white",
    backgroundColor:"green"
  },
  {
      text: 'Delete',
      color:"white",
      backgroundColor:"red"
    }
]
class Cart extends Component{
render(){
const { navigate } = this.props.navigation;
return(
<View style={styles.MainContainer}>
<View style={{flexDirection:"row",backgroundColor:"#E8E8E8",height:hp('6%'),alignItems:"center",justifyContent:"center"}}>
<Icon name="info" type="feather" size={15}/>
<Text style={{paddingLeft:10}}>Swipe items left to edit or delete items</Text>
</View>
<Swipeout right={swipeoutBtns}>
  <View style={styles.swipeContainer}>
    <Text style={styles.swipeContainerText}>Swipe me left</Text>
    <Icon name="square-inc" type="material-community" size={15} iconStyle={styles.icon}/>
  </View>
</Swipeout>
<Swipeout right={swipeoutBtns}>
  <View style={styles.swipeContainer}>
    <Text style={styles.swipeContainerText}>Swipe me left</Text>
    <Icon name="square-inc" type="material-community" size={15} iconStyle={styles.icon}/>
  </View>
</Swipeout>
<Swipeout right={swipeoutBtns}>
  <View style={styles.swipeContainer}>
    <Text style={styles.swipeContainerText}>Swipe me left</Text>
    <Icon name="square-inc" type="material-community" size={15} iconStyle={styles.icon}/>
  </View>
</Swipeout>
<View style={{flexDirection:"column",alignItems:"flex-end", position: 'absolute', bottom:90,right:120}}>
<Text style={styles.text}>Sub Total</Text>
<Text style={styles.text}>Delivery Fee</Text>
<Text style={styles.text}>Order Total</Text>
</View>
<View style={styles.bottomView}>
<Text>PROCEED TO CHECKOUT</Text>
</View>
</View>
);
}
}
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
    },

    bottomView:{

      width: '100%',
      height: 50,
      backgroundColor: '#ffc44d',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 text:{
     padding:7
    },
    textStyle:{
      color: '#fff',
      fontSize:22
    },
  swipeContainer:{
      flexDirection:'row',
      height:60,
      backgroundColor:"white",
      borderBottomWidth:1
  },

  swipeContainerText:{
    fontSize:hp('2.3%'),
    alignItems:'center',
    paddingLeft:45,
    paddingTop:15,
    color:'black'
  },
   icon:{
      color:'green',
      paddingLeft:15,
      paddingTop:18,

    }
});
export default Cart;