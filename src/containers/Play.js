import moment from 'moment';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Sound from 'react-native-sound';
import { 
    Button as AppBtn,
    Icon as AppIcon 
} from '../components/common/';
import SliderControl from '../components/SliderControl';
import styles from './Styles/MainStyles';
import { Base, Fonts, Icons } from '../metrics/';
import playStyle from './Styles/PlayStyles';

class Play extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            isPlaying: true,
            song: null
        };

        Sound.setCategory('SoloAmbient');
        const song = new Sound('guitar_05.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            this.setState({ song });
            this.play();
        });
    }

    tick = () => {
        this.state.song.getCurrentTime((seconds) => {
            const duration = moment.utc(moment.duration(seconds, "s").asMilliseconds()).format("mm:ss");
            this.onTimerChange(duration);
        });
    }

    play = () => {
        const tickInterval = setInterval(() => this.tick(), 250);
        this.state.song.play((success) => {
            if (success) { clearInterval(tickInterval) }
        });
    }

    rewind = () => this.state.song.stop(() => this.state.song.play());

    pause = () => {
        this.setState({ isPlaying: !this.state.isPlaying });
        if (this.state.isPlaying) {
            return this.state.song.play();
        }
        return this.state.song.pause();
    }

    onTimerChange = (timer) => this.setState({ timer });

    onBack = () => {
        this.state.song.stop();
        this.props.navigation.goBack(null);
    }

    render() {
        console.log('rendering');
        return (
            <ImageBackground
                source={Icons.background}
                style={styles.container}
            >
                <View style={styles.headContainer}>
                    <Image
                        source={Icons.appMd}
                        style={styles.iconLogo}
                    />
                </View>
                <View style={playStyle.container}>
                    <View style={styles.centerContent}>
                        <AnimatedCircularProgress
                            size={280}
                            width={3}
                            fill={100}
                            tintColor="#fff"
                            backgroundColor="#81d4cb"
                            rotation={-360}
                        >
                            { (fill) => <Text style={playStyle.points}>{ this.state.timer }</Text>}
                        </AnimatedCircularProgress>
                    </View>
                    <View>
                        {/* choosed category */}
                        <SliderControl 
                            leftIcon={Icons.guitar}
                            rightIcon={Icons.male}
                            style={playStyle}
                        />
                       
                        <View style={playStyle.controlsContainer}>
                            <AppBtn onPress={this.rewind}>
                                <AppIcon name={Icons.rewind} style={playStyle.controlIconSize} />
                            </AppBtn>
                            <AppBtn style={playStyle.playBtn} onPress={this.pause}>
                                <AppIcon name={Icons.play} style={playStyle.controlIconSize} />
                            </AppBtn>
                            <AppBtn onPress={this.onBack}>
                                <AppIcon name={Icons.stop} style={playStyle.controlIconSize} />
                            </AppBtn>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
export default Play;
