import React, {useCallback} from 'react';
import Modal from 'react-native-modal';
import {Picker} from '@react-native-picker/picker';
import {useFonts} from "expo-font";

const SelectTopFontModal = ({selectTopFontPickerVisible, setSelectTopFontPickerVisible, topFont, setTopFont}) => {

    const [loaded] = useFonts({
        Arima:require("../../../../../assets/fonts/Arima-Regular.ttf"),
        PlexMono:require("../../../../../assets/fonts/IBMPlexMono-Regular.ttf"),
        JosefinSans:require("../../../../../assets/fonts/JosefinSans-Regular.ttf"),
        Montserrat:require("../../../../../assets/fonts/Montserrat-Regular.ttf"),
        Roboto:require("../../../../../assets/fonts/Roboto-Regular.ttf"),
    })

    const closeModalHandler = useCallback(() => {
        setSelectTopFontPickerVisible(false)
    }, [])

    return(
        <Modal
            animationIn="zoomIn"
            animationInTiming={500}
            animationOut="fadeOut"
            isVisible={selectTopFontPickerVisible}
            hasBackdrop={true}
            backdropOpacity={0}
            onBackdropPress={closeModalHandler}
            transparent={true}
        >
            <Picker
                style={{ backgroundColor: 'white', width: "100%", height: 215, borderRadius:12 }}
                selectedValue={topFont}
                onValueChange={value => {
                    setTopFont(value)
                }}
            >
                <Picker.Item fontFamily="Arima" value="Arima" />
                <Picker.Item label="PlexMono" value="PlexMono" />
                <Picker.Item label="JosefinSans" value="JosefinSans" />
                <Picker.Item label="Montserrat" value="Montserrat" />
                <Picker.Item label="Roboto" value="Roboto" />
            </Picker>
        </Modal>
    )
}

export default SelectTopFontModal
