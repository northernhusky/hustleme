import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    scanner: {
        flex: 1,
        width: 400,
        height: 500,
    },
    addCardHeaderText:{
        fontSize: 33,
        textAlign: "left",
        fontWeight:"bold",
        color: "white",
    },
    closeModal: {
        color: "grey",
        textAlign:"center",
        fontSize: 20,
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: "bold",
    },
    closeButton: {
        alignItems:"center",
        padding: 6,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'grey'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        width: '100%'
    },
    darkCenteredView:{
        backgroundColor: 'rgba(17, 10, 22, 0.5)'
    },
    modalView: {
        width: '90%',
        height:'60%',
        margin: 20,
        borderRadius: 12,
        padding: 35,
        alignItems: "center",
    },
    upper: {
        justifyContent:"center"
    },
    scanText: {
        fontSize: 33,
        fontWeight: 'normal',
        textAlign: "left",
        color: "grey",
    },
    scanBoldText: {
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'left',
        color: "black",
    },
    lightScanBoldText:{
        color: "black"
    },
    darkScanBoldText:{
        color:"white"
    }
})