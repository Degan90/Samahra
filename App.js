/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'; 
import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './App/Navigation/Drawer/Drawer';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';


export default () => {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <DrawerNavigation/>
      </NavigationContainer> 
    </ApplicationProvider>
  ); 
};