import React from 'react';
import { View, Text } from 'react-native';
import Base from '../metrics/Base';
import Fonts from '../metrics/Fonts';
import Icons from '../metrics/Icons';
import styles from './styles/SubHeading';
import IconOption from './IconOption';

function Sounds() {
    return (
        <View>
            <View style={styles.subContainer}>
                <View style={styles.hr} />
                <View style={Base.ph20}>
                    <Text style={styles.subText}>Sounds</Text>
                </View>
                <View style={styles.hr} />
            </View>
            <View style={styles.optionContainer}>
                <IconOption name={Icons.guitar} />
                <IconOption name={Icons.piano} />
                <IconOption name={Icons.rain} />
                <IconOption name={Icons.ocean} />
                <IconOption name={Icons.stop} />
            </View>
        </View>
    );
}

export default Sounds;