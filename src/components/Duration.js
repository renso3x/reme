import React from 'react';
import { View, Text } from 'react-native';
import Base from '../metrics/Base';
import Fonts from '../metrics/Fonts';
import styles from './styles/SubHeading';
import Interventions from './Interventions';

function Duration() {
    return (
        <View>
            <View style={styles.subContainer}>
                <View style={styles.hr} />
                <View style={Base.ph20}>
                    <Text style={styles.subText}>Duration</Text>
                </View>
                <View style={styles.hr} />
            </View>
            <View style={styles.optionContainer}>
                <Interventions
                    name={'BREATHE'}
                    minutes={2}
                    isActive
                />
                <Interventions
                    name={'RECHARGE'}
                    minutes={5}
                />
                <Interventions
                    name={'TIME TO YOURSELF'}
                    minutes={20}
                    longName
                />
            </View>
        </View>
    );
}

export default Duration;