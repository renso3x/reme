import React from 'react';
import { View, Image } from 'react-native';
import Slider from 'react-native-slider';
import volumeStyle from './styles/VolumeStyles';

function SliderControl({
	value,
    onSlideChange,
	leftIcon,
	rightIcon,
	onSlide,
	style
}) {
	return (
        <View style={volumeStyle.sliderContainer}>
            <Image  source={leftIcon} style={volumeStyle.imageSize} />
        	<Slider
                trackStyle={style.track}
                thumbStyle={style.thumb}
                minimumTrackTintColor='transparent'
                style={volumeStyle.slider}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={value}
                onValueChange={onSlideChange}
            />
            {
                rightIcon && <Image  source={rightIcon} style={volumeStyle.imageSize} />
            }
        </View>
	);
}

export default SliderControl;