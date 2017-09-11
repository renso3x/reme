import moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    Text,
    Image,
    ImageBackground
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
    Button as AppBtn
} from '../components/common';
import styles from './Styles/MainStyles';
import Base from '../metrics/Base';
import Icons from '../metrics/Icons';
import Fonts from '../metrics/Fonts';

import Duration from '../components/Duration';
import Sounds from '../components/Sounds';
import Voice from '../components/Voice';
import LanguagePicker from '../components/LanguagePicker';

function Main({
    navigation
}) {
    const onPlay = () => navigation.navigate('play');
    
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
                <AppBtn
                    onPress={() => 
                        navigation.navigate('about')
                    }
                    style={styles.aboutIconBtn}
                >
                    <Image 
                        source={Icons.about}
                        style={styles.aboutIcon}
                    />
                </AppBtn>
            </View>
            <Button
                raised
                title='START'
                fontFamily={Fonts.ralewayMd}
                textStyle={styles.btnText}
                containerViewStyle={styles.btnStart}
                backgroundColor={"#272F32"}
                onPress={onPlay}
            />

            <Duration />
            <Sounds />
            <Voice />
            <LanguagePicker />
        </ImageBackground>
    );
}
export default Main;