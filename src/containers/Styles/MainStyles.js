import { Base, Fonts } from '../../metrics';

const styles = { 
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    headContainer: {
        paddingVertical: 12
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
        fontSize: 25,
        fontFamily: Fonts.ralewaySmB,
    },
    centerContent: {
        alignSelf: 'center',
    },
    aboutTxt: {
        fontFamily: Fonts.raleway,
        fontSize: 14,
        textAlign: 'justify',
        lineHeight: 20
    },
    aboutIconBtn: {
        position: 'absolute',
        right: 20,
        top: 25,
    },
    backIconBtn: {
        position: 'absolute',
        left: 10,
        top: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    aboutIcon: {
        width: 26,
        height: 25,
    },
    aboutContainer: {
        padding: 20,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: Fonts.ralewayMd,
        alignSelf: 'center'
    }
}

export default styles;