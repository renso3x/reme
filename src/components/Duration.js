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
                    name={'RE-FRAME'}
                    minutes={2}
                />
                <Interventions
                    name={'RE-FRESH'}
                    minutes={5}
                />
                <Interventions
                    name={'RE-JUVENATE'}
                    minutes={20}
                />
            </View>
        </View>
    );
}

export default Duration;