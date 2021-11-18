/****************************************************************
 * Journal screen for user to type have all the journals organized from
 * Daily Article or in general. 
 ****************************************************************/
 import AsyncStorage from '@react-native-async-storage/async-storage'
 import React, { useState } from 'react'
 import { useNavigation, useFocusEffect } from '@react-navigation/native';
 import {StyleSheet, View, TextInput, KeyboardAvoidingView, 
     TouchableOpacity, Platform, Text, Dimensions, FlatList} from 'react-native'
 import { globalStyles } from '../../Styles/global'
 
  export default function Note({route}) {
      const [notes, setNotes] = useState([])
      const {singleNote} = route.params
      const navigation = useNavigation(); 
 
     useFocusEffect(
         React.useCallback(() => {
             getNotes() 
         }, [])
     )
 
     const getNotes = () => {
         AsyncStorage.getItem("NOTES").then((notes) => {
             console.log('Note screen', notes)
             setNotes(JSON.parse(notes))
         }); 
     }

     const deleteNote = async() => {
         const newNotes = await notes.filter((note) => note !== singleNote)
         await AsyncStorage.setItme("NOTES", JSON.stringify(newNotes)).then(()=> 
         navigation.navigate("Journal"))
     }
 
      return (
      <View style = {globalStyles.container}>
        <Text category = 'h1'>
            Notes
        </Text>

        <Text style = {{fontSize: 22, margin: 20}}>
            {singleNote}
        </Text>

        <View>
            <TouchableOpacity style={[globalStyles.button, createNoteStyle.jButton]} onPress={deleteNote}>
                <Text style ={globalStyles.textTitle}>Delete Note</Text>
            </TouchableOpacity>
        </View>

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