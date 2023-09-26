import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        paddingVertical: 5,
        position: 'relative',
        right: 0,
        left: 0,
    },
    lightContainer:{
        backgroundColor: 'white',
    },
    darkContainer:{
        backgroundColor: 'black',
    },
    blurRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: "0%",
        position: 'absolute',
        padding: "4%",
        borderTopWidth: 1,
        width: "100%",
        bottom: 0,
        height: 60,
        left: 0,
        right: 0,
    },
    lightBlurRow:{
        borderColor: "rgba(255,255,255, 0.65)",
    },
    darkBlurRow:{
        borderColor: "black",
    },
    buttonsRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: "0%",
        width: "100%",
        bottom: "160%",
        left: 0,
        right: 0,
    },
    topSafeArea: {
        flex: 0,
        backgroundColor: "red"
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: "green"
    },
});