import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StuScreen from "./screen/stuscreen";
import TeacherScreen from "./screen/TeacherScreen";


export const TabNavigator = createBottomTabNavigator({
  StuScreen : {
    screen:stuscreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Books",
    }
  },
  TeacherScreen: {
    screen: teacherscreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Book Request",
    }
  }
});