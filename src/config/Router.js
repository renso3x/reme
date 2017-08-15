import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Main from '../containers/Main';

const AppNavigator = StackNavigator({
    main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
});

 export default AppNavigator;