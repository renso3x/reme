import React from 'react';
import { View, Text } from 'react-native';
import { Base, Fonts, Icons } from '../metrics';
import IconOption from './IconOption';
import SliderControl from './SliderControl';
import styles from './styles/SubHeading';
import soundStyle from './styles/SoundStyles';
import playStyle from '../containers/Styles/PlayStyles';

const Sounds = ({
    sound,
    selectedSound,
}) =>
    <View>
        <View style={styles.subContainer}>
            <View style={styles.hr} />
            <View style={Base.ph20}>
                <Text style={styles.subText}>Re:Muse</Text>
            </View>
            <View style={styles.hr} />
        </View>
        <View style={soundStyle.listContainer}>
            <View style={styles.optionContainer}>
                <IconOption 
                    name='guitar'
                    imgName={Icons.guitar}
                    onPress={() => selectedSound('guitar')}
                    isActive={sound.sound}
                />
                <IconOption 
                    name='piano'
                    imgName={Icons.piano} 
                    onPress={() => selectedSound('piano')}
                    isActive={sound.sound}
                />
                <IconOption 
                    name='rain'
                    imgName={Icons.rain} 
                    onPress={() => selectedSound('rain')}
                    isActive={sound.sound}
                />
                <IconOption 
                    name='ocean'
                    imgName={Icons.ocean} 
                    onPress={() => selectedSound('ocean')}
                    isActive={sound.sound}
                />
                <IconOption 
                    name='cross'
                    imgName={Icons.cross} 
                    onPress={() => selectedSound('cross')}
                    isActive={sound.sound}
                />
            </View>
        </View>
    </View>

export default Sounds;