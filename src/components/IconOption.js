import React from 'react';
import { View, Image } from 'react-native';
import { Button } from './common';

function IconOption({ 
    name, 
    active, 
    onPress,
    styles
}) {
    return (
        <Button style={styles}>
            <View style={styles}>
                <Image source={name} />
            </View>
        </Button>
    );
}

export default IconOption;