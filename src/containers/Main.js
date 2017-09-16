import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    Text,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
    withState, 
    compose, 
    withHandlers 
} from 'recompose';
import { 
    Button as AppBtn
} from '../components/common';
import styles from './Styles/MainStyles';
import { Base, Icons, Fonts } from '../metrics';
import Duration from '../components/Duration';
import Sounds from '../components/Sounds';
import Voice from '../components/Voice';
import LanguagePicker from '../components/LanguagePicker';
import SliderControl from '../components/SliderControl';
import playStyle from './Styles/PlayStyles';

const enhance = compose(
    withState('intervention', 'setIntervention', '2'),
    withState('visuals', 'setVisuals', 'abstract'),
    withState('sound', 'setSounds', 'guitar'),
    withState('voice', 'setVoice', 'male'),
    withState('language', 'setLanguage', 'ar'),
    withHandlers({
        selectedIntervention: ({ setIntervention, intervention }) => (intervention) => setIntervention({ intervention }),
        selectedVisuals: ({ setVisuals, visuals }) => (visuals) => setVisuals({ visuals }),
        selectedSound: ({ setSounds, sound }) => (sound) => setSounds({ sound }),
        selectedVoice: ({ setVoice, voice }) => (voice) => setVoice({ voice }),
        selectedLanguage: ({ setLanguage, language }) => (language) => setLanguage({ language })
    })
);


const Main = enhance((props) => {
    const { navigation } = props;

    const onPlay = () => navigation.navigate('play');
    
    return (
        <ImageBackground 
            source={Icons.bgImage}
            style={styles.container}
        >
            <ImageBackground 
                source={Icons.background}
                style={styles.container}
                opacity={0.8}
            >
                <View style={styles.headContainer}>
                    <Image 
                        source={Icons.appMd}
                        style={styles.iconLogo}
                    />
                    <AppBtn
                        onPress={() => navigation.navigate('about')}
                        style={styles.aboutIconBtn}
                    >
                        <Image 
                            source={Icons.about}
                            style={styles.aboutIcon}
                        />
                    </AppBtn>
                </View>
                <ScrollView>
                    <Duration {...props} />
                    <Sounds {...props} />
                    <Voice {...props} />
                    <View style={{ height: 150 }}>
                        <SliderControl 
                            leftIcon={Icons.volume}
                            style={playStyle}
                        />
                    </View>
                </ScrollView>
                <Button
                    raised
                    title='S T A R T'
                    fontFamily={Fonts.ralewayMd}
                    textStyle={styles.btnText}
                    containerViewStyle={styles.btnStart}
                    backgroundColor={"#272F32"}
                    onPress={onPlay}
                />
            </ImageBackground>
        </ImageBackground>
    );
});

export default Main;