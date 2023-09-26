import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useCallback} from 'react';
import LoginScreen from './src/screens/LoginScreen'
import Dashboard from './src/screens/Dashboard'
import { StyleSheet, View } from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./src/actions/user";
import 'localstorage-polyfill';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import {useCustomFonts} from './src/components/modals/editCard/editFont/editFonts/SelectBottomFontModal';
import AppLoading from "expo-app-loading";
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Application() {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(auth())
        LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
        LogBox.ignoreAllLogs();//Ignore all log notifications
    }, [])

    const LoadFonts = async () => {
        await useCustomFonts();
    };

    if(!fontsLoaded) {
        return(
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => setFontsLoaded(true)}
                onError={() => {}}
            />
        );
    }
    return (
        <NavigationContainer>
            <View style={styles.container}>
                {!isAuth ?
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}
                    >
                        <Stack.Screen name='HustleMe' component={LoginScreen}/>
                        <Stack.Screen name='Register' component={RegistrationScreen}/>
                    </Stack.Navigator>
                    :
                    <Dashboard/>
                }
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
