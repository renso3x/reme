import {  Dimensions } from 'react-native';
import Fonts from './Fonts';

const width = Dimensions.get('window').width;

const Base = {
    flex: {
        flex: 1,
    },
    centerItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deviceWidth: width,
    ph20: { paddingHorizontal: 15 },
    mt10: { marginTop: 10 },
}

export { Base };