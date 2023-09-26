import {StyleSheet} from "react-native" 

export const styles = StyleSheet.create({
    centeredView:{
        width:"100%",
        height:"100%",
        flex:1,
        padding: 35,
        justifyContent:"center",
        alignItems:"center"
    },
    topView:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        width:"100%",
        top:"7%"
    },
    saveButton: {
        marginTop: 50,
        shadowColor: "#8ddc5c",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    }
})