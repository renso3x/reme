import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from './common';
import styles from './styles/InterventionStyles';

function Interventions({
    name,
    minutes,
    isActive
}) {
    return (
        <View style={styles.container}>
            <Button>
                <View style={[styles.optionContainer, isActive && styles.activeOption]}>
                    <Text style={styles.minuteText}>{minutes}</Text>
                </View>
            </Button>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default Interventions;