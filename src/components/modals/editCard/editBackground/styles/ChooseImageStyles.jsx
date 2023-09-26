import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    modalView: {
        width: '100%',
        padding: 35,
        alignItems: "center",
        flex: 1,
        justifyContent: "space-around",
        position: "relative",
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
    },
    darkModalView: {
        backgroundColor: 'rgba(17, 10, 22, 0.8)',
    },
    centeredView: {
        justifyContent: "flex-end",
        alignItems: "center",
        height: 100,
        width: "100%",
        position:"absolute",
        bottom:0
    },
    topView:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        top:"7%",
        paddingTop:10,
    },
    exampleCardImage:{
        height:70,
        width:120,
        borderRadius:10,
        margin:10
    },
    exampleCard:{
        shadowColor:"#110A16",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    saveButton: {
        marginTop: 20,
        shadowColor: "#8ddc5c",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})
