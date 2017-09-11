import Fonts from '../../metrics/Fonts';

export default {
    container: {
        flex: 1,
        justifyContent: 'space-around' 
    },
    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 100,
        left: 70,
        width: 150,
        textAlign: 'center',
        color: '#fff',
        fontFamily: Fonts.raleway,
        fontSize: 55,
        fontWeight: "100"
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
        marginTop: 20,
    },
    controlIconSize: {
        width: 40,
        height: 40,
    },
    playBtn: {
        marginHorizontal: 30
    }
}