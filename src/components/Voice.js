import React from 'react';
import { View, Text } from 'react-native';
import Base from '../metrics/Base';
import Fonts from '../metrics/Fonts';
import Icons from '../metrics/Icons';
import styles from './styles/SubHeading';
import IconOption from './IconOption';
import iconStyles from './styles/IconOptionsStyle';

function Voice() {
    return (
        <View>
            <View style={styles.subContainer}>
                <View style={styles.hr} />
                <View style={Base.ph20}>
                    <Text style={styles.subText}>Voice</Text>
                </View>
                <View style={styles.hr} />
            </View>
            <View style={styles.dualOption}>
                <IconOption name={Icons.male} styles={iconStyles.p10} />
                <IconOption name={Icons.female} styles={iconStyles.p10} />
            </View>
        </View>
    );
}

export default Voice;