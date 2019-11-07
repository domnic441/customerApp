import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

class EmptyCart extends Component{
render(){
return(
<View style={{flex:1,alignItems:'center',}}>
<View style={styles.container}>
<Icon name='shopping-bag' type='feather' size={50}/>
<Text style={{padding:20,alignItems:'center'}}>    No items in your cart.Browse{"\n"}through your favorite restaurants</Text>
<View style={{backgroundColor:'green',width:wp('45%'),height:hp('6%'),marginTop:30,alignItems:'center',justifyContent:'center'}}>
<Text style={{color:'white'}}>START ORDERING</Text>
</View>
</View>
</View>

);}

}

export default EmptyCart;

const styles=StyleSheet.create({
container:
{
backgroundColor:'#ebebeb',
borderRadius:10,
marginTop:40,
alignItems:'center',
justifyContent:'center',
flexDirection:'column',
width:wp('90%'),
height:hp('40%')
}
});