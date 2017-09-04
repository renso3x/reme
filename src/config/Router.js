import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import About from '../containers/About';
import Main from '../containers/Main';
import Play from '../containers/Play';

const AppNavigator = StackNavigator({
    main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    about: {
        screen: About,
        navigationOptions: {
            header: null
        }
    },
    play: {
        screen: Play,
        navigationOptions: {
            header: null
        }
    },
});

 export default AppNavigator;