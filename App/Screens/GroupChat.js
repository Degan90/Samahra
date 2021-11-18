/**************************************************************
 * Group chat is the screen that will display all chats and 
 * messages in the user cohort. 
 **************************************************************/
import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { globalStyles } from '../Styles/global'

export default function GroupChat() {
    return (
    <View style = {globalStyles.container}>
        <Text style ={globalStyles.textTitle}>GroupChat</Text>
    </View>
    )
}
