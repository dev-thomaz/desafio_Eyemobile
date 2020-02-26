import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home'
import Comprovante from './screens/Comprovante'

const AppNavigator = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions: {
            headerShown: false,
        }
    },
    Comprovante:{
        screen: Comprovante,
        navigationOptions: {
            headerShown: false,
        }
    }

})

export default createAppContainer(AppNavigator);
