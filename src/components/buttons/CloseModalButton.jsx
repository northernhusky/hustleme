import React, {useCallback} from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../assets/data/svgIcons";

const CloseModalButton = ({setModalVisible}) => {

    const closeButtonHandler = useCallback(() => {
        setModalVisible(false)
    }, [])

    return(
        <View>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={closeButtonHandler}
            >
                <SvgXml xml={svgIcons.close} fill="rgba(110, 102, 120, .6)" height={50} width={50} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    closeButton: {
        alignItems:"center",
        padding: 6,
        borderRadius: 50,
        opacity: .6,
    },
})

export default CloseModalButton;
