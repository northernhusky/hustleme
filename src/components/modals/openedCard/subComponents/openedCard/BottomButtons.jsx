import React, {useCallback} from 'react'
import {styles} from "../../styles/OpenedCardStyles"
import {
    View,
    TouchableOpacity,
    Alert,
} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../../../assets/data/svgIcons";
import NoteModal from "../../../editCard/editNote/NoteModal"
import * as Haptics from 'expo-haptics';
import EditCardModal from "../../../editCard/EditCardModal";
import FullScreenCardModal from "../../FullScreenCardModal";
import {deleteCard} from "../../../../../actions/card"
import {useDispatch} from "react-redux";
import TransitionView from "../../../../animation/TransitionView"

const BottomButtons = ({
    card, 
    modalVisible, 
    setModalVisible,
    editCardModalVisible, 
    setEditCardModalVisible, 
    fullScreenModalVisible, 
    setFullScreenModalVisible, 
    noteModalVisible, 
    setNoteModalVisible
}) => {

    const dispatch = useDispatch()

    function deleteCardHandler() {
        dispatch(deleteCard(card))
        setModalVisible(!modalVisible)
    }

    const deleteAlert = useCallback(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)
        Alert.alert('Delete card', 'Are you sure you want you want to delete this card?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'DELETE', onPress: () => deleteCardHandler() },
        ])
    }, [])

    const editCardHandler = useCallback(() => {
        setEditCardModalVisible(true)
    }, [])

    const fullScreenHandler = useCallback(() => {
        setFullScreenModalVisible(true)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    }, [])

    const editNoteHandler = useCallback(() => {
        setNoteModalVisible(true)
    }, [])

    return (
        <View style={styles.footerButtonWrapper}>
            
            <EditCardModal editCardModalVisible={editCardModalVisible} setEditCardModalVisible={setEditCardModalVisible} card={card} />

            <TransitionView delay={250}>
                <TouchableOpacity
                    style={styles.deleteCardButton}
                    onPress={deleteAlert}
                >
                    <SvgXml xml={svgIcons.delete} fill="grey" height={40} width={40} />
                </TouchableOpacity>
            </TransitionView>

            {card.isOwner === "false" ?
                null
            :
                <TransitionView delay={300}>
                    <TouchableOpacity
                        style={styles.deleteCardButton}
                        onPress={editCardHandler}
                    >
                        <SvgXml style={{marginLeft: 20}} xml={svgIcons.edit} fill="grey" height={40} width={40} />
                    </TouchableOpacity>
                </TransitionView>
            }

            <NoteModal noteModalVisible={noteModalVisible} setNoteModalVisible={setNoteModalVisible} card={card} />

            <TransitionView delay={330}>
                <TouchableOpacity
                    style={styles.deleteCardButton}
                    onPress={editNoteHandler}
                >
                    <SvgXml style={{marginLeft:20}} xml={svgIcons.note} fill="grey" height={40} width={40} />
                </TouchableOpacity>
            </TransitionView>

            <FullScreenCardModal fullScreenModalVisible={fullScreenModalVisible} setFullScreenModalVisible={setFullScreenModalVisible} card={card} />

                <TransitionView delay={380}>
                    <TouchableOpacity
                        style={styles.deleteCardButton}
                        onPress={fullScreenHandler}
                    >
                        <SvgXml style={{marginLeft:20}} xml={svgIcons.fullScreen} fill="grey" height={40} width={40} />
                    </TouchableOpacity>
                </TransitionView>
        </View>
    )
}

export default BottomButtons;