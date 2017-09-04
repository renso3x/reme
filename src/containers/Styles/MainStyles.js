import Base from '../../metrics/Base';
import Fonts from '../../metrics/Fonts';

const styles = { 
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    headContainer: {
        paddingTop: 12,
    },
    iconLogo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    btnStart: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        marginLeft: 0,
        width: Base.deviceWidth
    },
    btnText: {
        color: '#fff',
        fontSize: 20
    },
    centerContent: {
        alignSelf: 'center',
    },
    aboutTxt: {
        fontFamily: Fonts.raleway,
        fontSize: 14,
        textAlign: 'justify'
    },
    aboutIconBtn: {
        position: 'absolute',
        right: 10,
        top: 25,
    },
    backIconBtn: {
        position: 'absolute',
        left: 10,
        top: 25,
    },
    aboutIcon: {
        width: 25,
        height: 25,
    },
    aboutContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
}

export default styles;