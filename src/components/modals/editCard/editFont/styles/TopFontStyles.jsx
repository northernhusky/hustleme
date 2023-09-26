import {StyleSheet} from "react-native" 

export const getStyles = (PICKER_HEIGHT) => StyleSheet.create({
    centeredView: {
        justifyContent: "flex-end",
        alignItems: "center",
        width: '100%',
        height: PICKER_HEIGHT,
        position:"absolute",
        bottom:0,
        paddingBottom:15,
    },
})