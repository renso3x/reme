import { 
    Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

export default {
    flex: {
        flex: 1,
    },
    centerItems: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deviceWidth: width,
    ph20: { paddingHorizontal: 15 }
}