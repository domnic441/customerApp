import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import string from '../common/api'
import DeviceInfo from 'react-native-device-info';
export default class Restaurant extends Component {
constructor(){
super()
this.state = {
    data: [],
   interval:'',

  };
}
componentDidMount() {
 this.fetchData();
}

  fetchData(){
  let collection={
  id:1482,
  device_id:DeviceInfo.getUniqueID(),
  restaurant_id:146
  }
    fetch( string.HTTP+"/restaurant",{
    method:'POST',
    body:JSON.stringify(collection),
    headers: {
       'Accept': 'application/json, text/plain, */*',  // It can be used to overcome cors errors
         'Content-Type': 'application/json'
          }
          })
   .then(r => r.json())
   .then(r => {
     const data = r.reduce((r,s) => {
       r.push({title:s.cuisines_name,data:s.menu});
       return r;
     }, []);

     this.setState({ data });
   });

  };



        render() {
          return (

          <View  style={ styles.textContainer }>
      <SectionList
      renderItem={({item, index, section}) => <Text key={index}>{item.menu_name}</Text>}
      renderSectionHeader={({section: {title}}) => (
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
      )}
      sections={this.state.data}
      keyExtractor={(item, index) => item + index}
/>

         </View>

          );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});
