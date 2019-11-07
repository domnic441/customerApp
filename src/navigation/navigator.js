import React, { Component } from "react";
import {StyleSheet,View,Text,Button,TouchableWithoutFeedback,As} from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator,HeaderBackButton } from 'react-navigation-stack';
import { createBottomTabNavigator,createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Login from '../screens/login'
import SignUp from '../screens/signup'
import AuthLoading from '../screens/authloading'
import Home from '../screens/home'
import Filter from '../screens/filter'
import Cart from '../screens/cart'
import Orders from '../screens/orders'
import Profile from '../screens/profile'
import PastOrders from '../screens/pastOrders'
import ResetPassword from '../screens/resetPassword'
import OrderInvoice from '../screens/orderInvoice'
import EditProfile from '../screens/editProfile'
import EnterOtp from '../screens/enterOtp'
import EmptyCart from '../screens/emptyCart'
import Rewards from '../screens/rewards'
import RestaurantsNearYou from '../screens/restaurantsNearYou'
import Restaurant from '../screens/restaurant'
import ScheduleOrder from '../screens/scheduleOrder'
import WalletBalance from '../screens/walletBalance'
import SavedAddress from '../screens/savedAddress'
import SearchLocation from '../screens/searchLocation'
import PaymentMethod from '../screens/paymentMethods'
import FavouriteHotel from '../screens/favouriteHotel'
import {Icon,Badge} from 'react-native-elements';
import RBSheet from "react-native-raw-bottom-sheet";



const topNavigator= createMaterialTopTabNavigator({

PastOrders:{

  screen:PastOrders,

},
Upcoming:{

  screen:Orders,

}
},
{
    tabBarPosition: 'top',
    swipeEnabled:false,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'black',
      style: {
        backgroundColor: '#ffc44d',
      },
      labelStyle: {
        fontWeight:'bold',
        color:'black',
        fontSize:hp('2%'),

      },
      indicatorStyle: {
        borderBottomColor: 'black',
        borderBottomWidth: 3,
         width:wp('50%'),
      },
    },
  }

);
const AuthStack= createStackNavigator({
Login:{
screen:Login
},
SignUp:{
screen:SignUp
},
 ResetPassword:{
   screen:ResetPassword,
   },
EnterOtp:{
   screen:EnterOtp,
   },
},
{
   defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: '#ffc44d',
         },
        }
  }
  );


const HomeStackNavigator = createStackNavigator({
 Home:{
 screen:Home
 }  ,
OrderInvoice:{
  screen:OrderInvoice,
   },

EmptyCart:{
   screen:EmptyCart,
    },

RestaurantsNearYou:{
   screen:RestaurantsNearYou,
    },
  Restaurant:{
     screen:Restaurant,
      },
 ScheduleOrder:{
    screen: ScheduleOrder,
    },
 SearchLocation:{
    screen:SearchLocation,
    },
  },
{
   defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: '#ffc44d',
         },
        }
  }
);

HomeStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};


/*HomeStackNavigator.navigationOptions = ({ navigation }) => {

    let tabBarVisible = true;

    let routeName = navigation.state.routes[navigation.state.index].routeName

    if ( routeName == 'Cart'||'OrderInvoice'||'EditProfile'||'ResetPassword' ) {
        tabBarVisible = false
    }

    return {
        tabBarVisible,
    }
}*/
const CartStack=createStackNavigator({
Cart:{
screen:Cart,
navigationOptions: ({navigation}) => ({ //don't forget parentheses around the object notation
        title: 'Cart',
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
      })
},
},
{
   defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: '#ffc44d',
         },
        }
  }

 );


 const ProfileStack=createStackNavigator({
 Profile:{
 screen:Profile
 },
 SavedAddress:{
       screen:SavedAddress,
        },
 EditProfile:{
   screen:EditProfile,
    },
 Rewards:{
        screen:Rewards,
       },
  WalletBalance:{
        screen:WalletBalance,
        },
  FavouriteHotel:{
          screen:FavouriteHotel,
          },
   PaymentMethod:{
            screen:PaymentMethod,
             },

},
{
   defaultNavigationOptions: {
         headerStyle: {
           backgroundColor: '#ffc44d',
         },
        }
  }
);
ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
const CartIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={4} />;
};

class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size,type } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Icon name={name} type={type} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: "absolute",
              right: -6,
              top: -3,
              backgroundColor: "red",
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
{
Home:{
screen:HomeStackNavigator,
},
Filter: { screen: Filter,
navigationOptions:{
tabBarIcon: ({ tintColor }) => (
<View>
<Icon style={[{color: tintColor}]} size={25} name='filter' type='antdesign'
onPress={() => {this.RBSheet.open();}} />
<View>
<RBSheet
ref={ref => {
this.RBSheet = ref;
}}
height={400}
>
<View style={{position:'absolute' ,right:10,top:10}}>
<Icon name='close' type='antdesign' onPress={() => {this.RBSheet.close();}}/>
</View>
<Filter />

</RBSheet>
</View>
</View>
)
}
},
Cart:{
screen:CartStack,
navigationOptions:{
tabBarVisible:false,

}
},
Orders: {
screen:topNavigator,
},
Profile: {
screen: ProfileStack,
},
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        let type;
        if (routeName === "Home") {
          iconName = "home";
          type = "antdesign";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.

        } else if (routeName === "Profile") {
          iconName = "user";
          type = "antdesign";
        }
        else if (routeName === "Cart") {
                  iconName = "shopping-bag";
                  type = "feather";
                  IconComponent = CartIconWithBadge;
                }
         else if (routeName === "Orders") {
                           iconName = "profile";
                           type = "antdesign";
                         }

        // You can return any component that you like here!
        return <IconComponent name={iconName} type={type} size={25} color={tintColor} />;
      }
    }),
      tabBarOptions: {
         activeTintColor: '#ffc44d',
         inactiveTintColor: 'gray',

       },
  }

);

const SwitchNavigator= createSwitchNavigator({
AuthLoading:AuthLoading,
Auth:AuthStack,
Home:TabNavigator
});

export default createAppContainer(SwitchNavigator)