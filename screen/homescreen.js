import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView} from 'react-native';


import db from '../config';
import firebase from 'firebase';

export default class Homescreen extends Component{
    render(){
        return(
            <View style={styles.container}>

<Image source={ 
require('../assets/student.png') }
style={{width:100,
height:100}}
/>   

            <TouchableOpacity style={styles.Student}>
<Text style={styles.StudentText}>
    Student 
</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Student}>
<Text style={styles.StudentText}>
    Teacher
</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Student:{

        backgroundColor:'blue',
        width:'70%',
        justifyContent:'center',
        marginLeft:70,
     alignItems:'center',
     height:50,
     borderRadius:20,
     borderWidth:4,

    },
    
        container:{
            flex:1,
            backgroundColor:'#000000',
            alignItems: 'center',
            justifyContent: 'center'
          },
          StudentText:{
color:'white',
alignText:'center',
fontSize:20,
fontWeight:'bold',
          },



})