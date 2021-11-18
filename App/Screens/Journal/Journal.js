/****************************************************************
 * Journal screen for user to type have all the journals organized from
 * Daily Article or in general. 
 ****************************************************************/
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {StyleSheet, View, Text, Dimensions, FlatList} from 'react-native'
import { Divider, List, ListItem } from "@ui-kitten/components"
import { globalStyles } from '../../Styles/global'

 export default function Journal() {
     const [notes, setNotes] = useState([])
     const navigation = useNavigation(); 

    useFocusEffect(
        React.useCallback(() => {
            getNotes() 
        }, []) 
    )

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((n) => {
            setNotes(JSON.parse(n))
        }); 
    }


    const renderItem = ({ item, index }) => (
		<ListItem
			title={<Text category="h5">{item}</Text>}
			onPress={() =>
				navigation.navigate("Note", {
					singleNote: item
				})}
		/>
	)

    return (
     <View style = {globalStyles.container}>
         <Text style={createNoteStyle.title} category="h1">
				Notes
			</Text>
        <List
				style={createNoteStyle.lContainer}
				data={notes.reverse()}
				ItemSeparatorComponent={Divider}
				renderItem={renderItem}
			/>
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
    },
    lContainer: {
		fontSize: 20
	},
    title: {
		textAlign: "center",
		marginTop: 50
	},
     
 })