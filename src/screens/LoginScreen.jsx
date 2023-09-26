import React, {useCallback, useRef} from 'react';
import {
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    useColorScheme, 
    TextInput, 
    TouchableOpacity
} from 'react-native';
import RegisterLink from "../components/buttons/login/RegisterLink";
import TransitionView from "../components/animation/TransitionView";
import * as Animatable from "react-native-animatable";
import {login} from "../actions/user";
import {useDispatch} from "react-redux";
import {styles} from "./styles/LoginStyles"
import LottieView from 'lottie-react-native';
import {useInput} from "./validators/ValidationRules";

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const animation = useRef(null);

    const email = useInput('', {isEmpty: true, isEmail:true})
    const password = useInput('', {isEmpty: true, minLength:4, maxLength:15})

    const colorScheme = useColorScheme();

    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeLogoTextStyle = colorScheme === 'light' ? styles.lightLogoText : styles.darkLogoText;

    const loginHandler = useCallback(() => {
        dispatch(login(email.value, password.value))
        navigation.navigate('HustleMe')
    }, [email, password])

    return(
        <KeyboardAvoidingView
            style={[styles.container, themeContainerStyle]}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                    backgroundColor: 'transparent',
                    transform: [{ scale: 2 }]
                    }}
                    source={require('../assets/lottie/glass.json')}
                />
                    <TransitionView style={styles.welcome}>
                        <Text style={styles.welcomeText}>Welcome to</Text>
                        <Text style={[styles.logoText, themeLogoTextStyle]}>HustleMe!</Text>
                    </TransitionView>
                    <View style={styles.inputs}>
                        <TransitionView delay={60}>
                            <TextInput
                                placeholder="Enter your email"
                                style={styles.input}
                                value={email.value}
                                onChangeText={e => email.onChange(e)}
                                onBlur={e => email.onBlur(e)}
                            />
                            {(email.isDirty && email.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsg}>Email cannot be empty</Animatable.Text> }
                            {(email.isDirty && email.emailError) && <Animatable.Text animation="bounceIn" style={styles.errorMsg}>Email is not valid</Animatable.Text> }
                        </TransitionView>

                        <TransitionView delay={144}>
                            <TextInput
                                placeholder="Enter your password"
                                style={styles.input}
                                secureTextEntry={true}
                                value={password.value}
                                onChangeText={e => password.onChange(e)}
                                onBlur={e => password.onBlur(e)}
                            />
                            {(password.isDirty && password.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsg}>Password cannot be empty</Animatable.Text>}
                            {(password.isDirty && password.minLengthError) && <Animatable.Text animation="bounceIn" style={styles.errorMsg}>Password should be at least 4 characters long</Animatable.Text>}
                            {(password.isDirty && password.maxLengthError) && <Animatable.Text animation="bounceIn" style={styles.errorMsg}>Password shouldn't be longer then 15 characters1</Animatable.Text>}
                        </TransitionView>

                        <TransitionView delay={190}>
                            <RegisterLink navigation={navigation} />
                        </TransitionView>
                    </View>
                    <TransitionView delay={250}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={loginHandler}
                            disabled={!email.inputValid || !password.inputValid}
                            activeOpacity={.9}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </TransitionView>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
