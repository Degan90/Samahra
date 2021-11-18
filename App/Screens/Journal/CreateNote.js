/****************************************************************
 * Create note screen for user to type their responses and ideas from
 * Daily Article or in general. User will be able to save their
 * journal on to the app or phone. 
 ****************************************************************/
 import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
 import {StyleSheet, View, TextInput, KeyboardAvoidingView, 
    TouchableOpacity, Platform, Text, Dimensions} from 'react-native'
 import { globalStyles } from '../../Styles/global'

 export default function CreateNote() {
     const [note, setNote] = useState("")
     const navigation = useNavigation(); 

     const saveNote = async()=> {
         const value = await AsyncStorage.getItem("NOTES")
         const n = value ? JSON.parse(value) : []; 
         n.push(note)
         await AsyncStorage.setItem("NOTES", JSON.stringify(n)).then(()=> 
         navigation.navigate("Journal"))
         setNote("")
     }

     return (
     <View style = {globalStyles.container}>
         <View style = {createNoteStyle.container}>
            <TextInput 
            placeholder={'Add reflection or note'}
            value={note}
            onChangeText={setNote}
            style={{color: "black", fontSize: 22}}
            multiline = {true}
            autoFocus
            selectionColor='black'
            />
         </View>

         <KeyboardAvoidingView behavior={Platform.OS == 'ios'? 'padding': 'height'} style = {globalStyles.container}>
            <TouchableOpacity style={[globalStyles.button, createNoteStyle.jButton]} onPress={saveNote}>
                <Text style ={globalStyles.textTitle}>Save Note</Text>
            </TouchableOpacity>
         </KeyboardAvoidingView>
     </View>
     )
 }
 
 const createNoteStyle = StyleSheet.create({
     container: {
         padding: 30, 
         paddingTop: 100, 
         width: Dimensions.get('window').width, 
     },
    // Specific style for Journal Button
    jButton: {
        position: 'absolute',
        bottom:70,
        left:145,
      }
     
 })