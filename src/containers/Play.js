import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { 
    Button as AppBtn,
    Icon as AppIcon 
} from '../components/common/';
import SliderControl from '../components/SliderControl';

import styles from './Styles/MainStyles';
import Base from '../metrics/Base';
import Icons from '../metrics/Icons';
import Fonts from '../metrics/Fonts';
import playStyle from './Styles/PlayStyles';

function Play({
    navigation
}) {
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
                        {
                            (fill) => (
                              <Text style={playStyle.points}>
                                { Math.round(MAX_POINTS * fill / 100) }
                              </Text>
                            )
                          }
                    </AnimatedCircularProgress>
                </View>
                <View>
                    {/* choosed category */}
                    <SliderControl 
                        leftIcon={Icons.guitar}
                        rightIcon={Icons.male}
                        style={playStyle}
                    />
                    {/* volume controls */}
                    <SliderControl 
                        leftIcon={Icons.mute}
                        rightIcon={Icons.volume}
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
        </Image>
    );
}

export default Play;