import {StyleSheet} from "react-native" 

export const styles = StyleSheet.create({
    addScannerButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        height: 60,
        width: 60,
        borderRadius: 16,
        shadowColor: "orange",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 10
    },
    lightScannerButton:{
        shadowOpacity: .43,
    },
    darkScannerButton:{
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.33)",
        shadowOpacity: .2,
    },
})