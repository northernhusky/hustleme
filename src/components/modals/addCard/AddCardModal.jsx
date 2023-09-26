import React, {useCallback} from "react";
import {
    View,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
    useColorScheme
} from "react-native";
import AddCardView from "./AddCardView";
import CloseModalButton from "../../buttons/CloseModalButton";
import { BlurView } from 'expo-blur';
import TransitionView from "../../animation/TransitionView";
import {styles} from "./styles/AddCardModalStyles"

const AddCardModal = ({modalVisible, setModalVisible}) => {

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";

    const closeModalHandler = useCallback(() => {
        setModalVisible(false)
    }, [])

    return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModalHandler}
            >
                <KeyboardAvoidingView
                    style={styles.centeredView}
                    behavior={Platform.OS === 'ios' ? "padding" : "height"}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <BlurView tint={themeBlurTint} intensity={2000} style={styles.centeredView}>
                            <View style={styles.upper}>
                                <TransitionView delay={90}>
                                    <CloseModalButton setModalVisible={setModalVisible} />
                                </TransitionView>
                            </View>
                            <TransitionView style={{width: "100%", alignItems: "center"}} delay={110} duration={230}>
                                <AddCardView setModalVisible={closeModalHandler}/>
                            </TransitionView>
                        </BlurView>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    )
}

export default AddCardModal;
