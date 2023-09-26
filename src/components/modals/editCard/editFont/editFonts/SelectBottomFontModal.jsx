import React, {useCallback} from 'react';
import Modal from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';
import * as Font from 'expo-font';

export async function useCustomFonts() {
    await Font.loadAsync({
        Arima: require("../../../../../assets/fonts/Arima-Regular.ttf"),
        PlexMono: require("../../../../../assets/fonts/IBMPlexMono-Regular.ttf"),
        JosefinSans: require("../../../../../assets/fonts/JosefinSans-Regular.ttf"),
        Montserrat: require("../../../../../assets/fonts/Montserrat-Regular.ttf"),
        Roboto: require("../../../../../assets/fonts/Roboto-Regular.ttf"),
    });
}

const SelectBottomFontModal = ({selectBottomFontPickerVisible, setSelectBottomFontPickerVisible, bottomFont, setBottomFont}) => {

    const closeModalHandler = useCallback(() => {
        setSelectBottomFontPickerVisible(false)
    }, [selectBottomFontPickerVisible])

    return(
        <Modal
            animationIn="zoomIn"
            animationInTiming={500}
            animationOut="fadeOut"
            isVisible={selectBottomFontPickerVisible}
            hasBackdrop={true}
            backdropOpacity={0}
            onBackdropPress={closeModalHandler}
            transparent={true}
        >
            <Picker
                style={{ backgroundColor: 'white', width: "100%", height: 215, borderRadius:12 }}
                selectedValue={bottomFont}
                onValueChange={value => {
                    setBottomFont(value)
                }}
            >
                <Picker.Item label="Arima" value="Arima" />
                <Picker.Item label="PlexMono" value="PlexMono" />
                <Picker.Item label="JosefinSans" value="JosefinSans" />
                <Picker.Item label="Montserrat" value="Montserrat" />
                <Picker.Item label="Roboto" value="Roboto" />
            </Picker>
        </Modal>
    )
}

export default SelectBottomFontModal
