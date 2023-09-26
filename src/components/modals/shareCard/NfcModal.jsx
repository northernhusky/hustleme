import React, {useCallback, useRef} from 'react';
import {
    SafeAreaView,
    View,
    Modal,
    TouchableOpacity,
    useColorScheme
} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import { BlurView } from 'expo-blur';
import TransitionView from "../../animation/TransitionView";
import {styles} from "./styles/ShareCardStyles"
import LottieView from 'lottie-react-native';
import GestureRecognizer from "react-native-swipe-gestures";

const NfcModal = ({nfcVisible, setNfcVisible}) => {

    const colorScheme = useColorScheme();

    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const themeModalViewStyle = colorScheme === 'light' ? styles.modalView : styles.darkModalView;

    const closeModalHandler = useCallback(() => {
        setNfcVisible(false);
    }, [])

    const animation = useRef(null);

    return(
        <SafeAreaView>
            <GestureRecognizer
                onSwipe={closeModalHandler}
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={nfcVisible}
                    onRequestClose={closeModalHandler}>
                        <BlurView tint={themeBlurTint} intensity={50} style={[styles.modalView, themeModalViewStyle]}>
                            <TransitionView delay={60}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={closeModalHandler}
                                >
                                    <SvgXml xml={svgIcons.close} fill="rgba(110, 102, 120, .6)" height={50} width={50} />
                                </TouchableOpacity>
                            </TransitionView>
                                <View>
                                    <LottieView
                                        autoPlay
                                        ref={animation}
                                        style={{
                                            width: 450,
                                            height: 450,
                                            backgroundColor: 'transparent',
                                        }}
                                        source={require('../../../assets/lottie/nfc.json')}
                                    />
                                </View>
                        </BlurView>
                    </Modal>
                </GestureRecognizer>
        </SafeAreaView>
    )
}

export default NfcModal;
