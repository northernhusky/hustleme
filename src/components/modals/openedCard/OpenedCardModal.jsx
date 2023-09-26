import React, {useState, useCallback} from "react";
import {
    Modal,
    Text,
    SafeAreaView,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import CloseModalButton from "../../buttons/CloseModalButton";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import { BlurView } from 'expo-blur';
import TransitionView from "../../animation/TransitionView"
import ShareCardModal from "../../modals/shareCard/ShareCardModal"
import Slider from 'react-native-slide-to-unlock';
import CardWithImage from '../../cardList/card/cardSubComponents/CardWithImage'
import CardWithColor from '../../cardList/card/cardSubComponents/CardWithColor'
import {styles} from "./styles/OpenedCardStyles"
import TopButtons from './subComponents/openedCard/TopButtons'
import BottomButtons from './subComponents/openedCard/BottomButtons'
import * as Haptics from 'expo-haptics';
// import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

const OpenedCardModal = ({modalVisible, setModalVisible, card}) => {

    const [shareCardModal, setShareCardModal] = useState(false)
    const [editCardModalVisible, setEditCardModalVisible] = useState(false)
    const [fullScreenModalVisible, setFullScreenModalVisible] = useState(false)
    const [noteModalVisible, setNoteModalVisible] = useState(false)

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const themeModalViewStyle = colorScheme === 'light' ? styles.modalView : styles.darkModalView;
    const sliderTextTint = colorScheme === 'light' ? styles.sliderText : styles.darkSliderText

    const sliderHandler = useCallback(() => {
        setShareCardModal(true)
    }, [])

    const closeModalHandler = useCallback(() => {
        setModalVisible(!modalVisible)
    }, [modalVisible])

    const fullScreenHandler = useCallback(() => {
        setFullScreenModalVisible(true)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }, [])

    async function writeNdef({type, value}) {
        // let result = false;
        //
        // try {
        //   // STEP 1
        //   await NfcManager.requestTechnology(NfcTech.Ndef);
        //
        //   const bytes = Ndef.encodeMessage([Ndef.textRecord('Hello NFC')]);
        //
        //   if (bytes) {
        //     await NfcManager.ndefHandler // STEP 2
        //       .writeNdefMessage(bytes); // STEP 3
        //     result = true;
        //   }
        // } catch (ex) {
        //   console.warn(ex);
        // } finally {
        //   // STEP 4
        //   NfcManager.cancelTechnologyRequest();
        // }
        //
        // return result;
      }

    return(
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModalHandler}
            >
                <BlurView tint={themeBlurTint} intensity={80} style={[styles.modalView, themeModalViewStyle]}>
                <TransitionView style={{marginTop: 20}} delay={60}>
                    <CloseModalButton setModalVisible={setModalVisible} />
                </TransitionView>
                <TransitionView style={{marginTop: 10, width: "110%"}} delay={90}>
                    <TouchableOpacity
                        activeOpacity={.88}
                        onPress={fullScreenHandler}
                    >
                    {card.backgroundImage === "default" ?
                        <CardWithColor
                            card={card}
                            backgroundColor={card.backgroundColor}
                        />
                            :
                        <CardWithImage
                            card={card}
                        />
                    }
                    </TouchableOpacity>
                </TransitionView>

                <TopButtons card={card} />

                <ShareCardModal shareCardModal={shareCardModal} setShareCardModal={setShareCardModal} card={card} />
                    <TransitionView delay={250}>
                        <Slider
                            onEndReached={sliderHandler}
                            containerStyle={styles.sliderContainerStyle}
                            sliderElement={
                                <TouchableOpacity activeOpacity={.7}>
                                    <SvgXml
                                        style={{margin: 1}}
                                        xml={svgIcons.slideArrow}
                                        fill="grey"
                                        height={60}
                                        width={60}
                                    />
                                </TouchableOpacity>
                            }
                        >
                            <Text style={[styles.sliderText, sliderTextTint]}>{'slide to share'}</Text>
                        </Slider>
                    </TransitionView>

                    <BottomButtons
                        card={card}
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        editCardModalVisible={editCardModalVisible}
                        setEditCardModalVisible={setEditCardModalVisible}
                        fullScreenModalVisible={fullScreenModalVisible}
                        setFullScreenModalVisible={setFullScreenModalVisible}
                        noteModalVisible={noteModalVisible}
                        setNoteModalVisible={setNoteModalVisible}
                    />

                </BlurView>
            </Modal>
        </SafeAreaView>
    )
}

export default OpenedCardModal;
