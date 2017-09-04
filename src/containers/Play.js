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
import playStyle from './Styles/PlayStyles';
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
    const MAX_POINTS = 500;
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
                    size={200}
                    width={3}
                    fill={100}
                    tintColor="#fff"
                    backgroundColor="#81d4cb"
                    rotation={-360}
                >
                    {
                        (fill) => (
                          <Text style={playStyle.points}>
                            { Math.round(MAX_POINTS * fill / 100) }
                          </Text>
                        )
                      }
                </AnimatedCircularProgress>
            </View>
        </Image>
    );
}
export default Play;