import Fonts from '../../metrics/Fonts';

export default {
    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 72,
        left: 56,
        width: 90,
        textAlign: 'center',
        color: '#fff',
        fontFamily: Fonts.raleway,
        fontSize: 50,
        fontWeight: "100"
    },
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
    },
}