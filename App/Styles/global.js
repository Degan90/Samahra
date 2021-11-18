/****************************************************************
 * Global.js holds all commmon styles through out each screen. 
 * For example the same style for all titles, headers, buttons in
 * each screen. More can be added if more than one screen shares 
 * the same style.  
 ****************************************************************/

import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    //Common container Style
    container: {
        flex: 1,
    },
    //Text Styles
    textTitle: { 
        fontSize: 24,
        fontFamily: 'Quicksand-Light', 
    },
    // Paragraph Styles
    paragraph:{
        marginVertical: 8, 
        lineHeight: 20, 
    }, 

    //Navigation Header Background Styles
    navHeaderStyle: {
        backgroundColor: '#bdba9c',
    },
    //Navigation Header Title Styles
    navHeaderTitleStyle: {
        fontFamily: 'AlexBrush-Regular',
        fontSize: 32,
        color: 'white', 
    },
    // Navigation Drawer Style
    navDrawerStyle: {
        backgroundColor:'#9F9867',
    },
    //Button Styles
    button: {
        borderRadius:10,
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#9F9867',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 13},
    }
})