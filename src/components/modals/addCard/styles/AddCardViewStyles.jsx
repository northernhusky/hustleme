import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    inputs: {
        justifyContent: "center",
        width: '100%',
    },
    nameInput: {
        height: 40,
        color: "grey",
        fontSize: 23,
        fontWeight: "700",
    },
    positionInput: {
        color: "#c4c4c4",
        fontSize: 19,
        fontWeight: "600",
    },
    phoneInput: {
        fontSize: 17,
        fontWeight: "600",
        textDecorationColor: "#c2c2c2",
        color: "grey",
    },
    addressInput: {
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
    },
    emailInput: {
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
    },
    websiteInput: {
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
    },
    linkedInInput:{
        color: "#c4c4c4",
        overflow:"hidden",
        fontSize: 15,
        fontWeight: "500",
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: "#fafafa",
        padding: 10,
        width: 340,
        paddingLeft: 40,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,
    },
    linkedInInputDark:{
        color: "#c4c4c4",
        overflow:"hidden",
        fontSize: 15,
        fontWeight: "500",
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 10,
        backgroundColor: "#110A16",
        padding:10,
        width: 340,
        paddingLeft: 40,
        borderColor: "black",
        borderWidth: 1,
        shadowColor: "#893FF4",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.05,
        shadowRadius:20
    },
    addCardButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        height: 50,
        borderRadius: 12,
        top: 20,
    },
    addCardText: {
        color: "#e06c0d",
        fontSize: 22,
        fontWeight: "700"
    },
    singleCard: {
        width: 340,
        height: 233,
        borderRadius: 22,
        justifyContent: "space-around",
        padding: 15,
        marginBottom: 20,
        borderColor: "white",
        borderWidth: 1,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,
    },
    lightSingleCard:{
        backgroundColor: "#fafafa",
    },
    darkSingleCard:{
        backgroundColor: "#110A16",
        borderColor: "black",
        shadowColor: "#893FF4",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.05,
        shadowRadius:20
    },
    firstRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 10,
        alignItems:"center"
    },
    secondRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 10,
        alignItems:"center",
    },
    thirdRow:{
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding: 10,
        marginBottom: 10,
    },
    chooseLogoText: {
        color: "white"
    },
    chooseLogoButton: {
        backgroundColor: "#180B22",
        padding: 10,
        borderRadius: 8
    },
    errorMsgText:{
        fontSize:10,
        color:"red"
    },
    errorMsgSymbol:{
        fontSize: 15,
        color:"red",
        marginLeft:5
    },
    errorMsgViewUnder:{
       flexDirection:"column"
    },
    errorMsgViewSide:{
        flexDirection:"row",
        alignItems:"center"
    }
})

