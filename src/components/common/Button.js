import React from 'react';
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

function Button({ 
    onPress,
    children,
    style
}) { 
    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={onPress}>
                {children}
            </TouchableNativeFeedback>
        );
    }
    return (
        <TouchableOpacity style={style} onPress={onPress}>{children}</TouchableOpacity>
    );
}

export { Button };