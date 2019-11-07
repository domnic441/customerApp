import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableWithoutFeedback,Button,TextInput,AsyncStorage} from 'react-native';
import {Icon,Card} from 'react-native-elements';
import ElevatedView from 'react-native-elevated-view'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Modal from "react-native-modal";

class Profile extends Component{
 static navigationOptions = {
    header: null
  };
    state = {
      visibleModalId: null,
    };
   toggleModal = () => {
       this.setState({ isModalVisible: !this.state.isModalVisible });
     };

 logout = async () => {
       AsyncStorage.clear()
       this.props.navigation.navigate('Login');
       }

render(){
return(
<View>
<View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
<Text style={{fontSize:22,fontWeight:'bold',color:'black'}}>Manage Your Account</Text>
<Icon name='logout' type='simple-line-icon' onPress={()=>this.logout()}/>
</View>

<View style={styles.container}>
<ElevatedView
elevation={3}

style={styles.stayElevated}>
<Image
source={require('../img/create-profile.png')}
style={{width:wp('26%'), height:hp('16%'), borderRadius:50,position:'absolute',top:-40}}
/>
<View style={{flexDirection:'column',paddingTop:85,alignItems:'center'}}>
<Text style={{fontSize:hp('2.5')}}>Test name</Text>
<Text>+91986644554</Text>
<Text>example@gmail.com</Text>
</View>
<View style={{flexDirection:'row',marginTop:30,height:'20%',borderTopWidth:1,}}>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('EditProfile')}>
<Text style={{borderRightWidth:1,fontSize:15,width:'50%',borderColor:'gray',textAlign:'center',paddingTop:10}}>Edit profile</Text>
</TouchableWithoutFeedback>
<View style={styles.container1}>
<Modal  isVisible={this.state.visibleModal === 'fancy'}
                   animationIn="zoomInDown"
                   animationOut="zoomOutUp"
                   animationInTiming={600}
                   animationOutTiming={600}
                   backdropTransitionInTiming={600}
                   backdropTransitionOutTiming={600}>
         <View style={styles.content}>
               <Text style={{fontSize:hp('2.7%'),fontWeight:'bold',paddingLeft:20}}>Change Password</Text>
              <View style={{flexDirection:'column',padding:20}}>

               <TextInput style={{borderBottomWidth:1}} placeholder='Current Password'/>
               <TextInput style={{borderBottomWidth:1}} placeholder='New Password'/>
               <TextInput style={{borderBottomWidth:1}} placeholder='Confirm New Password'/>
                </View>
               <View style={{flexDirection:'row',justifyContent:'flex-end',paddingRight:20}}>
               <TouchableWithoutFeedback
                 onPress={() => this.setState({ visibleModal: null })}
               >
               <Text style={{fontSize:hp('2.4%'),color:'red',paddingRight:40}}>CANCEL</Text>
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback
                onPress={() => this.setState({ visibleModal: null })}
                      >
             <Text style={{fontSize:hp('2.4%'),color:'green'}}>SAVE</Text>
                 </TouchableWithoutFeedback>
             </View>
            </View>

        </Modal>
              </View>
<TouchableWithoutFeedback  onPress={() => this.setState({ visibleModal: 'fancy' })} >
<Text style={{borderLeftWidth:1,fontSize:15,width:'50%',borderColor:'gray',textAlign:'center',paddingTop:10}}>Change password</Text>
</TouchableWithoutFeedback>
</View>
</ElevatedView>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('Rewards')}>
<ElevatedView
elevation={3}

style={styles.stayElevated1}>
<View style={{flexDirection:"row",marginTop:15}}>
<Icon size={50} name='gift' type='antdesign' />
<View style={{flexDirection:"column",paddingLeft:20}}>
<Text>Rewards</Text>
<Text>150</Text>
<Text>coins</Text>
</View>
</View>
</ElevatedView>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('WalletBalance')}>
<ElevatedView

elevation={3}
style={styles.stayElevated1}>
<View style={{flexDirection:"row",marginTop:15}}>
<Icon size={50} name='wallet' type='simple-line-icon'/>
<View style={{flexDirection:"column",paddingLeft:20}}>
<Text>Wallet</Text>
<Text>150</Text>
<Text>INR</Text>
</View>
</View>
</ElevatedView>
</TouchableWithoutFeedback>
</View>

<View style={{flexDirection:'row',alignItems:'center'}} >
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('FavouriteHotel')}>
<View style={styles.box}>
<Text style={styles.bottomText}>Favorites</Text>
<Icon size={18} name='hearto' type='antdesign' iconStyle={styles.icon}/>
</View>
</TouchableWithoutFeedback>

<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('SavedAddress')}>
<View style={styles.box}>
<Text style={styles.bottomText}>Addresses</Text>
<Icon size={18} name='location-pin' type='simple-line-icon' iconStyle={styles.icon}/>
</View>
</TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('PaymentMethod')}>
<View style={styles.box}>
<Text style={styles.bottomText}>Payments</Text>
<Icon size={18} name='wallet' type='simple-line-icon' iconStyle={styles.icon}/>
</View>
</TouchableWithoutFeedback>
</View>


</View>
</View>

);

}
}

export default Profile;

const styles=StyleSheet.create({
container: {


alignItems:'center'
},

stayElevated: {
width:wp('90%'),
height: 220,
marginTop:30,
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
icon:{
marginTop:10
},
modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
 content: {
    backgroundColor: 'white',
    padding:10,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height:hp('40%'),
  },
   container1: {
     flex:1,
      backgroundColor: 'white',
    },
    link: {
    		flex:1,
    		fontSize:hp('2.3%'),
    		paddingLeft: 15,
    		color:'black',
    		textAlign: 'left',
            borderBottomWidth:1,
            paddingTop:20
    	},
});