import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import TransitionView from "../../../../../animation/TransitionView"
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../../../../assets/data/svgIcons";

const BottomFontColorButtons = ({setBottomFontColorPickerVisible, setBottomFontColor, setSelectBottomFontPickerVisible}) => {

    const bottomFontPickerHandler = useCallback(() => {
        setBottomFontColorPickerVisible(true)
    }, [])

    const bottomFontColorHandler = useCallback(() => {
        setBottomFontColor("grey")
    }, [])

    const bottomSelectFontPickerHandler = useCallback(() => {
        setSelectBottomFontPickerVisible(true)
    }, [])

    return(
        <View style={{flexDirection:"row", marginTop:30}}>
            <TransitionView delay={90}>
                <TouchableOpacity
                    onPress={bottomFontPickerHandler}
                >
                    <SvgXml xml={svgIcons.arrowUp} width={40} height={40} fill="#c4c4c4" />
                </TouchableOpacity>
            </TransitionView>

            <TransitionView delay={194}>
                <TouchableOpacity
                    onPress={bottomFontColorHandler}
                    style={{marginLeft:15}}
                >
                    <SvgXml xml={svgIcons.initialColor} height={40} width={40} fill="#c4c4c4" />
                </TouchableOpacity>
            </TransitionView>

            <TransitionView delay={250}>
                <TouchableOpacity
                    onPress={bottomSelectFontPickerHandler}
                    style={{marginLeft:15}}
                >
                    <SvgXml xml={svgIcons.formatFont} height={40} width={40} fill="#c4c4c4" />
                </TouchableOpacity>
            </TransitionView>
        </View>
    )
}

export default BottomFontColorButtons;