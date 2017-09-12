import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from './common';
import { Base } from '../metrics';
import styles from './styles/InterventionStyles';

function Interventions({
    name,
    minutes,
    isActive,
    onPress,
}) {
    let iconActiveText = isActive === minutes ? styles.activeOption : null;
    let iconActive = isActive === minutes ? styles.activeName : null;
    return (
        <View style={styles.container}>
            <Button style={styles.btnContainer} onPress={onPress}>
                <View style={[styles.optionContainer, iconActiveText]}>
                    <Text style={[styles.minuteText,  iconActive]}>{minutes}</Text>
                </View>
            </Button>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Interventions;