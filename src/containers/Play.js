import moment from 'moment';
import React from 'react';
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

class Play extends React.PureComponent {
    state = {
        timer: 0,
    };

    componentWillMount() {
        Sound.setCategory('SoloAmbient');
        this.play();
    }

    play() {
        this.whoosh = new Sound('guitar_05.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            const tickInterval = setInterval(() => this.tick(), 250);
            this.whoosh.play((success) => {
                if (success) {
                    clearInterval(tickInterval);
                }
            });
        });
    }

    tick() {
        this.whoosh.getCurrentTime((seconds) => {
            const s = seconds;
            const dur = moment.utc(moment.duration(seconds, "s").asMilliseconds()).format("mm:ss");
            this.onTimerChange(dur);
        });
    }

    onTimerChange = (timer) => this.setState({ timer });

    render() {
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
                            <AppBtn>
                                <AppIcon name={Icons.rewind} style={playStyle.controlIconSize} />
                            </AppBtn>
                            <AppBtn style={playStyle.playBtn}>
                                <AppIcon name={Icons.play} style={playStyle.controlIconSize} />
                            </AppBtn>
                            <AppBtn onPress={() => navigation.goBack(null)}>
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