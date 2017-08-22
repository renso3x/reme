import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    Text,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import Sound from 'react-native-sound';
import styles from './Styles/MainStyles';
import Base from '../metrics/Base';
import Icons from '../metrics/Icons';
import Fonts from '../metrics/Fonts';

import Duration from '../components/Duration';
import Sounds from '../components/Sounds';
import Voice from '../components/Voice';

function Main() {
    Sound.setCategory('SoloAmbient');
    var whoosh = new Sound('guitar_05.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        whoosh.play();
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    });

    // Play the sound with an onEnd callback
    whoosh.play((success) => {
        if (success) {
            console.log('successfully finished playing');
        } else {
            console.log('playback failed due to audio decoding errors');
        }
    });

    // Reduce the volume by half
    whoosh.setVolume(0.5);

    // Position the sound to the full right in a stereo field
    whoosh.setPan(1);

    // Loop indefinitely until stop() is called
    whoosh.setNumberOfLoops(-1);

    // Get properties of the player instance
    console.log('volume: ' + whoosh.getVolume());
    console.log('pan: ' + whoosh.getPan());
    console.log('loops: ' + whoosh.getNumberOfLoops());

    // Seek to a specific point in seconds
    whoosh.setCurrentTime(2.5);

    // Get the current playback point in seconds
    whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

    // Pause the sound
    whoosh.pause();

    // Stop the sound and rewind to the beginning
    whoosh.stop(() => {
        // Note: If you want to play a sound after stopping and rewinding it,
        // it is important to call play() in a callback.
        whoosh.play();
    });

    // Release the audio player resource
    whoosh.release();


    var voice = new Sound('en_male_20.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        voice.play();
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
    });

    // Play the sound with an onEnd callback
    voice.play((success) => {
        if (success) {
            console.log('successfully finished playing');
        } else {
            console.log('playback failed due to audio decoding errors');
        }
    });

    // Reduce the volume by half
    voice.setVolume(0.5);

    // Position the sound to the full right in a stereo field
    voice.setPan(1);

    // Loop indefinitely until stop() is called
    voice.setNumberOfLoops(-1);

    // Get properties of the player instance
    console.log('volume: ' + voice.getVolume());
    console.log('pan: ' + voice.getPan());
    console.log('loops: ' + voice.getNumberOfLoops());

    // Seek to a specific point in seconds
    voice.setCurrentTime(2.5);

    // Get the current playback point in seconds
    voice.getCurrentTime((seconds) => console.log('at ' + seconds));

    // Pause the sound
    voice.pause();

    // Stop the sound and rewind to the beginning
    voice.stop(() => {
        // Note: If you want to play a sound after stopping and rewinding it,
        // it is important to call play() in a callback.
        voice.play();
    });

    // Release the audio player resource
    voice.release();



    return (
        <Image 
            source={Icons.background}
            style={styles.container}
        >
            <View style={styles.headContainer}>
                <Image 
                    source={Icons.appMd}
                    style={styles.iconLogo}
                />
            </View>
            <Button
                raised
                title='START'
                fontFamily={Fonts.ralewayMd}
                textStyle={styles.btnText}
                containerViewStyle={styles.btnStart}
                backgroundColor={"#272F32"}
            />

            <Duration />
            <Sounds />
            <Voice />
        </Image>
    );
}
export default Main;