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
    import firebase from 'firebase';

    import db from '../config';

    export default class Stuscreen extends Component{
        constructor(){
            super()
            this.state={
                subject:'',
                homework:'',
            }
        }
        dispalyData=async()=>{
            alert("homework submitted")
db.collection('Student').update({
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
    placeholder=' submit  your homework'
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
<Text>Submit</Text>
</TouchableOpacity>
</View>
            ) }
        
    }
    const styles = StyleSheet.create({

        
    })
    