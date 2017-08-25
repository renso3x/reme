import Fonts from '../../metrics/Fonts';

export default {
    container: {
        alignItems: 'center',
    },
    optionContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        paddingBottom: 10,
    },
    activeOption: {
        backgroundColor: 'white'
    },
    minuteText: {
        alignSelf: 'center',
        fontFamily: Fonts.raleway,
        fontSize: 25,
        color: '#fff'
    },
    name: {
        fontFamily: Fonts.ralewaySmB,
        fontSize: 14,
        color: '#fff',
        alignSelf: 'center'
    },
    activeName: {
        color: '#2bae9f'
    }
}