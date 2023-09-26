import React, {useState, useCallback} from 'react';
import {
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    useColorScheme,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {useDispatch} from "react-redux";
import {registration} from "../actions/user";
import TransitionView from "../components/animation/TransitionView";
import * as Animatable from "react-native-animatable";
import {styles} from "./styles/RegistrationStyles"
import Checkbox from 'expo-checkbox';
import PrivacyModal from '../components/modals/privacy/PrivacyModal';
import {useInput} from "./validators/ValidationRules";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../assets/data/svgIcons";

const RegistrationScreen = ({navigation}) => {
    const email = useInput('', {isEmpty: true, isEmail:true})
    const password = useInput('', {isEmpty: true, minLength:4, maxLength:15})
    const checkbox = useInput(false, {isChecked:false})

    const [privacyModalVisible, setPrivacyModalVisible] = useState(false)

    const dispatch = useDispatch();

    const colorScheme = useColorScheme();

    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeLogoTextStyle = colorScheme === 'light' ? styles.lightLogoText : styles.darkLogoText;

    const registrationHandler = useCallback(() => {
        dispatch(registration(email.value, password.value))
        navigation.navigate('HustleMe')

    }, [email, password, checkbox])

    const privacyModalHandler = useCallback(() => {
        setPrivacyModalVisible(true)
    }, [])

    return(
        <KeyboardAvoidingView
            style={[styles.container, themeContainerStyle]}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <TransitionView style={styles.welcome}>
                        <TouchableOpacity
                            style={{marginBottom:10}}
                            onPress={() => navigation.navigate('HustleMe')}
                        >
                            <SvgXml xml={svgIcons.goBack} width={40} height={40} fill="grey" opacity={.5}/>
                        </TouchableOpacity>
                        <Text style={styles.welcomeText}>Create</Text>
                        <Text style={[styles.logoText, themeLogoTextStyle]}>new account</Text>
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

                        <TransitionView delay={189}>
                            <View style={styles.checkboxSection}>
                                <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <Checkbox
                                        style={{margin: 8}}
                                        value={checkbox.value}
                                        onValueChange={e => checkbox.onChange(e)}
                                        color={ checkbox.value === true ? '#4630EB' : undefined}
                                    />
                                </View>
                                <PrivacyModal privacyModalVisible={privacyModalVisible} setPrivacyModalVisible={setPrivacyModalVisible} />
                                <Text style={styles.privacyLink}>I agree with
                                    <TouchableOpacity onPress={privacyModalHandler}>
                                        <Text style={styles.privacyLinkBold}> Privacy Policy</Text>
                                    </TouchableOpacity>
                                </Text>
                            </View>
                            {(checkbox.isChecked) && <Animatable.Text animation="bounceIn" style={styles.errorMsg}>* required</Animatable.Text>}
                        </TransitionView>

                    </View>

                    <TransitionView delay={250}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={registrationHandler}
                            disabled={!email.inputValid || !password.inputValid || checkbox.isChecked}
                            activeOpacity={.9}
                        >
                            <Text style={(!email.inputValid || !password.inputValid || checkbox.isChecked) ? styles.buttonDisabled : styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </TransitionView>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default RegistrationScreen;