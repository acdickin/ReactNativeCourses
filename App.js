import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import ReactCourses from './src/views/ReactCourses'
import NativeCourses from './src/views/NativeCourses'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  render() {
    return (
      <Nav/>
    );
  }
}
const Nav = createBottomTabNavigator({
  ReactCourses:{
    screen:ReactCourses,
    navigationOptions:{
      title:'React Courses',
      tabBarIcon:({focused, tintColor})=>{
        const iconName = 'desktop'
       return <Icon name={iconName} color={tintColor} size={20}/>
      }
    }
  },
  NativeCourses:{
    screen:NativeCourses,
    navigationOptions:{
      title:'React Native Courses',
      tabBarIcon:({focused, tintColor})=>{
         const iconName = "mobile-phone"
         console.log(iconName)
         return <Icon name={iconName} color={tintColor} size={30}/>
      }
    }
  }
},{
  tabBarOptions:{
    inactiveTintColor:'#000',
    activeTintColor :'#717',
    labelStyle:{
      fontSize:14
    },
  },
  style:{
    backgroundColor: 'blue',
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
