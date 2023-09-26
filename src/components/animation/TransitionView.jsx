import React, {memo} from 'react';
import * as Animatable from 'react-native-animatable';

const TransitionView = ({delay, ...rest}) => {
    return (
        <Animatable.View
            animation="zoomIn"
            duration={430}
            delay={delay}
            {...rest}
        />
    )
}

export default memo(TransitionView);
