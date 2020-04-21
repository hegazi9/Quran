
import React ,{Component} from 'react';
import {StyleSheet,View,Text, Button , Platform , PermissionsAndroid , requestMultiple} from 'react-native';
import { Icon  } from 'native-base';

class Stats extends Component 
{
    constructor(props)
    {
        super(props);

        
    }
  

  render ()
  {
    return (
      <View style = {styles.container}>
        <Text>Empty Page</Text>
      </View>
    )
    }


}
export default  Stats;

const styles = StyleSheet.create({
 
  container :
  {
     flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : '#F5FCFF'
  } ,
  img :
  {
      width : '100%' , height : '400'
  }

});
