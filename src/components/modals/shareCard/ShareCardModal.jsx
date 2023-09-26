import React, {useCallback} from 'react';
import {
    SafeAreaView,
    View,
    Modal,
    Text,
    TouchableOpacity,
    useColorScheme
} from "react-native";
import QRCode from 'react-native-qrcode-svg';
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import { BlurView } from 'expo-blur';
import TransitionView from "../../../components/animation/TransitionView";
import {styles} from "./styles/ShareCardStyles"

const ShareCardModal = ({shareCardModal, setShareCardModal, card}) => {

    const colorScheme = useColorScheme();

    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const themeModalViewStyle = colorScheme === 'light' ? styles.modalView : styles.darkModalView;
    const themeAboutNameStyle = colorScheme === 'light' ? styles.lightAboutName : styles.darkAboutName;
    const themeAboutPosition = colorScheme === 'light' ? styles.lightAboutPosition : styles.darkAboutPosition;
    const themeDescription = colorScheme === 'light' ? styles.lightDescription : styles.darkDescription;

    const singleCardData = JSON.stringify({
        name: card.name,
        position: card.position,
        address: card.email,
        phone: card.phone,
        email: card.email,
        website: card.website,
        logo: card.logo,
        linkedIn: card.linkedIn,
        backgroundColor: card.backgroundColor,
        backgroundImage: card.backgroundImage,
        upperTextColor: card.upperTextColor,
        bottomTextColor: card.bottomTextColor,
        upperFontStyle: card.upperFontStyle,
        bottomFontStyle: card.bottomFontStyle,
        isOwner: "false",
    })

    const closeModalHandler = useCallback(() => {
        setShareCardModal(!shareCardModal)
    }, [])

    return(
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={shareCardModal}
                onRequestClose={closeModalHandler}>
                <BlurView tint={themeBlurTint} intensity={2000} style={[styles.modalView, themeModalViewStyle]}>
                    <TransitionView delay={60}>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setShareCardModal(false)}
                        >
                            <SvgXml xml={svgIcons.close} fill="rgba(110, 102, 120, .6)" height={50} width={50} />
                        </TouchableOpacity>
                    </TransitionView>

                        <View style={styles.qrCodeContainer}>
                            <QRCode size={170} value={singleCardData}/>
                        </View>

                    <View>
                        <View style={styles.aboutContainer}>
                            <Text style={[styles.aboutName, themeAboutNameStyle]}>{card.name}</Text>
                            <Text style={[styles.aboutPosition, themeAboutPosition]}>{card.position}</Text>
                        </View>
                        <View style={styles.contactContainer}>
                            <View style={styles.contactRowWrapper}>
                                <SvgXml style={{marginRight:10}} xml={svgIcons.location} fill="orange" height={20} width={20} />
                                <Text style={[styles.description, themeDescription]}>{card.address}</Text>
                            </View>
                            <View style={styles.contactRowWrapper}>
                                <SvgXml style={{marginRight:10}} xml={svgIcons.phone} fill="#4bb87f" height={20} width={20} />
                                <Text style={[styles.description, themeDescription]}>{card.phone}</Text>
                            </View>
                        </View>

                        <View style={styles.socialContainer}>
                            <View style={styles.contactRowWrapper}>
                                <SvgXml style={{marginRight:10}} xml={svgIcons.web} fill="#03c6fc" height={20} width={20} />
                                <Text style={[styles.description, themeDescription]}>{card.website}</Text>
                            </View>
                            <View style={styles.contactRowWrapper}>
                                <SvgXml style={{marginRight:10}} xml={svgIcons.email} fill="#03c6fc" height={20} width={20} />
                                <Text style={[styles.description, themeDescription]}>{card.email}</Text>
                            </View>
                            {!card.linkedIn ?
                                null
                            : 
                            <View style={styles.contactRowWrapper}>
                                <SvgXml style={{marginRight:10}} xml={svgIcons.linkedIn} fill="#03c6fc" height={20} width={20} />
                                <Text style={[styles.description, themeDescription]}>{card.linkedIn}</Text>
                            </View>
                            }
                        </View>
                    </View>
                </BlurView>
                </Modal>
        </SafeAreaView>
    )
}

export default ShareCardModal;
