import React, {memo} from 'react';
import * as Animatable from 'react-native-animatable';

const CardsAppearAnimation = ({delay, ...rest}) => {
    return (
        <Animatable.View
            animation="slideInUp"
            duration={430}
            delay={delay}
            {...rest}
        />
    )
}

export default memo(CardsAppearAnimation);
