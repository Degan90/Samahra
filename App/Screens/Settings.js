/****************************************************************
 * Settings screen that display typical setting options.(I.e 
 * profile, personal info, etc.)
 ****************************************************************/

import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { globalStyles } from '../Styles/global'

export default function Settings() {
    return (
    <View style = {globalStyles.container}>
        <Text>Settings</Text>
    </View>
    )
}
