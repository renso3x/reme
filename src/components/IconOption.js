import React from 'react';
import { View, Image } from 'react-native';
import { Button } from './common';
import iconstyles from './styles/IconOptionsStyle';

function IconOption({ 
    name,
    imgName, 
    isActive, 
    onPress,
    styles
}) {
    let activeIcon = isActive === name ? iconstyles.activated : iconstyles.defaultColor;
    return (
        <Button style={styles} onPress={onPress}>
            <View style={styles}>
                <Image source={imgName} style={activeIcon} />
            </View>
        </Button>
    );
}

export default IconOption;