
import React ,{Component } from 'react';
import {StyleSheet,View,Text, Button   , FlatList, ActivityIndicator } from 'react-native';
import { Icon , Tab, Tabs ,TabHeading   } from 'native-base';
import axios from 'axios' ;
import { TouchableOpacity } from 'react-native-gesture-handler';



 class Quaran_List_screen extends Component   
{ 
  constructor(props)
  {
    super(props);
    this.state = {
      itemsAxios : [] , isloading : true
    }
  } 
 
  componentDidMount()
  {
  axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani')
    .then( (response) => {
    console.log(response.data.data);
    console.log(response.data.data.surahs[0].ayahs.length); 
    
    this.setState({
     itemsAxios   : response.data.data.surahs  ,
     isloading : false
    })
    }).catch((e)=>
      {
        console.log(e.message)
      })

    }


   static navigationOptions = navigationData =>
  {
      return {
      headerTitle : '' ,  headerStyle: {
        backgroundColor: '#1E8449', 
      },
      headerLeft : <Icon name="menu" type = "Entypo" style={{color: 'white' , margin : 10 , fontSize : 35 }}  
       onPress = {() => 
        {
          navigationData.navigation.openDrawer();
         }}/>
        }
  }

  render() {
    return (
      this.state.isloading
      ?
      <View style={{ flex : 1 , alignItems : 'center' , justifyContent : 'center'}}> 
      <ActivityIndicator size = "large" animating  color = 'green'/>
      </View>
      :
                  <View style = {styles.container}>
                              
                  <Tabs tabBarPosition = "top" tabContainerStyle = { { height : 60} }
                   tabBarUnderlineStyle = {{backgroundColor : '#1E8449' , height : 1}}>
                        
                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : '#FCF3CF' }}> 
                       <View style={{flexDirection : 'column'}}> 
                        <Text style = {{color : '#050505' , fontSize : 16 }}>Sura</Text>
                        </View>
                       
                        </TabHeading>}>
                        <View style = {styles.view}>
                      
                        <FlatList  data={this.state.itemsAxios}  keyExtractor={(item, index) => index.toString()}
                        renderItem={({item , index }) =>  
                     <TouchableOpacity 
                     onPress = {()=>{
                                             
                    this.props.navigation.navigate('Quaran_List_page' , {
                      'Index' : item.number , 'Name' : item.name , 'English_Name' : item.englishName ,
                      'Macca' : item.revelationType , 'Translate' : item.englishNameTranslation
                    })
                     }}>
                      <View style = {styles.card}> 
                      <Text style={{ fontSize : 15 }} > {item.name} </Text>
                      
                      <View style = {{ flexDirection : 'row'}}>
                      <Text style={{fontSize : 16 , marginTop : -15}} > {item.number} </Text>
                     
                      <View style = {{ flexDirection : 'column'}}>
                      <Text style={{ fontSize : 18 , marginLeft : 5 , marginTop : -20 , width : 120 }} > {item.englishName} </Text>
                      <Text style={{fontSize : 10 , marginLeft : 5  , width : 120}} > {item.englishNameTranslation} </Text>
                      </View>

                      <Text style={{fontSize : 14  , marginLeft : 35 , marginTop : -20}} > {item.revelationType} </Text>
                     
                      </View>
                     
                        </View> 
                        </TouchableOpacity>
                    
                          }/>
                        </View> 
                           </Tab>

                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : '#FCF3CF' }}> 
                       <View style={{flexDirection : 'column'}}> 
                        <Text style = {{color : '#050505' , fontSize : 16 }}>Page</Text>
                        </View>
                        
                        </TabHeading>}>
               
                        </Tab>


                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : '#FCF3CF' }}> 
                     <View style={{flexDirection : 'column'}}> 
                     <Text style = {{color : '#050505' , fontSize : 16}}>Juz</Text>
                    </View>
                        </TabHeading>}>
                    
                        </Tab>

                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : '#FCF3CF' }}> 
                 <View style={{flexDirection : 'column'}}> 
                        <Text style = {{color : '#050505' , fontSize : 16}}>Hizb</Text>
                      </View>
                        </TabHeading>}>
                        <View style = {styles.view}>
                        <Text>Hizb</Text>
                        </View> 
                        </Tab>

                         </Tabs>
                        </View>
                    )
                    }
                  }
                
const styles = StyleSheet.create({
 
  container :
  {
     flex : 1 , justifyContent : 'center' , alignItems : 'center' , backgroundColor : 'white'
  } ,
  img :
  {
      width : '100%' , height : '400'
  } ,
  card : 
    {
      borderRadius : 15 , backgroundColor : 'white' , marginTop : 5,
      padding : 10 , height : 80
    }
});

export default Quaran_List_screen ;



/**
 * 
 *   
        
            
            <Tabs tabBarPosition = "bottom" tabContainerStyle = { { height : 60} }
                   tabBarUnderlineStyle = {{backgroundColor : 'white' , height : 3}}>
                        
                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : '#1E8449' }}> 
                      <View style={{flexDirection : 'column'}}> 
                      
                      <Icon name="book-open" type = "SimpleLineIcons" style={{color: 'white',
                       fontSize : 30 }}   />
                       <Text style = {{ color : 'white'}}>Quran</Text>
                       
                                           </View>
                        </TabHeading>}>
                        </Tab>
  
                        <Tab 
                        heading={ <TabHeading style = {{backgroundColor : '#1E8449' }}> 
                       <View style={{flexDirection : 'column'}}> 
                       <Icon name="ios-stats" type = "Ionicons" style={{color:  'white' ,  fontSize : 35 }}   />
                        <Text style = {{ color : 'white'}}>State</Text>
                        </View>
                        
                        </TabHeading>}>
               
                        </Tab>
                         </Tabs>





                         <View style = {{ backgroundColor : '#CCD1D1' , flexDirection : 'row' , padding : 5 , 
                      borderRadius : 10 , marginTop : -450 }}>
                      <Icon name="book-open" type = "SimpleLineIcons" style={{color: 'black',
                       fontSize : 30 , marginLeft : 10 }}   />
                        <Text style = {{ color : '#050505' , fontSize : 18 , marginRight : 80}}>  Last Read : An-Nisa: 4 -10  </Text>
                      </View>
 */