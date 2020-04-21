import React  from 'react' ;
import { Dimensions , View , Text,  Image,  ImageBackground, Alert }  from 'react-native' ;

import { createAppContainer } from 'react-navigation' ;
import { createBottomTabNavigator } from 'react-navigation-tabs' ;
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator  } from 'react-navigation-stack';
import Quaran_List_screen from '../Screens/Quaran_List_screen' ;
import Quaran_List_page from '../Screens/Quaran_List_page' ;
import Stats from '../Screens/Stats' ;


import { Icon  } from 'native-base';


const Navigator = createStackNavigator({
   
    Quaran_List_screen : 
    {
        screen : Quaran_List_screen , 
    } ,
    Quaran_List_page : 
    {
        screen : Quaran_List_page , 
    } ,
   
  });

const BottomTabNavigator = createBottomTabNavigator({
    Quran : { screen : Navigator ,  navigationOptions : 
        { 
             tabBarIcon : ( (tabInfo) =>{ return (
                <Icon name="book-open" type = "SimpleLineIcons" style={{color: 'white' , fontSize : 30 , marginTop : 5}}   />
               )}) ,               
        },
    },
    Stats : 
    {
        screen : Stats  , navigationOptions : 
        {
             tabBarIcon : ( () =>{ return (
                <Icon name="ios-stats" type = "Ionicons" style={{color:  'white' , marginTop : 5 ,  fontSize : 40 }}   />
               )}) , 
              
        },
         
    },
  
} , {
    
    tabBarOptions: {
        
        style: { backgroundColor: '#1E8449'  , borderTopColor : '#1E8449' , height  : 60 , } ,
        showIcon:  true,
        inactiveTintColor: 'grey',
        activeTintColor: 'white' ,
        labelStyle: {
            fontSize: 18,
          },
        } ,
          
});

const MainNavigator  = createDrawerNavigator({
   
    Quran : {
        screen : BottomTabNavigator  ,  navigationOptions : {
            
        }}  , 
   
    
} , {
    backBehavior : "initialRoute" , drawerType : "slide"  , drawerPosition : 'left'  ,
    drawerWidth: Dimensions.get('window').width - 120, statusBarAnimation : "fade" ,  
 
});


export default createAppContainer( MainNavigator );

