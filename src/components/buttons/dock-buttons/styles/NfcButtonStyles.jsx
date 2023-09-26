import {StyleSheet} from "react-native" 

export const styles = StyleSheet.create({
    nfcButton: {
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
    lightNfcButton:{
        shadowOpacity: .43,
    },
    darkNfcButton:{
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.33)",
        shadowOpacity: .2,
    },
})