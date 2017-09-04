import React from 'react';
import SplashScreen from 'react-native-smart-splash-screen';
import Root from './Router';

export default class App extends React.Component {
	componentDidMount () {
		SplashScreen.close({
			animationType: SplashScreen.animationType.scale,
			duration: 850,
			delay: 500,
		});
	}
	render() {
		return <Root />
	}
}