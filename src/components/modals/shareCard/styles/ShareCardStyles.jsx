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
    },
    aboutContainer:{
        marginTop:30,
        borderColor: "black",
        borderBottomWidth: 1,
        paddingBottom:10,
        marginBottom:10,
    },
    aboutName:{
        fontSize:30,
        fontWeight:"bold",
        color: "black",
        flexWrap: "wrap",
    },
    aboutPosition:{
        fontStyle:"italic",
        color: "grey",
        flexWrap: "wrap",
    },
    contactContainer:{
        display:"flex",
        flexDirection:"column",
        borderColor: "black",
        borderBottomWidth: 1,
        paddingBottom:10,
        marginBottom:10,
        width:"100%",
    },
    contactRowWrapper:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingBottom:10,
        paddingTop:10
    },
    socialContainer:{
        display:"flex",
        flexDirection:"column",
        borderColor: "black",
        borderBottomWidth: 1,
        paddingBottom:10,
        marginBottom:10,
        width:"100%"
    },
    description: {
        color: "grey",
        fontSize: 18,
        fontWeight: '500',
        flexWrap: "wrap",
    },
    lightDescription:{
        color: "grey"
    },
    darkDescription:{
        color: 'white'
    },
    lightAboutPosition:{
        color: "grey"
    },
    darkAboutPosition:{
        color: "lightgrey"
    },
    lightAboutName:{
        color: "black"
    },
    darkAboutName:{
        color: "white"
    },
    qrCodeContainer:{
        marginTop: 20,
    },
})