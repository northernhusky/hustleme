import React, {useCallback, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Modal,
    Text,
    TouchableOpacity,
    useColorScheme,
} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../../assets/data/svgIcons";
import { BlurView } from 'expo-blur';
import TransitionView from "../../../animation/TransitionView";
import {styles} from "./styles/NoteModalStyles"
import {
    getCards, 
    editNote,
} from "../../../../actions/card";
import * as Haptics from 'expo-haptics';
import {useDispatch} from "react-redux";

const NoteModal = ({noteModalVisible, setNoteModalVisible, card, showAlert, setShowAlert}) => {

    const [note, setNote] = useState(card.note)
    
    const colorScheme = useColorScheme();

    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const themeModalViewStyle = colorScheme === 'light' ? styles.modalView : styles.darkModalView;
    const themeTextStyle = colorScheme === 'light' ? styles.lightDescription : styles.darkDescription;

    const dispatch = useDispatch()

    const closeModalHandler = useCallback(() => {
        setNoteModalVisible(false);
    }, [])

    const updateNoteHandler = useCallback(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        dispatch(editNote(card, note))
        dispatch(getCards())
    }, [note])
    
    return(
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={noteModalVisible}
                        onRequestClose={closeModalHandler}>
                            <BlurView tint={themeBlurTint} intensity={500} style={[styles.modalView, themeModalViewStyle]}>
                                <TransitionView delay={60}>
                                    <TouchableOpacity
                                        style={styles.closeButton}
                                        onPress={closeModalHandler}
                                    >
                                        <SvgXml xml={svgIcons.close} fill="rgba(110, 102, 120, .6)" height={50} width={50} />
                                    </TouchableOpacity>
                                </TransitionView>
                                <TransitionView style={styles.heading}>
                                    <Text style={styles.headingText}>Notes</Text>
                                </TransitionView>
                                    <ScrollView 
                                        style={styles.scrollView}
                                        showsVerticalScrollIndicator={false}
                                    >
                                        <View style={{width: '100%'}}>
                                            <TextInput 
                                                style={[styles.description, themeTextStyle]} 
                                                value={note} 
                                                multiline={true}
                                                placeholder={card.note}
                                                onChangeText={(note) => setNote(note)}>
                                            </TextInput>
                                        </View>
                                    </ScrollView>
                                    <TransitionView delay={220}>
                                    <TouchableOpacity
                                        style={{marginBottom: 30}}
                                        onPress={updateNoteHandler}
                                    >
                                        <SvgXml xml={svgIcons.save} height={55} width={55} fill="#8ddc5c" />
                                    </TouchableOpacity>
                                </TransitionView>
                            </BlurView>
                        </Modal>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default NoteModal;