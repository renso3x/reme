import React from 'react';
import { Image } from 'react-native';

function Icon({ 
	name, 
	style 
}) {
	return <Image source={name} style={style} />
}

export { Icon };