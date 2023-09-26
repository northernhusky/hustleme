import React from 'react';
import {View, Dimensions} from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import CloseModalButton from "../../../../buttons/CloseModalButton";
import Modal from "react-native-modal";
import {getStyles} from "../styles/BottomFontStyles"

const BottomFontColorPickerModal = ({bottomFontColorPickerVisible, setBottomFontColorPickerVisible, bottomFontColor, setBottomFontColor}) => {

    const {height} = Dimensions.get('screen')
    const PICKER_HEIGHT = (height - 233 - 30) * 0.87;

    const styles = getStyles(PICKER_HEIGHT);

    return(
        <Modal
            animationIn="zoomIn"
            animationInTiming={500}
            animationOut="fadeOut"
            isVisible={bottomFontColorPickerVisible}
            hasBackdrop={false}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={{height:"100%", width: "100%", marginBottom: 20, paddingTop:30}}>
                    <CloseModalButton setModalVisible={setBottomFontColorPickerVisible} />
                    <ColorPicker
                        style={{flex:1}}
                        defaultColor={bottomFontColor}
                        onColorSelected={color => {
                            setBottomFontColorPickerVisible(false)
                            setBottomFontColor(`${color}`)
                        }}
                        onColorChange={(color) =>{
                            setBottomFontColor(fromHsv(color))
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default BottomFontColorPickerModal;
