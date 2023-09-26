import {StyleSheet} from "react-native"

export const getStyles = (card, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont) => StyleSheet.create({
    nameTextColor: {
        color: topFontColor || card.upperTextColor,
        fontFamily:topFont || card.upperFontStyle,
        fontSize: 23,
        fontWeight: "700",
    },
    phoneTextColor:{
        color: topFontColor || card.upperTextColor,
        fontFamily: topFont || card.upperFontStyle,
        fontSize: 17,
        fontWeight: "700",
        textDecorationColor: "#c2c2c2",
    },
    positionTextColor: {
        color: bottomFontColor || card.bottomTextColor,
        fontFamily: bottomFont || card.bottomFontStyle,
        fontSize: 19,
        fontWeight: "600",
    },
    bottomBlockTextColor: {
        color: bottomFontColor || card.bottomTextColor,
        fontFamily: bottomFont || card.bottomFontStyle,
        fontSize: 15,
        fontWeight: "500",
    },
    singleCard: {
        width: '100%',
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
    cardWithBackground: {
        width: '100%',
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
    singleCardWithBackgroundImage: {
        width: '100%',
        height: 233,
        borderRadius: 22,
        justifyContent: "space-around",
        padding: 15,
        marginBottom: 15,
        borderColor: "white",
        borderWidth: 1,
        resizeMode: 'cover',
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

    elevation: 3,
    },
    darkSingleCardWithBackgroundImage: {
        borderColor: "black",
        shadowColor: "#893FF4",
        shadowOffset:{
            width:0,
            height:10
        },
        shadowOpacity:.1,
        shadowRadius: 20,
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
    },
    phoneText:{
        color: "grey",
        fontSize: 17,
        fontWeight: "600",
        textDecorationColor: "#c2c2c2"
    },
    positionText:{
        color: "#c4c4c4",
        fontSize: 19,
        fontWeight: "600",
    },
    addressText:{
        color: "#c4c4c4",
        fontSize: 15,
        fontWeight: "500",
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
    imageBackgroundStyle: {
        width: "100%",
        height: 233,
        marginBottom: 15,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,

        elevation: 3
    },
})
