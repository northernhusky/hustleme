import {StyleSheet} from "react-native";

export const getStyles = (card, topFont, bottomFont, topFontColor, bottomFontColor, backgroundColor, ITEM_HEIGHT,  ITEM_WIDTH) => StyleSheet.create({
    nameTextColor: {
        color: topFontColor || card.upperTextColor,
        fontFamily:topFont || card.upperFontStyle,
        fontSize: 22,
        fontWeight: "700",
    },
    phoneTextColor: {
        color: topFontColor || card.upperTextColor,
        fontFamily: topFont || card.upperFontStyle,
        fontSize: 17,
        fontWeight: "700",
        textDecorationColor: "#c2c2c2",
    },
    positionTextColor: {
        color: bottomFontColor || card.bottomTextColor,
        fontFamily: bottomFont || card.bottomFontStyle,
        fontSize: 24,
        fontWeight: "600",
    },
    bottomBlockTextColor: {
        color: bottomFontColor || card.bottomTextColor,
        fontFamily: bottomFont || card.bottomFontStyle,
        fontSize: 15,
        fontWeight: "500",
    },
    singleCard: {
        width:ITEM_WIDTH,
        height:ITEM_HEIGHT,
        top:"2%",
        borderRadius: 28,
        padding: 15,
        marginBottom: 15,
        backgroundColor: backgroundColor,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,
        elevation: 3,
        transform:([{rotate:"90deg"}]),
    },
    lightSingleCard:{
        backgroundColor: backgroundColor,
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,
        elevation: 3,
    },
    darkSingleCard:{
        backgroundColor: backgroundColor,
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
        shadowColor: "#110A16",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.22,
        resizeMode: 'cover',
        elevation: 3,
    },
    darkSingleCardWithBackgroundImage: {
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
        alignItems:"center",
        paddingLeft:35,
    },
    secondRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between",
        padding: 10,
        alignItems:"center",
        paddingLeft:35,
        paddingRight:35,
    },
    thirdRow:{
        flex: 1,
        padding: 10,
        marginBottom: 10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        paddingLeft:35,
        paddingRight:35,
    },
    nameText: {
        color: "grey",
        fontSize: 37,
        fontWeight: "700",
    },
    phoneText:{
        color: "grey",
        fontSize: 34,
        fontWeight: "600",
        textDecorationColor: "#c2c2c2"
    },
    positionText:{
        color: "#c4c4c4",
        fontSize:34,
        fontWeight: "600",
    },
    addressText:{
        color: "#c4c4c4",
        fontSize: 22,
        fontWeight: "500",
    },
    emailText:{
        color: "#c4c4c4",
        fontSize: 22,
        fontWeight: "500",
    },
    websiteText:{
        color: "#c4c4c4",
        fontSize: 22,
        fontWeight: "500",
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    imageBackgroundStyle: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        shadowColor: "#110A16",
        shadowOffset: {
            width: -4,
            height: 2,
        },
        shadowOpacity: 0.31,
        shadowRadius: 2.22,

        elevation: 3,
    },
    imageStyle: {
        borderRadius: 22,
        resizeMode: 'cover',
        transform:([{rotate:"90deg"}])
    }
})
