import {StyleSheet} from "react-native" 

export const styles = StyleSheet.create({
    addCardButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5e55ec",
        height: 60,
        width: 60,
        borderRadius: 16,
        shadowColor: "#5e55ec",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 10
    },
    lightAddCardButton:{
        shadowOpacity: .43,
    },
    darkAddCardButton:{
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.33)",
        shadowOpacity: .2,
    },
    addCardButtonIcon: {
        color: "white",
        fontSize: 33,
        textAlign: "center",
        fontWeight:"400"
    },
})