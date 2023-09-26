import React, {useCallback} from "react"
import {View, TouchableOpacity, useColorScheme} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import {styles} from "./styles/AddCardStyles"

const AddCardOpenModalButton = ({setModalVisible}) => {

    const colorScheme = useColorScheme();
    const themeAddCardButton = colorScheme === 'light' ? styles.lightAddCardButton : styles.darkAddCardButton;
    const plusButtonColor = colorScheme === 'light' ? "white" : "black"

    const addCardHandler = useCallback(() => {
        setModalVisible(true)
    }, [])

    return(
        <View>
            <TouchableOpacity
                activeOpacity={.9}
                style={[styles.addCardButton, themeAddCardButton]}
                onPress={addCardHandler}
            >
                <SvgXml xml={svgIcons.plusSign} fill={plusButtonColor} height={30} width={30} />
            </TouchableOpacity>
        </View>
    )
}

export default AddCardOpenModalButton;
