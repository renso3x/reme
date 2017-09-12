import React from 'react';
import { View, Text } from 'react-native';
import { Base, Fonts, Icons } from '../metrics';
import styles from './styles/SubHeading';
import IconOption from './IconOption';
import iconStyles from './styles/IconOptionsStyle';

const Voice = ({
    voice,
    selectedVoice
}) =>
    <View>
        <View style={styles.subContainer}>
            <View style={styles.hr} />
            <View style={Base.ph20}>
                <Text style={styles.subText}>Voice</Text>
            </View>
            <View style={styles.hr} />
        </View>
        <View style={styles.dualOption}>
            <IconOption
                name='male'
                imgName={Icons.male} 
                styles={iconStyles.p10} 
                onPress={() => selectedVoice('male')}
                isActive={voice.voice}
            />
            <IconOption 
                name='female'
                imgName={Icons.female} 
                styles={iconStyles.p10} 
                onPress={() => selectedVoice('female')}
                isActive={voice.voice}
            />
        </View>
    </View>

export default Voice;