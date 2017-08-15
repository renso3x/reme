import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    Text,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Styles/MainStyles';
import Base from '../metrics/Base';
import Icons from '../metrics/Icons';
import Fonts from '../metrics/Fonts';

import Duration from '../components/Duration';
import Sounds from '../components/Sounds';
import Voice from '../components/Voice';

function Main() {
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