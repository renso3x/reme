import React from 'react';
import { View, Text } from 'react-native';
import { 
    withState, 
    compose, 
    withHandlers 
} from 'recompose';
import { Base, Fonts, Icons } from '../metrics';
import styles from './styles/SubHeading';
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
                    name={'RE-FRAME'}
                    minutes={2}
                    onPress={() => selectedIntervention(2)}
                    isActive={intervention.intervention}
                />
                <Interventions
                    name={'RE-FRESH'}
                    onPress={() => selectedIntervention(5)}
                    minutes={5}
                    isActive={intervention.intervention}
                />
                <Interventions
                    name={'RE-JUVENATE'}
                    onPress={() => selectedIntervention(20)}
                    minutes={20}
                    isActive={intervention.intervention}
                />
            </View>
            <Text style={styles.subText}>Visuals</Text>
            <View style={styles.optionContainer}>
                <IconOption
                    name='abstract'
                    imgName={Icons.abstract}
                    onPress={() => selectedVisuals('abstract')}
                    isActive={visuals.visuals} 
                />
                <IconOption 
                    name='cloud'
                    imgName={Icons.cloud} 
                    onPress={() => selectedVisuals('cloud')}
                    isActive={visuals.visuals} 
                />
                <IconOption 
                    name='rain'
                    imgName={Icons.rain} 
                    onPress={() => selectedVisuals('rain')}
                    isActive={visuals.visuals} 
                />
                <IconOption 
                    name='ocean'
                    imgName={Icons.ocean} 
                    onPress={() => selectedVisuals('ocean')}
                    isActive={visuals.visuals} 
                />
                <IconOption 
                    name='cross'
                    imgName={Icons.cross} 
                    onPress={() => selectedVisuals('cross')}
                    isActive={visuals.visuals} 
                />
            </View>
        </View>
    );
}
export default Duration;