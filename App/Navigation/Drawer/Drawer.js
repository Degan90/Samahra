/*********************************************************************
 * This script is to control the navigation bewtween all screens. The
 * navigation is setup to where you can navigate to each screen via 
 * menu (drawer). The only case where you can navigate from one screen 
 * to another without proceeding with the menu(drawer) is from Daily
 * Articles screen to Journal. 
*********************************************************************/
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyles } from '../../Styles/global';
import DailyArticle from '../../Screens/DailyArticle';
import { JournalStack } from '../JournalStack';
import GroupChat from '../../Screens/GroupChat';
import Resources from '../../Screens/Resources';
import Settings from '../../Screens/Settings';


const RootDrawerNavigator = createDrawerNavigator();

export default function DrawerNavigation() {

  return (
     <RootDrawerNavigator.Navigator screenOptions = {{
                    headerShown: true,
                    headerTransparent: true,
                    headerTitleAlign: 'center',
                    headerTintColor: 'black', 
                    headerStyle: globalStyles.navHeaderStyle,
                    headerTitleStyle: globalStyles.navHeaderTitleStyle,
                    drawerStyle: globalStyles.navDrawerStyle, 
      }}
      >
      <RootDrawerNavigator.Screen name="Daily Article" component={DailyArticle} />
      <RootDrawerNavigator.Screen name="Journal" component={JournalStack}/>
      <RootDrawerNavigator.Screen name="GroupChat" component={GroupChat}/>
      <RootDrawerNavigator.Screen name="Resources" component={Resources} />
      <RootDrawerNavigator.Screen name="Settings" component={Settings} />
    </RootDrawerNavigator.Navigator>
  );
}
