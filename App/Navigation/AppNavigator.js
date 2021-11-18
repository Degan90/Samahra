import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Journal from '../Screens/Journal/Journal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DailyArticle from '../Screens/DailyArticle';
import GroupChat from '../Screens/GroupChat';
import DrawerNavigation from './Drawer/Drawer';
import { JournalStack } from './JournalStack';
import { ProfileScreen } from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();
function AppNavigator(props) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={DrawerNavigation} 
            options={{tabBarIcon:({color}) => (
                <Icon name="home" color={color} size={30} />
            ),
            headerShown: false
            }} />
            <Tab.Screen name="Group Chat" component={GroupChat} 
            options={{tabBarIcon:({color}) => (
                <Icon name="wechat" color={color} size={30} />
            )
            }} />
            <Tab.Screen name="Journal" component={JournalStack} 
            options={{tabBarIcon:({color}) => (
                <Icon name="book-variant-multiple" color={color} size={30} />
            )
            }} />
            <Tab.Screen name="account" component={ProfileScreen} 
            options={{tabBarIcon:({color}) => (
                <Icon name="account" color={color} size={30} />
            )
            }} />
        </Tab.Navigator>
 
    );
}

export default AppNavigator;