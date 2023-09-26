import {StyleSheet} from "react-native";

export const getStyles = (card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont, qrCodeData) => StyleSheet.create({
    cardBackground:{
        backgroundColor: qrCodeData.backgroundColor,
        width: "100%",
        height: 233,
        borderRadius: 22,
        justifyContent: "space-around",
        padding: 15,
        marginBottom: 15,
        borderColor: "white",
        borderWidth: 1,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3,
    },
    nameTextColor:{
        color: qrCodeData.upperTextColor,
        fontFamily: qrCodeData.upperFontStyle,
        fontSize: 23,
        fontWeight: "700",
    },
    phoneTextColor:{
        color: qrCodeData.upperTextColor,
        fontFamily: qrCodeData.upperFontStyle,
        fontSize: 17,
        fontWeight: "700",
        textDecorationColor: "#c2c2c2",
    },

    positionTextColor:{
        color: qrCodeData.bottomTextColor,
        fontFamily: qrCodeData.bottomFontStyle,
        fontSize: 19,
        fontWeight: "600",
    },
    bottomBlockTextColor: {
        color: qrCodeData.bottomTextColor,
        fontFamily: qrCodeData.bottomFontStyle,
        fontSize: 15,
        fontWeight: "500",
    },
    singleCard: {
        width: "100%",
        height: 233,
        borderRadius: 22,
        justifyContent: "space-around",
        padding: 15,
        marginBottom: 15,
        borderColor: "white",
        borderWidth: 1,
        backgroundColor: qrCodeData.backgroundColor,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3,
    },
    cardWithBackground: {
        width: "100%",
        height: 233,
        borderRadius: 22,
        justifyContent: "space-around",
        padding: 15,
        marginBottom: 15,
        borderColor: "white",
        borderWidth: 1,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3,
    },
    darkCardWithBackground:{
        borderColor: "black",
        shadowColor: "#893FF4",
        backgroundColor: qrCodeData.backgroundColor,
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.1,
        shadowRadius:20
    },
    lightCardWithBackground: {
        borderColor: "white",
        backgroundColor: qrCodeData.backgroundColor,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,
        elevation: 3,
    },
    lightSingleCard:{
        borderColor: "white",
        backgroundColor: qrCodeData.backgroundColor,
        // "#fafafa"
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3,
    },
    darkSingleCard:{
        borderColor: "black",
        backgroundColor: qrCodeData.backgroundColor,
        // "#110A16" || ,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3,
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
        padding: 10,
        marginBottom: 10,
    },
    nameText: {
        color: "grey",
        fontSize: 23,
        fontWeight: "700",
        flexWrap: "wrap",
    },
    phoneText:{
        color: "grey",
        fontSize: 17,
        fontWeight: "600",
        textDecorationColor: "#c2c2c2",
        flexWrap: "wrap",
    },
    positionText:{
        color: "#c4c4c4",
        fontSize: 19,
        fontWeight: "600",
        flexWrap: "wrap",
    },
    addressText:{
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
        flexWrap: "wrap",
    },
    emailText:{
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
    },
    websiteText:{
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
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
