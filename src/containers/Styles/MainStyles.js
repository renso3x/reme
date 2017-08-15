import Base from '../../metrics/Base';
import Fonts from '../../metrics/Fonts';

const styles = { 
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    headContainer: {
        paddingVertical: 20
    },
    iconLogo: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
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
    }
}

export default styles;