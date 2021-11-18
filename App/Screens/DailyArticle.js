/****************************************************************
 * Dailty Article Screen where users read their content and 
 * swipe right to get the Journal button. From there the button 
 * will take them to the Journal Screen. 
 ****************************************************************/

import React from 'react'
import {StyleSheet, View,Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import { globalStyles } from '../Styles/global'

const win = Dimensions.get('window');

// Export Function that will be utilize in App.js to 
// display the Daily Article 
export default function DailyArticle({navigation}) {

    // This press handler allows Journal button 
    // to navigate to Journal screen
    const navigateToJournal = () => {
        navigation.navigate('Journal', {screen: "Create Note"})
        
    }
    return (   
    <View style = {globalStyles.container}>

        {/* Screen Image on top of screen */}
         <View style={{ height: '20%', backgroundColor: 'lightblue' }}>
            <Image style = {{
                flex: 1,
                height: '100%',
                width: '100%',
                }} 
            source= {require('../Assets/Images/Artwork-2.png')}
            resizeMode="cover"/>
         </View>


         {/* Journal button. Bstyle is for the button styles  */}
        <TouchableOpacity style={[globalStyles.button, dailyStyles.jButton]} onPress={navigateToJournal}>
            <Text style ={globalStyles.textTitle}>Journal</Text>
        </TouchableOpacity>
    </View>
    )
}

const dailyStyles = StyleSheet.create({
    // Specific style for Journal Button
    jButton: {
      position: 'absolute',
      bottom:70,
      left:145,
    }
})
