import React, {useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import TransitionView from "../../../../../animation/TransitionView"
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../../../../assets/data/svgIcons";

const TopFontColorButtons = ({setTopFontColorPickerVisible, setTopFontColor, setSelectTopFontPickerVisible}) => {

    const topFontPickerHandler = useCallback(() => {
        setTopFontColorPickerVisible(true)
    }, [])

    const topFontColorHandler = useCallback(() => {
        setTopFontColor("grey")
    }, [])

    const selectTopFontPickerHandler = useCallback(() => {
        setSelectTopFontPickerVisible(true)
    }, [])

    return(
    <View style={{flexDirection:"row", marginBottom:30, marginTop:30}}>
        <TransitionView delay={90}>
            <TouchableOpacity
                onPress={topFontPickerHandler}
            >
                <SvgXml xml={svgIcons.arrowDown} width={40} height={40} fill="#c4c4c4"/>
            </TouchableOpacity>
        </TransitionView>

        <TransitionView delay={194}>
            <TouchableOpacity
                onPress={topFontColorHandler}
                style={{marginLeft:15}}
            >
                <SvgXml xml={svgIcons.initialColor} height={40} width={40} fill="#c4c4c4" />
            </TouchableOpacity>
        </TransitionView>

        <TransitionView delay={250}>
            <TouchableOpacity
                onPress={selectTopFontPickerHandler}
                style={{marginLeft:15}}
            >
                <SvgXml xml={svgIcons.formatFont} height={40} width={40} fill="#c4c4c4" />
            </TouchableOpacity>
        </TransitionView>
    </View>
    )
}

export default TopFontColorButtons;