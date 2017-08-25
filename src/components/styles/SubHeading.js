import Fonts from '../../metrics/Fonts';

const styles = {
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8
    },
    dualOption: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    hr: {
        flex: 1,
        height: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    subText: {
        fontFamily: Fonts.ralewayMd,
        fontSize: 25,
        color: '#fff',
    },
}

export default styles;