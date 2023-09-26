import React, {useCallback} from "react"
import {View, TouchableOpacity, useColorScheme} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import {styles} from "./styles/ScannerButtonStyles"

const ScannerButton = ({setScannerVisible}) => {

    const colorScheme = useColorScheme();
    const themeScannerButton = colorScheme === 'light' ? styles.lightScannerButton : styles.darkScannerButton;

    const scannerHandler = useCallback(() => {
        setScannerVisible(true)
    }, [])

    return(
        <View>
            <TouchableOpacity
                activeOpacity={.9}
                style={[styles.addScannerButton, themeScannerButton]}
                onPress={scannerHandler}
            >
                <SvgXml xml={svgIcons.barcode} fill="#e06c0d" height={40} width={40} />
            </TouchableOpacity>
        </View>
    )
}

export default ScannerButton;
