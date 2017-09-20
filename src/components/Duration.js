import React from 'react';
import { View, Text } from 'react-native';
import { 
    withState, 
    compose, 
    withHandlers 
} from 'recompose';
import { Base, Fonts, Icons } from '../metrics';
import styles from './styles/SubHeading';
import durationStyle from './styles/DurationStyles';
import Interventions from './Interventions';
import IconOption from './IconOption';


function Duration({
    intervention,
    selectedIntervention,
    visuals,
    selectedVisuals
}) {
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
                    name={'RE:FRAME'}
                    minutes={2}
                    onPress={() => selectedIntervention(2)}
                    isActive={intervention.intervention}
                />
                <Interventions
                    name={'RE:FRESH'}
                    onPress={() => selectedIntervention(5)}
                    minutes={5}
                    isActive={intervention.intervention}
                />
                <Interventions
                    name={'RE:JUVENATE'}
                    onPress={() => selectedIntervention(20)}
                    minutes={20}
                    isActive={intervention.intervention}
                />
            </View>
        </View>
    );
}
export default Duration;