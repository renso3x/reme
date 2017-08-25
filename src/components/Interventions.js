import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button } from './common';
import styles from './styles/InterventionStyles';
import Base from '../metrics/Base';

function Interventions({
    name,
    minutes,
    isActive,
    longName
}) {
    if (!longName) {
        return (
            <View style={styles.container}>
                <Button style={styles.btnContainer}>
                    <View style={[styles.optionContainer, isActive && styles.activeOption]}>
                        <Text style={[styles.minuteText,  isActive && styles.activeName]}>{minutes}</Text>
                    </View>
                </Button>
                <Text style={styles.name}>{name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Button style={Base.mt10}>
                <View style={[styles.optionContainer, isActive && styles.activeOption]}>
                    <Text style={[styles.minuteText,  isActive && styles.activeName]}>{minutes}</Text>
                </View>
            </Button>
             <View style={Base.mt10}>
                <Text style={styles.name}>TIME TO</Text>
                <Text style={styles.name}>YOURSELF</Text>
            </View>
        </View>
    )
}

export default Interventions;