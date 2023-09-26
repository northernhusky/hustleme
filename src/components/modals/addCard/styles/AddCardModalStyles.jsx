import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    addCardHeaderText:{
        fontSize: 33,
        textAlign: "left",
        fontWeight:"bold",
        color: "black",
        marginBottom: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: "#110A16",
        borderRadius: 12,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})