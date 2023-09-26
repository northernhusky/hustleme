import React, {useState, useCallback} from 'react'
import {
    Keyboard,
    Modal,
    TouchableWithoutFeedback,
    useColorScheme,
    View,
} from 'react-native'
import {BlurView} from "expo-blur";
import TransitionView from "../../animation/TransitionView";
import CloseModalButton from "../../buttons/CloseModalButton";
import EditableCardItem from "./EditableCardItem";
import ColorChangeAnimation from "../../animation/ColorChangeAnimation";
import {styles} from "./styles/EditCardModalStyles"

const EditCardModal = ({editCardModalVisible, setEditCardModalVisible, card}) => {

    const [colorPickerVisible, setColorPickerVisible] = useState(false);

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";

    const closeModalHandler = useCallback(() => {
        setEditCardModalVisible(!editCardModalVisible)
    }, [editCardModalVisible])

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={editCardModalVisible}
                onRequestClose={closeModalHandler}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <BlurView
                        tint={themeBlurTint} intensity={2000}
                        style={!colorPickerVisible ? styles.centeredView : styles.topView}
                    >
                        <View style={styles.upper}>
                            <TransitionView delay={90}>
                                {
                                    !colorPickerVisible ?
                                        <CloseModalButton setModalVisible={setEditCardModalVisible} /> : null
                                }
                            </TransitionView>
                        </View>
                            <ColorChangeAnimation
                                animation={!colorPickerVisible ? 'fadeIn' : 'zoomIn'}
                                style={{marginTop: 10, width: "90%"}}>
                                    <EditableCardItem
                                        card={card}
                                        setColorPickerVisible={setColorPickerVisible}
                                        colorPickerVisible={colorPickerVisible}
                                        editCardModalVisible={editCardModalVisible}
                                        setEditCardModalVisible={setEditCardModalVisible}
                                        topFont={card.upperFontStyle}
                                        bottomFont={card.bottomFontStyle}
                                        topFontColor={card.upperTextColor}
                                        bottomFontColor={card.bottomTextColor}
                                    />
                            </ColorChangeAnimation>
                    </BlurView>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

export default EditCardModal;
