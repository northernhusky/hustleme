import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    text:{
        fontWeight:"bold",
        fontSize: 33,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 5,
        color: "#b8ced4"
    },
    searchInput: {
        paddingHorizontal: 20, 
        borderRadius: 8, 
        marginBottom: 10, 
        backgroundColor: "#fafafa", 
        padding:10,
        width: "97%",
        paddingLeft: 30
    },
    lightSearchInput:{
        backgroundColor: "#fafafa",
        color: "black"
    },
    darkSearchInput:{
        backgroundColor: "#110A16",
        color: "white"
    },
    lightText:{
        color: "#b8ced4"
    },
    darkText:{
        color: "#6b6073"
    },
    noCardsText: {
        textAlign: "center",
        fontSize: 16,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4
    },
})