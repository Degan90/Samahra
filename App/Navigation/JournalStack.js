/****************************************************************
 * This will be the only stack navigation. When the user is done 
 * reading there Daily Article Feed a button will allot them to 
 * navigate to the Journal screen. This is the navigation between 
 * Daily Articla and Journal
*****************************************************************/

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Journal from '../Screens/Journal/Journal';
import CreateNote from '../Screens/Journal/CreateNote'; 
import Note from '../Screens/Journal/Note'; 

// The navigation stack for Daily Article (Home page)
const Stack = createNativeStackNavigator(); 

// This export function is the configuration of how a user 
// navigates from Daily Article to Journal
const JournalStack = ()=> {
    return (
            <Stack.Navigator screenOptions={{headerShown: false,}}>
                <Stack.Screen name="Journal" component={Journal}/>
                <Stack.Screen name="Create Note" component={CreateNote}/>
                <Stack.Screen name="Note" component={Note}/>
            </Stack.Navigator>
    )
}

export{JournalStack}