import React, {useEffect, useState, useCallback} from 'react'
import {
    View,
    Alert,
    Modal,
    Text,
    TouchableOpacity,
    useColorScheme
} from "react-native";
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {createCard, getCards} from '../../../actions/card'
import {useDispatch} from "react-redux";
import { BlurView } from 'expo-blur';
import TransitionView from "../../animation/TransitionView";
import {styles} from "./styles/ScannerStyles"
import SharedCard from '../notifications/SharedCard'
import * as Haptics from 'expo-haptics';

const QRCodeScanner = ({scannerVisible, setScannerVisible}) => {

    const [qrCodeData, setQrCodeData] = useState("")
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showSharedCard, setShowSharedCard] = useState(false)

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const centeredViewStyle = colorScheme === 'light' ? styles.centeredView : styles.darkCenteredView;
    const scanBoldTextStyle = colorScheme === 'light' ? styles.lightScanBoldText : styles.darkScanBoldText;

    const dispatch = useDispatch()

    const popup = () => {
        setShowSharedCard(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }

    const backToDashboardHandler = useCallback(() => {
        setScannerVisible(false)
    }, [])

    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const handleBarCodeScanned = ({ data }) => {
        try {
            const parsedData = JSON.parse(data)
            setQrCodeData(parsedData)
            setScanned(true)
            dispatch(createCard(
                parsedData.name,
                parsedData.position,
                parsedData.phone,
                parsedData.address,
                parsedData.email,
                parsedData.website,
                parsedData.logo,
                parsedData.linkedIn,
                parsedData.backgroundColor,
                parsedData.backgroundImage,
                parsedData.isOwner,
                parsedData.upperTextColor,
                parsedData.bottomTextColor,
                parsedData.upperFontStyle,
                parsedData.bottomFontStyle,
            ))
            popup()
        } catch (e) {
            console.log(e)
        } finally {
            setScanned(false)
            dispatch(getCards())
            setScannerVisible(false)
        }
    }

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={scannerVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setScannerVisible(!scannerVisible);
                }}
            >
                 <BlurView tint={themeBlurTint} intensity={70} style={[styles.centeredView, centeredViewStyle]}>
                    <View style={styles.upper}>
                        <TransitionView delay={60}>
                            <Text style={styles.scanText}>Add a card</Text>
                        </TransitionView>
                        <TransitionView delay={110}>
                            <Text style={[styles.scanBoldText, scanBoldTextStyle]}>by scanner</Text>
                        </TransitionView>
                    </View>
                     <View style={styles.modalView}>
                        <Camera
                            style={styles.scanner}
                            barCodeScannerSettings={{barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],}}
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned.bind(this)}
                        />
                    </View>
                    <TransitionView delay={140}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={backToDashboardHandler}
                            activeOpacity={.7}
                        >
                            <Text style={styles.closeModal}>Back to Dashboard</Text>
                        </TouchableOpacity>
                    </TransitionView>

                 </BlurView>
            </Modal>

            <View>
                <SharedCard showAlert={showSharedCard} setShowAlert={setShowSharedCard} qrCodeData={qrCodeData} />
            </View>

        </View>
    )
}

export default QRCodeScanner;
