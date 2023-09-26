import React, { useState, useCallback } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    Image,
    Alert
} from 'react-native';
import {createCard, getCards} from '../../../actions/card'
import {useDispatch} from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import * as Animatable from 'react-native-animatable';
import * as ImageManipulator from 'expo-image-manipulator';
import {CLOUDINARY_URL} from '../../../config'
import * as Haptics from 'expo-haptics';
import DoneModal from "../notifications/DoneModal";
import {styles} from "./styles/AddCardViewStyles"
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import TransitionView from "../../animation/TransitionView";
import {useInput} from "../../../screens/validators/ValidationRules";

const AddCardView = ({setModalVisible}) => {

    const name = useInput('', {isEmpty:true})
    const position = useInput('',{isEmpty:true})
    const phone = useInput('', {isEmpty:true})
    const address = useInput('', {isEmpty:true})
    const email = useInput('', {isEmpty:true, isEmail:true})

    const [website, setWebsite] = useState("")
    const [logo, setLogo] = useState("test");
    const [linkedIn, setLinkedIn] = useState("");
    const [showLinkedInInput, setShowLinkedInInput] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("rgba(255,255,255,0.1)")

    const [showAlert, setShowAlert] = useState(false);

    const colorScheme = useColorScheme();
    const themeSingleCardStyle = colorScheme === "light" ? styles.lightSingleCard : styles.darkSingleCard;
    const themeLinkedInInputStyle = colorScheme === "light" ? styles.linkedInInput : styles.linkedInInputDark

    const dispatch = useDispatch()

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          width: 100,
          height: 100,
          quality: 0,
          base64: true
        });

        const manipPhoto = await ImageManipulator.manipulateAsync(
            result.uri,
            [],
            {compress: 0, format: ImageManipulator.SaveFormat.PNG, base64: true,}
        );

        let apiUrl = CLOUDINARY_URL;

        let base64Img = `data:image/png;base64,${manipPhoto.base64}`

        let data = {
            "file": base64Img,
            "upload_preset": "rkfrupf2",
        }

        if (!result.cancelled) {
            fetch(apiUrl, {
                body: JSON.stringify(data),
                headers: {
                  'content-type': 'application/json'
                },
                method: 'POST'
              }).then(async response => {
                  let data = await response.json();
                  if (data.secure_url) {
                    setLogo(data.secure_url);
                  }
                })
                .catch(err => {
                  alert('Cannot upload');
            });
        }
    };

    function createCardHandler() {
        dispatch(createCard(name.value, position.value, phone.value, address.value, email.value, website, logo, linkedIn, backgroundColor))
        dispatch(getCards())
        setModalVisible(false)
        dispatch(getCards())
    }

    return(
        <View>
        <Animatable.View
            animation={!showLinkedInInput ? "flipInY" : "flipInX"}
            style={[styles.singleCard, themeSingleCardStyle]}>
            <View style={styles.firstRow}>
                <View>
                    <View style={styles.errorMsgViewSide}>
                        <TextInput
                            placeholder="Enter name"
                            placeholderTextColor="grey"
                            style={styles.nameInput}
                            value={name.value}
                            onChangeText={(e) => name.onChange(e)}
                            onBlur={(e) => name.onBlur(e)}
                        />
                        {(name.isDirty && name.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgSymbol}>*</Animatable.Text> }
                    </View>
                    {(name.isDirty && name.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgText}>Field cannot be empty</Animatable.Text> }
                </View>
                <Image style={{width: 30, height: 30, resizeMode: 'contain'}} source={{uri: logo}} />
                <TouchableOpacity onPress={pickImage} style={styles.chooseLogoButton}>
                    <Text style={styles.chooseLogoText}>Choose logo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.secondRow}>
                <View style={styles.errorMsgViewUnder}>
                    <View style={styles.errorMsgViewSide}>
                        <TextInput
                            placeholder="Enter description"
                            placeholderTextColor="grey"
                            style={styles.positionInput}
                            value={position.value}
                            onChangeText={(e) => position.onChange(e)}
                            onBlur={(e) => position.onBlur(e)}
                        />
                        {(position.isDirty && position.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgSymbol}>*</Animatable.Text> }
                    </View>
                    {(position.isDirty && position.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgText}>Field cannot be empty</Animatable.Text> }
                </View>
                <View style={styles.errorMsgViewUnder}>
                    <View style={styles.errorMsgViewSide}>
                        <TextInput
                            placeholder="Enter phone"
                            placeholderTextColor="grey"
                            style={styles.phoneInput}
                            value={phone.value}
                            onChangeText={(e) =>phone.onChange(e)}
                            onBlur={(e) => phone.onBlur(e)}
                        />
                        {(phone.isDirty && phone.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgSymbol}>*</Animatable.Text> }
                    </View>
                    {(phone.isDirty && phone.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgText}>Field cannot be empty</Animatable.Text> }
                </View>
            </View>
            <View style={styles.thirdRow}>
                <View>
                <View style={styles.errorMsgViewSide}>
                    <TextInput
                        placeholder="Enter address"
                        placeholderTextColor="grey"
                        style={styles.addressInput}
                        value={address.value}
                        onChangeText={(e) => address.onChange(e)}
                        onBlur={(e) => address.onBlur(e)}
                    />
                    {(address.isDirty &&  address.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgSymbol}>*</Animatable.Text> }
                    {(address.isDirty && address.isEmpty) && <Animatable.Text animation="bounceIn" style={[styles.errorMsgText, {marginLeft:5}]}>Field cannot be empty</Animatable.Text> }
                </View>
                <View style={styles.errorMsgViewSide}>
                    <TextInput
                        placeholder="Enter email"
                        placeholderTextColor="grey"
                        style={styles.emailInput}
                        value={email.value}
                        onChangeText={(e) => email.onChange(e)}
                        onBlur={(e) => email.onBlur(e)}
                    />
                    {(email.isDirty &&  email.isEmpty) && <Animatable.Text animation="bounceIn" style={styles.errorMsgSymbol}>*</Animatable.Text> }
                    {(email.isDirty && email.emailError) && <Animatable.Text animation="bounceIn" style={[styles.errorMsgText, {marginLeft:5}]}>Please enter valid email</Animatable.Text> }
                </View>
                <View style={styles.errorMsgViewSide}>
                    <TextInput
                        placeholder="Enter website"
                        placeholderTextColor="grey"
                        style={styles.websiteInput}
                        value={website}
                        onChangeText={(website) => setWebsite(website)}
                    />
                </View>
                </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => setShowLinkedInInput(!showLinkedInInput)}
                        >
                            <SvgXml
                                xml={svgIcons.linkedIn}
                                width={30}
                                height={30}
                                fill="grey"
                                opacity={.5}
                            />
                        </TouchableOpacity>
                    </View>
            </View>
        </Animatable.View>
            <View>
                {showLinkedInInput ?
                    <Animatable.View
                        delay={90}
                        animation={showLinkedInInput? "zoomIn" : "zoomOut"}
                        duration={430}
                    >
                        <SvgXml
                            xml={svgIcons.linkedIn}
                            style={{position:"absolute", zIndex:2, top:4, left:5}}
                            width={30}
                            height={30}
                            fill="grey"
                            opacity={.5}
                        />
                    <TextInput
                        placeholder="Paste link from LinkedIn"
                        placeholderTextColor="grey"
                        style={[styles.linkedInInput, themeLinkedInInputStyle]}
                        value={linkedIn}
                        onChangeText={(linkedIn) => setLinkedIn(linkedIn)}
                    />
                    </Animatable.View>
                    :
                    null
                }

            </View>

            <TransitionView delay={130}>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.addCardButton}
                    disabled={!name.inputValid || !position.inputValid || !phone.inputValid || !address.inputValid || !email.inputValid}
                    onPress={createCardHandler}
                >
                    <Text
                        style={styles.addCardText}
                    >
                        Add card</Text>
                </TouchableOpacity>
            </TransitionView>
        </View>
    );
};

export default AddCardView;
