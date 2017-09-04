import React from 'react';
import { View, Image } from 'react-native';
import Slider from 'react-native-slider';
import volumeStyle from './styles/VolumeStyles';

function SliderControl({
	value = 0,
	leftIcon,
	rightIcon,
	onSlide,
	style
}) {
	return (
        <View style={volumeStyle.sliderContainer}>
            <Image 
                source={leftIcon}
                style={volumeStyle.imageSize}
            />
            	<Slider
                    trackStyle={style.track}
                    thumbStyle={style.thumb}
                    minimumTrackTintColor='#fff'
                    style={volumeStyle.slider}
                    onValueChange={() => null}
                />
            <Image 
                source={rightIcon}
                style={volumeStyle.imageSize}
            />
        </View>
	);
}

export default SliderControl;