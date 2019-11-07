import React,{Component} from 'react';
import {View,Text,TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class EnterOtp extends Component{
render(){
return(
<View style={{flex:1,alignItems:'center',flexDirection:'column'}}>
<Text style={{padding:20,alignItems:'center'}}>We have sent One Time Password to your.
registered mobile number ****456/email address ****@gmail.com</Text>
<Text style={{padding:20,alignItems:'center'}}>Enter the code to proceed</Text>
<TextInput
style={{borderBottomWidth:1,width:wp('90%')}}
placeholder='Enter the One Time Password'
>
</TextInput>
<View style={{backgroundColor:'#ffc44d',width:wp('90%'),height:hp('6%'),marginTop:30,alignItems:'center',justifyContent:'center'}}>
<Text>PROCEED</Text>
</View>
<View style={{flexDirection:'row',marginTop:20}}>
<Text style={{color:'black'}}>Have not received code yet ?</Text>
<Text style={{color:'green'}}> Resend Code</Text>
</View>

</View>

);}

}

export default EnterOtp;