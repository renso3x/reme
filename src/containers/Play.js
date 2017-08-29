import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import Sound from 'react-native-sound';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import VolumeSlider from 'react-native-volume-slider';
import Slider from 'react-native-slider';
import styles from './Styles/MainStyles';
import Base from '../metrics/Base';
import Icons from '../metrics/Icons';
import Fonts from '../metrics/Fonts';
import volumeStyle from '../components/styles/VolumeStyles';

var DEFAULT_VALUE = 0.2;
var SliderContainer = React.createClass({
    getInitialState() {
        return {
            value: DEFAULT_VALUE,
        };
    },

    render() {
        var value = this.state.value;

        return (
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.caption} numberOfLines={1}>{this.props.caption}</Text>
                    <Text style={styles.value} numberOfLines={1}>{value}</Text>
                </View>
                {this._renderChildren()}
            </View>
        );
    },

    _renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            if (child.type === Slider
                || child.type === ReactNative.Slider) {
                var value = this.state.value;
                return React.cloneElement(child, {
                    value: value,
                    onValueChange: (val) => this.setState({ value: val }),
                });
            } else {
                return child;
            }
        });
    },
});

function Play() {
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
            <View style={styles.centerContent}>
                <AnimatedCircularProgress
                    size={120}
                    width={15}
                    fill={100}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875"
                />
                <SliderContainer caption='<Slider/> with custom style #4'>
                    <Slider
                        trackStyle={customStyles4.track}
                        thumbStyle={customStyles4.thumb}
                        minimumTrackTintColor='#d14ba6'
                    />
                </SliderContainer>
            </View>
        </Image>
    );
}

var customStyles4 = StyleSheet.create({
    track: {
        height: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.15,
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: '#f8a1d6',
        borderColor: '#a4126e',
        borderWidth: 5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    }
});

export default Play;