import React,{Component} from 'react';
import {View,Text,TextInput,TouchableWithoutFeedback} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ResetPassword extends Component{
render(){
return(
<View style={{flex:1,alignItems:'center',flexDirection:'column'}}>
<Text style={{padding:20,alignItems:'center'}}>Enter your registered mobile number or the email address.
You will receive an OTP to reset your password</Text>
<TextInput
style={{borderBottomWidth:1,width:wp('90%')}}
placeholder='email address or mobile number'
>
</TextInput>
<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EnterOtp')}>
<View style={{backgroundColor:'#ffc44d',width:wp('90%'),height:hp('6%'),marginTop:30,alignItems:'center',justifyContent:'center'}}>
<Text>SEND OTP</Text>
</View>
</TouchableWithoutFeedback>
<View style={{flexDirection:'column',alignItems:'center',paddingTop:15,paddingLeft:15,}}>
<View style={{flexDirection:'row'}}>
<Text style={{color:'black'}}>Have not received code yet ?</Text>
<Text style={{color:'green'}}> Resend Code</Text>
</View>
<Text style={{color:'black',paddingTop:20}}>If you dont have the registered mobile number,{"\n"}enter the mobile number you have ready</Text>
</View>
</View>

);}

}

export default ResetPassword;