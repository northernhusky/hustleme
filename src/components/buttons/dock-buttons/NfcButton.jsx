import React, {useCallback} from "react"
import {View, TouchableOpacity, useColorScheme, Alert} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import * as Haptics from 'expo-haptics';
import {styles} from "./styles/NfcButtonStyles"
// import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
// import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

const NfcButton = ({nfcVisible, setNfcVisible}) => {

    const colorScheme = useColorScheme();
    const themeNfcButton = colorScheme === 'light' ? styles.lightNfcButton : styles.darkNfcButton;

    // NfcManager.start();

    // const nfcHandler = useCallback(() => {
    //     Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    //     setNfcVisible(!nfcVisible);
    // }, [])

    async function readNdef() {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        // try {
        //   // register for the NFC tag with NDEF in it
        //   await NfcManager.requestTechnology(NfcTech.Ndef);
        //   // the resolved tag object will contain `ndefMessage` property
        //   const tag = await NfcManager.getTag();
        //
        //   console.warn('Tag found', tag);
        //   console.log(tag)
        // } catch (ex) {
        //   console.warn('Oops!', ex);
        // } finally {
        //   // stop the nfc scanning
        //   NfcManager.cancelTechnologyRequest();
        // }
      }

    return(
        <View>
            <TouchableOpacity
                activeOpacity={.9}
                style={[styles.nfcButton, themeNfcButton]}
                onPress={readNdef}
            >
                <SvgXml xml={svgIcons.nfc} fill="#e06c0d" height={40} width={40} />
            </TouchableOpacity>
        </View>
    )
}

export default NfcButton;
