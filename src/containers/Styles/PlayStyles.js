import { PixelRatio } from 'react-native';
import { Fonts } from '../../metrics';

const ratio = PixelRatio.get();

export default {
    animatedCircularProgress: {
        alignItems: 'center',
    },
    sliderView: {
        marginVertical: 20
    },
    container: {
        flex: 1,
        justifyContent: 'space-around' 
    },
    points: {
        alignItems: 'center',
        position: 'absolute',
        top: (280/2) - 40 ,
        left: 0,
        alignSelf: 'center',
        color: '#fff',
        width: 280,
        height: 80,
        textAlign: 'center',
        fontFamily: Fonts.avenirLight,
        fontSize: 120/ratio,
    },
    track: {
        height: 10,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.5)',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1,
        shadowOpacity: 0.15,
    },
    thumb: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 5,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.35,
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    controlIconSize: {
        width: 40,
        height: 40,
    },
    playBtn: {
        marginHorizontal: 15
    },

}