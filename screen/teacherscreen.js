import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

    export default class Teacherscreen extends Component{
        constructor(){
            super()
            this.state={
                subject:'',
                homework:'',
            }
        }
        dispalyData=async()=>{
            alert("homework assigned")
db.collection('Teacher').update({
    'Subject':this.state.subject,
    'Homework':this.state.homework
})

            this.setState({
                subject:'',
                homework:''
            })
        }
        render(){
            return(
<View> 
    <TextInput
    placeholder='enter subject name'
maxLength={12}
onChangeText={(text)=>{
    this.setState({
        subject:text
    })
}}
    >
</TextInput>

<TextInput
    placeholder=' assign homework'
multiline={true}
onChangeText={(text)=>{
    this.setState({
        homework:text
    })
}}
    >
</TextInput>

<TouchableOpacity 
onPress={()=>{
    this.dispalyData()
}}
>
<Text>Assign Homework</Text>
</TouchableOpacity>
</View>
            ) }
        
    }