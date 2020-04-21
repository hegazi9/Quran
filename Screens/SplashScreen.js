import React , { Component } from 'react' ;
import {View , Image ,  StyleSheet  , Text  } from 'react-native' ;

class SplashScreen extends Component {
        
  constructor (props)
  {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    return (
      <View style = {{ backgroundColor : 'white' , flex : 1 , justifyContent  : 'center' , alignItems : 'center'}}> 
      <Text style = {{color : '#1E8449' , fontSize : 35  }}>Quaran</Text>
      </View>
      
              );
  }
}

export default SplashScreen ; 





