import { StyleSheet } from "react-native"

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
    qrCodeContainer:{
        marginTop: 20,
    },
    iconContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 30,
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
    },
    aboutPosition:{
        fontStyle:"italic",
        color: "grey",
    },
    contactContainer:{
        display:"flex",
        flexDirection:"column",
        borderColor: "black",
        borderBottomWidth: 1,
        paddingBottom:10,
        marginBottom:10,
        width:"100%"
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
    deleteCardButton: {
        alignItems: 'center',
        padding: 10,
        height: 50,
        justifyContent:"center",
        borderRadius: 25,
        opacity: .3,
    },
    deleteCardText: {
        color: 'grey',
        fontSize: 19,
        fontWeight: 'bold',
    },
    description: {
        color: "grey",
        fontSize: 18,
        fontWeight: '500',
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
    sliderText:{
        color: "grey",
        fontSize: 22,
        textAlign: "center"
    },
    darkSliderText: {
        color: "grey"
    },
    sliderContainerStyle: {
        margin: 8,
        backgroundColor: 'rgba(255,255,255,0.12)',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
    },
    footerButtonWrapper:{
        flexDirection:"row"
    }
})
