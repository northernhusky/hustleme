import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        width: '100%'
    },
    modalView: {
        width: '100%',
        padding: 35,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        position: "relative",
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    darkModalView: {
        backgroundColor: 'rgba(17, 10, 22, 0.5)', 
    },
    closeButton: {
        alignItems:"center",
        padding: 6,
        borderRadius: 50,
        opacity: .6,
        marginTop: 20,
    },
    description: {
        color: "grey",
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 100,
    },
    lightDescription:{
        color: "grey"
    },
    darkDescription:{
        color: 'white'
    },
    scrollView: {
        marginTop: 10,
        width: '100%',
    },
    heading: {
        justifyContent:"center",
        marginTop: 15,
    },
    headingText: {
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: "left",
        color: "#b8ced4"
    },
})