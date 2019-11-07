import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import {Icon,Card} from 'react-native-elements';
import ElevatedView from 'react-native-elevated-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class EditProfile extends Component{
render(){
return(
<View style={styles.container}>
<ElevatedView
elevation={3}

style={styles.stayElevated}>
<Image
source={require('../img/edit-profile.png')}
style={{width:wp('26%'), height:hp('16%'), borderRadius:50,position:'absolute',top:-40}}
/>
<View style={{marginTop:100,}}>
<View style={{flexDirection:'row',borderBottomWidth:1,width:wp('80%'),paddingTop:20}}>
<Icon name='user' type='antdesign'/>
<Text style={styles.input}>Test Name</Text>
</View>
<View style={{flexDirection:'row',borderBottomWidth:1,paddingTop:20}}>
<Icon name='mobile1' type='antdesign'/>
<Text style={styles.input}>9334433334</Text>
</View>
<View style={{flexDirection:'row',borderBottomWidth:1,paddingTop:20}}>
<Icon name='mail-read' type='octicon'/>
<Text style={styles.input}>  example@mail.com</Text>
</View>
</View>
</ElevatedView>
<TouchableWithoutFeedback>
<View style={styles.bottomView}>
<Text>SAVE</Text>
</View>
</TouchableWithoutFeedback>

</View>

);

}
}

export default EditProfile;

const styles=StyleSheet.create({
container: {
flex:1,
alignItems:'center',
},

stayElevated: {
width:wp('90%'),
height:hp('40%'),
marginTop:60,
marginBottom:20,
backgroundColor: 'white',
alignItems:"center",
borderRadius:10
},
stayElevated1: {
width: 150,
height: 90,
margin: 10,
alignItems:"center",
backgroundColor: 'white',
borderRadius:10

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

input:
{
paddingTop:10,
paddingLeft:10
},
   bottomView:{

      width: '100%',
      height: 50,
      backgroundColor: '#ffc44d',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom:0
    },

});