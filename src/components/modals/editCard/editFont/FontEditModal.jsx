import React, {useState, useCallback} from 'react';
import {View, Modal, useColorScheme, TouchableOpacity} from "react-native";
import {BlurView} from "expo-blur";
import CloseModalButton from "../../../buttons/CloseModalButton";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../../assets/data/svgIcons";
import TransitionView from "../../../animation/TransitionView";
import TopFontColorPickerModal from "./fontColorPicker/TopFontColorPickerModal";
import ColorChangeAnimation from "../../../animation/ColorChangeAnimation";
import BottomFontColorPickerModal from "./fontColorPicker/BottomFontColorPickerModal";
import {
    getCards,
    updateCardBottomFontStyle,
    updateCardBottomText,
    updateCardUpperFontStyle,
    updateCardUpperText
} from "../../../../actions/card";
import {useDispatch} from "react-redux";
import CardWithImage from '../../../cardList/card/cardSubComponents/CardWithImage'
import CardWithColor from '../../../cardList/card/cardSubComponents/CardWithColor'
import DoneModal from "../../notifications/DoneModal";
import * as Haptics from "expo-haptics";
import {styles} from "./styles/FontEditModalStyles"
import SelectTopFontModal from "./editFonts/SelectTopFontModal";
import SelectBottomFontModal from "./editFonts/SelectBottomFontModal";
import TopFontColorButtons from "./subComponents/buttonsRow/TopFontColorButtons"
import BottomFontColorButtons from "./subComponents/buttonsRow/BottomFontColorButtons"

const FontEditModal = ({fontEditModalVisible, setFontEditModalVisible, card}) => {

    const dispatch = useDispatch();

    const [topFontColor, setTopFontColor] = useState(card.upperTextColor);
    const [bottomFontColor, setBottomFontColor] = useState(card.bottomTextColor);
    const [topFontColorPickerVisible, setTopFontColorPickerVisible] = useState(false);
    const [bottomFontColorPickerVisible, setBottomFontColorPickerVisible] = useState(false);
    const [topFont, setTopFont] = useState(card.upperFontStyle)
    const [selectTopFontPickerVisible, setSelectTopFontPickerVisible] = useState(false);
    const [bottomFont, setBottomFont] = useState(card.bottomFontStyle);
    const [selectBottomFontPickerVisible, setSelectBottomFontPickerVisible] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";

    function updateFontFamily() {
        setTopFont(topFont)
        setBottomFont(bottomFont)
        dispatch(updateCardUpperFontStyle(card, topFont))
        dispatch(updateCardBottomFontStyle(card, bottomFont))
    }

    function updateFontColor() {
        setTopFontColor(topFontColor)
        setBottomFontColor(bottomFontColor)
        dispatch(updateCardUpperText(card, topFontColor))
        dispatch(updateCardBottomText(card, bottomFontColor))
    }

    function updateFontStyle() {
        updateFontFamily()
        updateFontColor()
        dispatch(getCards())
        setShowAlert(true)
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        dispatch(getCards())
    }

    const closeModalHandler = useCallback(() => {
        setFontEditModalVisible(!fontEditModalVisible)
    }, [])

    return(
        <TransitionView delay={120}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={fontEditModalVisible}
                onRequestClose={closeModalHandler}
            >
                <BlurView
                    tint={themeBlurTint}
                    intensity={2000}
                    style={(!topFontColorPickerVisible && !bottomFontColorPickerVisible && !selectTopFontPickerVisible && !selectBottomFontPickerVisible) ? styles.centeredView : styles.topView}
                >
                    <TopFontColorPickerModal
                        topFontColorPickerVisible={topFontColorPickerVisible}
                        setTopFontColorPickerVisible={setTopFontColorPickerVisible}
                        setTopFontColor={setTopFontColor}
                        topFontColor={topFontColor}
                    />
                    <BottomFontColorPickerModal
                        bottomFontColor={bottomFontColor}
                        bottomFontColorPickerVisible={bottomFontColorPickerVisible}
                        setBottomFontColor={setBottomFontColor}
                        setBottomFontColorPickerVisible={setBottomFontColorPickerVisible}
                    />
                    <SelectTopFontModal
                        card={card}
                        selectTopFontPickerVisible={selectTopFontPickerVisible}
                        setSelectTopFontPickerVisible={setSelectTopFontPickerVisible}
                        topFont={topFont}
                        setTopFont={setTopFont}
                    />
                    <SelectBottomFontModal
                        bottomFont={bottomFont}
                        setBottomFont={setBottomFont}
                        selectBottomFontPickerVisible={selectBottomFontPickerVisible}
                        setSelectBottomFontPickerVisible={setSelectBottomFontPickerVisible}
                    />

                    {(!topFontColorPickerVisible && !bottomFontColorPickerVisible && !selectTopFontPickerVisible &&!selectBottomFontPickerVisible) ?
                        <View>
                            <CloseModalButton setModalVisible={setFontEditModalVisible} />
                            <TopFontColorButtons 
                                setTopFontColorPickerVisible={setTopFontColorPickerVisible}
                                setTopFontColor={setTopFontColor}
                                setSelectTopFontPickerVisible={setSelectTopFontPickerVisible}
                            />
                        </View>
                        :
                        null
                    }
                    <ColorChangeAnimation
                        delay={120}
                        animation={(!topFontColorPickerVisible && !bottomFontColorPickerVisible && !selectTopFontPickerVisible && !selectBottomFontPickerVisible) ? "fadeIn" : "zoomIn"}
                        style={[(!topFontColorPickerVisible && !bottomFontColorPickerVisible && !selectTopFontPickerVisible && !selectBottomFontPickerVisible)  ? {width:"110%"} : {width:"90%"}, {marginTop:10}]}
                    >
                        {card.backgroundImage === "default" ?
                            <CardWithColor
                                card={card}
                                backgroundColor={card.backgroundColor}
                                bottomFontColor={bottomFontColor}
                                topFontColor={topFontColor}
                                topFont={topFont}
                                bottomFont={bottomFont}
                            />
                            :
                            <CardWithImage
                                card={card}
                                bottomFontColor={bottomFontColor}
                                topFontColor={topFontColor}
                                topFont={topFont}
                                bottomFont={bottomFont}
                            />
                        }
                    </ColorChangeAnimation>

                    {(!topFontColorPickerVisible && !bottomFontColorPickerVisible && !selectTopFontPickerVisible && !selectBottomFontPickerVisible) ?
                        <View style={{flexDirection:"column"}}>

                            <BottomFontColorButtons
                                setBottomFontColorPickerVisible={setBottomFontColorPickerVisible}
                                setBottomFontColor={setBottomFontColor}
                                setSelectBottomFontPickerVisible={setSelectBottomFontPickerVisible}
                            />

                            <View style={{alignItems:"center"}}>
                                <TransitionView delay={220}>
                                    <TouchableOpacity
                                        style={styles.saveButton}
                                        onPress={() => updateFontStyle()}
                                    >
                                        <SvgXml xml={svgIcons.save} height={55} width={55} fill="#8ddc5c" />
                                    </TouchableOpacity>
                                </TransitionView>
                            </View>
                        </View>
                        :
                        null
                    }
                </BlurView>

                <View>
                    <DoneModal showAlert={showAlert} setShowAlert={setShowAlert} />
                </View>

            </Modal>
        </TransitionView>
    )
}

export default FontEditModal;
