import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import CloseModalButton from "../../../buttons/CloseModalButton";
import Modal from "react-native-modal";
import {getStyles} from "./styles/ColorPickerStyles"

const ColorPickerModal = ({colorPickerVisible, setColorPickerVisible, backgroundColor, setBackgroundColor, setBackgroundIsColor}) => {

    const {height} = Dimensions.get('screen')
    const PICKER_HEIGHT = (height - 233 - 30) * 0.87;

    const styles = getStyles(PICKER_HEIGHT);

    return(
        <Modal
            animationType="zoomIn"
            animationInTiming={500}
            animationOut="fadeOut"
            transparent={true}
            isVisible={colorPickerVisible}
            hasBackdrop={false}
        >
            <View style={styles.centeredView}>
                <View style={{height:"95%", width: "90%", marginBottom: 20}}>
                    <CloseModalButton setModalVisible={setColorPickerVisible} />
                    <ColorPicker
                        style={{flex:1}}
                        defaultColor={backgroundColor}
                        onColorSelected={color => {
                            setColorPickerVisible(false)
                            setBackgroundIsColor(true)
                            setBackgroundColor(`${color}`)
                        }}
                        onColorChange={(color) => {
                            setBackgroundColor(fromHsv(color))
                        }}
                        hideSliders={false}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ColorPickerModal;
