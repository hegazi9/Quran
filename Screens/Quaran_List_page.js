
import React ,{Component} from 'react';
import {StyleSheet,View,Text  ,  ActivityIndicator , FlatList  , ScrollView} from 'react-native';
import { Icon  } from 'native-base';
import axios from 'axios';
import Headroom from 'react-native-headroom';

const colors= [
  'white','#CCD1D1'
];

class Quaran_List_page extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
          itemsAxios : [] , isloading : true , Translate : '' , Macca : '' , English_Name : '' ,  Name : ''
          , Aya : '' , head : ''
          
        }
        
    }
  

    componentDidMount()
    {
      const Index = this.props.navigation.getParam('Index')
      const English_Name = this.props.navigation.getParam('English_Name')
      const Macca = this.props.navigation.getParam('Macca')
      const Translate = this.props.navigation.getParam('Translate')
      const Name = this.props.navigation.getParam('Name')
      
     //alert(Index)
      
    axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani')
      .then( (response) => {  
     // console.log(response.data.data.surahs[Index-1].ayahs.number)
     // console.log(response.data.data.surahs[Index].ayahs.length); 
      this.setState({
       itemsAxios   : response.data.data.surahs[Index-1].ayahs  ,
       Aya :  response.data.data.surahs[Index-1].ayahs.length ,  
       isloading : false , Macca : Macca , 
       Name : Name , Translate : Translate  , English_Name : English_Name 
      })
      }).catch((e)=>
        {
          console.log(e.message)
        })
      }
  
  static navigationOptions = { header : null }
  /*   static navigationOptions = navigationData =>
    {
      const Name = navigationData.navigation.getParam('Name')
    
        return {
          headerTitle :  '' ,  headerStyle: {
          
          backgroundColor: '#1E8449',
        },
        
        headerLeft : <Icon name="arrowleft" type = "AntDesign" style={{color: 'white' , margin : 10 , fontSize : 25 }}  
         onPress = {() => 
          {
            navigationData.navigation.navigate('Quaran_List_screen');
           }}/>
          }
    
        }
  */
  render ()
  { 
    const Name = this.props.navigation.getParam('Name')
    const header = (
      <View style={{backgroundColor: '#1E8449', flexDirection : 'row'}}>
    <Icon name="arrowleft" type = "AntDesign" style={{color: 'white' , margin : 10 , fontSize : 25 }}  
         onPress = {() => 
          {
            this.props.navigation.navigate('Quaran_List_screen');
           }}/>
      <Text style = {{ color : 'white' , marginLeft : '15%' , fontSize : 20 , marginTop : 10 }}>{Name}</Text>
    
      </View>
    )
    return (
    this.state.isloading
    ?
    <View style={{ flex : 1 , alignItems : 'center' , justifyContent : 'center'}}> 
    <ActivityIndicator size = "large" animating  color = 'green'/>
    </View>
    :
            
              <View style = {styles.container}>
                              <Headroom
                          style={[styles.screen]}
                          headerComponent={ header }
                          ScrollableComponent={ScrollView}
                          headerHeight={ 120 }
                          slideDuration = {100}
                          scrollEventThrottle={ 80 }
                        >         
                      <Text style={{ fontSize : 24  , marginRight : '30%' } }>{this.state.Name}</Text>
                      <Text style={{ fontSize : 16 , marginTop : 5 , marginLeft : '40%' ,  }}>{this.state.Translate}</Text>
                      
                      <View style ={{ flexDirection : 'row' , marginTop : 10 , marginBottom : 5 }}>
                      <Text style={{ fontSize : 18 , marginLeft : '10%'}}>{this.state.Macca}</Text>
                      <Text style={{ fontSize : 18 , marginLeft : '40%'}}>Ayahs : {this.state.Aya}</Text>  
                      </View>
                      
                    
                      <FlatList  data={this.state.itemsAxios}  keyExtractor={(item, index) => index.toString()}
                      renderItem={({item , index}) =>  
                    <View  style={{backgroundColor: colors[index%colors.length] ,
                      marginTop : 5 ,padding : 10 , height : 250 }}> 
                    <View style = {{ flexDirection : 'row'}}>
                    <Text style={{ fontSize : 15 }} > {item.number} </Text>
                    <Icon name="ellipsis1" type = "AntDesign" style={{color: 'grey' , marginTop : -10
                  ,  marginLeft : '80%' , fontSize : 25 }}/>
                    </View>

                    <Text style={{ fontSize : 20  , margin : 10}} > {item.text} </Text>
                    </View>
                      }/>
                       
                       </Headroom>
      </View>
    )
    }


}
export default  Quaran_List_page;

const styles = StyleSheet.create({
 
  container :
  {
     flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'white' , 
  } ,
  img :
  {
      width : '100%' , height : '400'
  },
  header: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen : {
    flex : 1
  }
});
