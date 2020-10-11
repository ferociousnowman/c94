
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screen/WelcomeScreen";
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import Homescreen from "./screen/homescreen";
import StuScreen from "./screen/stuscreen";
import TeacherScreen from "./screen/TeacherScreen";
import TabNavigator from  "./components/tabnavigator";
export default  class App extends React.Component { 
  render(){

  
  return (
    
    <AppContainer/>
  );
}
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  Homescreen:{screen:Homescreen},
  stuscreen:{screen:StuScreen},
  teacherscreen:{screen:TeacherScreen},
tabnavigator:{screen:TabNavigator},
})
const AppContainer= createAppContainer(switchNavigator);

