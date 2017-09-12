import React from 'react';
import { View, Text } from 'react-native';
import { 
    withState, 
    compose, 
    withHandlers 
} from 'recompose';
import { Base, Fonts, Icons } from '../metrics';
import IconOption from './IconOption';
import SliderControl from './SliderControl';
import styles from './styles/SubHeading';
import soundStyle from './styles/SoundStyles';
import playStyle from '../containers/Styles/PlayStyles';

const Sound = ({
    sound,
    selectedSound,
}) =>
    <View>
        <View style={styles.subContainer}>
            <View style={styles.hr} />
            <View style={Base.ph20}>
                <Text style={styles.subText}>Sounds</Text>
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
            <View>
                <SliderControl 
                    leftIcon={Icons.volume}
                    style={playStyle}
                />
            </View>
        </View>
    </View>

const enhance = compose(
    withState('sound', 'setSounds', 'guitar'),
    withHandlers({
        selectedSound: ({ setSounds, sound }) => (sound) => setSounds({ sound })
    })
);

const Sounds = enhance(Sound);

export default Sounds;