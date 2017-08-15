import React from 'react';
import PropTypes from 'prop-types';
import {
    View, 
    Text,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from './Styles/MainStyles';
import Icons from '../metrics/Icons';
import Fonts from '../metrics/Fonts';

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
                buttonStyle={{ marginLeft: 0 }}
                fontFamily={Fonts.ralewayMd}
                textStyle={styles.btnText}
                containerViewStyle={styles.btnStart}
                backgroundColor={"#272F32"}
            />
        </Image>
    );
}
export default Main;