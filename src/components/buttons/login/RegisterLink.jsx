import React, {memo, useCallback} from "react";
import {Text, TouchableOpacity, View, useColorScheme} from "react-native";
import {styles} from "./styles/RegisterLinkStyles"

const RegisterLink = ({navigation}) => {

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightRegisterButton : styles.darkRegisterButton;

    const registrationLinkHandler = useCallback(() => {
        navigation.navigate('Register')
    }, [])

    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <View style={styles.registerBlock}>
                    <Text style={styles.noAccountText}>No account?</Text>
                    <Text
                        style={[styles.registerButton, themeTextStyle]}
                        onPress={registrationLinkHandler}
                    >Register</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default memo(RegisterLink);
