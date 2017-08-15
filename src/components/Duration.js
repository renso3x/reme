import React from 'react';
import { View, Text } from 'react-native';
import Base from '../metrics/Base';
import Fonts from '../metrics/Fonts';
import styles from './styles/SubHeading';

function Duration() {
    return (
        <View style={styles.subContainer}>
            <View style={styles.hr} />
            <View style={Base.ph20}>
                <Text style={styles.subText}>Duration</Text>
            </View>
            <View style={styles.hr} />
        </View>
    );
}

export default Duration;