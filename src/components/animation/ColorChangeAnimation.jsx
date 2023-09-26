import React from 'react';
import * as Animatable from 'react-native-animatable';

const ColorChangeAnimation = ({delay, animation, duration, ...rest}) => {
    return (
        <Animatable.View
            animation={animation}
            duration={430}
            {...rest}
        />
    )
}

export default ColorChangeAnimation;