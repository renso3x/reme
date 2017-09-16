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
import CircularSlider from 'react-native-circular-slider';
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
            duration: 0,
            seconds: 0,
            isPlaying: true,
        };

    }

    componentWillMount() {

        Sound.setCategory('SoloAmbient');

        this.sound = new Sound('guitar_05.mp3', Sound.MAIN_BUNDLE, (error) => {

            if (error) {

                console.log('failed to load the sound', error);
                return;
            }   

            this.setState({ duration: this.sound.getDuration() });

            this.play();

        });

    }

    componentWillUnMount() {

        this.sound.stop();

        clearInterval(this.tickInterval);

        this.tickInterval = null;

    }

    tick() {

        this.sound.getCurrentTime((seconds) => {

            const time = moment.utc(moment.duration(seconds, "s").asMilliseconds()).format("mm:ss");

            // this.refs.circularProgress.performLinearAnimation(seconds, seconds);

            if (this.tickInterval) {

                this.setState({ timer: time, seconds });

            }

        });

    }

    play() {

        this.tickInterval = setInterval(() => this.tick(), 250);

        this.sound.play((success) => {

            if (success) { clearInterval(this.tickInterval) }

        });

    }

    rewind = () => {
        this.setState({ isPlaying: true });
        this.sound.stop(() => this.sound.play());
    }

    pause = () => {

        this.setState({ 

            isPlaying: !this.state.isPlaying 

        }, () => {

            if (this.state.isPlaying) {

                return this.play();

            }

            return this.sound.pause();

        });

    }

    onBack = () => {

        this.sound.stop();

        clearInterval(this.tickInterval);

        this.tickInterval = null;

        this.props.navigation.goBack(null);

    }

    render() {

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

                    </View>

                    <View style={playStyle.container}>
                        
                        <View style={playStyle.animatedCircularProgress}>
                        
                            <AnimatedCircularProgress
                                ref="circularProgress"
                                size={280}
                                width={4}
                                fill={this.state.duration}
                                tintColor="#fff"
                                backgroundColor="#81d4cb"
                                linecap='round'
                                rotation={270}
                                capWidth={10}
                                capColor="#fff"
                            >
                            
                                { (fill) => <Text style={playStyle.points}>{this.state.timer}</Text>}
                            
                            </AnimatedCircularProgress>
                        
                        </View>
                        
                        <View>
                        
                            <View style={playStyle.controlsContainer}>
                        
                                <AppBtn style={playStyle.playBtn} onPress={this.rewind}>
                        
                                    <AppIcon name={Icons.rewind} style={playStyle.controlIconSize} />
                        
                                </AppBtn>
                        
                                <AppBtn style={playStyle.playBtn} onPress={this.pause}>
                        
                                    <AppIcon 
                                        name={
                                            this.state.isPlaying ?
                                            Icons.pause : Icons.play
                                        } 
                                        style={playStyle.controlIconSize} 
                                    />
                        
                                </AppBtn>
                        
                                <AppBtn style={playStyle.playBtn} onPress={this.onBack}>
                        
                                    <AppIcon name={Icons.stop} style={playStyle.controlIconSize} />
                        
                                </AppBtn>

                                 <AppBtn style={playStyle.playBtn}>
                        
                                    <AppIcon name={Icons.airPlay} style={playStyle.controlIconSize} />
                        
                                </AppBtn>
                        
                            </View>
                        
                        </View>
                    
                    </View>

                </ImageBackground>
                
            </ImageBackground>
        );

    }

}

export default Play;
