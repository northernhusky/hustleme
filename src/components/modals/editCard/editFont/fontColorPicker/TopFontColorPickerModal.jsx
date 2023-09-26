import React from 'react';
import {View, Dimensions} from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import CloseModalButton from "../../../../buttons/CloseModalButton";
import Modal from "react-native-modal";
import {getStyles} from "../styles/TopFontStyles"

const TopFontColorPickerModal = ({topFontColorPickerVisible, setTopFontColorPickerVisible, topFontColor, setTopFontColor}) => {

    const {height} = Dimensions.get('screen')
    const PICKER_HEIGHT = (height - 233 - 30) * 0.87;

    const styles = getStyles(PICKER_HEIGHT);

    return(
        <Modal
            animationIn="zoomIn"
            animationInTiming={500}
            animationOut="fadeOut"
            isVisible={topFontColorPickerVisible}
            hasBackdrop={false}
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={{height:"100%", width: "100%", marginBottom: 20, paddingTop:30}}>
                    <CloseModalButton setModalVisible={setTopFontColorPickerVisible} />
                    <ColorPicker
                        style={{flex:1}}
                        defaultColor={topFontColor}
                        onColorSelected={color => {
                            setTopFontColorPickerVisible(false)
                            setTopFontColor(`${color}`)
                        }}
                        onColorChange={(color) => {
                            setTopFontColor(fromHsv(color))
                        }}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default TopFontColorPickerModal;
