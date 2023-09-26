import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingLeft:20,
        paddingRight:20,
    },
    lightContainer:{
        backgroundColor: 'white'
    },
    darkContainer:{
        backgroundColor: 'black'
    },
    inner: {
        flex: 1,
        justifyContent: "space-around",
    },
    welcome: {
        justifyContent:"center"
    },
    welcomeText: {
        fontSize: 33,
        fontWeight: 'normal',
        textAlign: "left",
        color: "#b8ced4"
    },
    logoText: {
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    lightLogoText:{
        color: "black"
    },
    darkLogoText:{
        color:'white'
    },
    inputs: {
        justifyContent: "center",
    },
    input: {
        height: 40,
        borderColor: "grey",
        borderBottomWidth: 1,
        marginBottom: 15,
        color: 'grey',
        fontSize: 19,
        fontWeight: "400",
    },
    errorMsg:{
        fontSize:10,
        color:"red"
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#00E6F6",
        padding: 10,
        height: 50,
        justifyContent:"center",
        borderRadius: 12,
    },
    buttonText: {
        color: 'black',
        fontSize: 19,
        fontWeight: '600',
    },
})