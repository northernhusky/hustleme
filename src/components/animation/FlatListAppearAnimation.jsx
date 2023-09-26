import React from 'react';
import * as Animatable from 'react-native-animatable';

const FlatListAppearAnimation = ({delay, ...rest}) => {
    return (
        <Animatable.View
            animation="flipInY"
            duration={800}
            delay={delay}
            {...rest}
        />
    )
}

export default FlatListAppearAnimation;