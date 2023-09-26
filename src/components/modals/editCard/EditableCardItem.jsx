import React, {useState, useCallback} from 'react';
import {View, TouchableOpacity} from 'react-native';
import TransitionView from "../../animation/TransitionView";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import ColorPickerModal from "./editBackground/ColorPickerModal";
import ChooseImageModal from "./editBackground/ChooseImageModal";
import {
    getCards, 
    updateCard, 
    updateCardBackgroundImage,
    updateName,
    updateAddress,
    updateEmail,
    updateRole,
    updateTelephone,
    updateWebsite,
} from "../../../actions/card";
import {useDispatch} from "react-redux";
import FontEditModal from "./editFont/FontEditModal";
import * as Haptics from 'expo-haptics';
import DoneModal from "../notifications/DoneModal";
import {styles} from "./styles/EditCardItemStyles";
import EditableCardWithColor from "../../cardList/card/cardSubComponents/editableCardSubComponent/EditableCardWithColor";
import EditableCardWithImage from "../../cardList/card/cardSubComponents/editableCardSubComponent/EditableCardWithImage";

const EditableCardItem = ({card, colorPickerVisible, setColorPickerVisible, editCardModalVisible, setEditCardModalVisible, bottomFontColor, topFontColor}) => {

    const dispatch = useDispatch();

    const [chooseImageVisible, setChooseImageVisible] = useState(false);
    const [fontEditModalVisible, setFontEditModalVisible] = useState(false);

    const [backgroundColor, setBackgroundColor] = useState(card.backgroundColor);
    const [backgroundImage, setBackgroundImage] = useState("default")

    const [name, setName] = useState(card.name);
    const [role, setRole] = useState(card.position);
    const [phone, setPhone] = useState(card.phone);
    const [address, setAddress] = useState(card.address);
    const [email, setEmail] = useState(card.email);
    const [website, setWebsite] = useState(card.website);

    const [topFontStyle, setTopFontStyle] = useState(card.upperFontStyle);
    const [bottomFontStyle, setBottomFontStyle]=useState(card.bottomFontStyle);

    const [backgroundIsColor, setBackgroundIsColor] = useState(false)

    const [showAlert, setShowAlert] = useState(false);

    const popup = () => {
        setShowAlert(true);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        dispatch(getCards())
    }

    function updateCardInfo() {
        dispatch(updateName(card, name))
        dispatch(updateRole(card, role))
        dispatch(updateTelephone(card, phone))
        dispatch(updateAddress(card, address))
        dispatch(updateEmail(card, email))
        dispatch(updateWebsite(card,website))
    }

    function updateCardBackground() {
        dispatch(updateCardBackgroundImage(card, backgroundImage))
        dispatch(getCards())
        dispatch(updateCard(card, backgroundColor))
    }

    const updateCardHandler = useCallback(() => {
        updateCardInfo()
        updateCardBackground()
        popup()
        dispatch(getCards())
    }, [backgroundColor, backgroundImage, name, role, phone, address, email, website])

    const colorPickerHandler = useCallback(() => {
        setColorPickerVisible(true)
    }, [colorPickerVisible])

    const chooseImageVisibleHandler = useCallback(() => {
        setChooseImageVisible(true)
    }, [chooseImageVisible])

    const fontEditHandler = useCallback(() => {
        setFontEditModalVisible(true)
    }, [fontEditModalVisible])

    return (
        <View>
            {card.backgroundImage === "default" || colorPickerVisible || backgroundIsColor === true ?
                <EditableCardWithColor
                    card={card}
                    topFont={topFontStyle}
                    bottomFont={bottomFontStyle}
                    bottomFontColor={bottomFontColor}
                    topFontColor={topFontColor}
                    backgroundColor={backgroundColor}
                    name={name}
                    setName={setName}
                    role={role}
                    setRole={setRole}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                    email={email}
                    setEmail={setEmail}
                    website={website}
                    setWebsite={setWebsite}
                />
                :
                <EditableCardWithImage
                    card={card}
                    topFont={topFontStyle}
                    bottomFont={bottomFontStyle}
                    topFontColor={topFontColor}
                    bottomFontColor={bottomFontColor}
                    backgroundImage={card.backgroundImage}
                    name={name}
                    setName={setName}
                    role={role}
                    setRole={setRole}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                    email={email}
                    setEmail={setEmail}
                    website={website}
                    setWebsite={setWebsite}
                />
            }
            <View style={[(chooseImageVisible || colorPickerVisible) ? {opacity:0} : {opacity:1}, {flexDirection:"row", justifyContent:"center"}]}>
                <ColorPickerModal
                    colorPickerVisible={colorPickerVisible}
                    setColorPickerVisible={setColorPickerVisible}
                    backgroundColor={backgroundColor}
                    setBackgroundColor={setBackgroundColor}
                    editCardModalVisible={editCardModalVisible}
                    setEditCardModalVisible={setEditCardModalVisible}
                    backgroundIsColor={backgroundIsColor}
                    setBackgroundIsColor={setBackgroundIsColor}
                    backgroundImage={backgroundImage}
                    setBackgroundImage={setBackgroundImage}
                />
                <ChooseImageModal
                    card={card}
                    chooseImageVisible={chooseImageVisible}
                    setChooseImageVisible={setChooseImageVisible}
                    editCardModalVisible={editCardModalVisible}
                    setEditCardModalVisible={setEditCardModalVisible}
                />
                <FontEditModal
                    card={card}
                    fontEditModalVisible={fontEditModalVisible}
                    setFontEditModalVisible={setFontEditModalVisible}
                    editCardModalVisible={editCardModalVisible}
                    setEditCardModalVisible={setEditCardModalVisible}
                />
                <TransitionView delay={90}>
                    <TouchableOpacity
                        onPress={colorPickerHandler}
                    >
                        <SvgXml xml={svgIcons.colorPicker} height={40} width={40} fill="grey" />
                    </TouchableOpacity>
                </TransitionView>
                <TransitionView delay={120}>
                    <TouchableOpacity
                        onPress={fontEditHandler}
                    >
                        <SvgXml style={{marginLeft:20}} xml={svgIcons.formatFont} height={40} width={40} fill="grey" opacity={.6} />
                    </TouchableOpacity>
                </TransitionView>
                <TransitionView delay={182}>
                    <TouchableOpacity
                        onPress={chooseImageVisibleHandler}
                    >
                        <SvgXml style={{marginLeft:20}} xml={svgIcons.imageIcon} height={40} width={40} fill="grey" />
                    </TouchableOpacity>
                </TransitionView>
            </View>
            <View style={[colorPickerVisible? {opacity:0} :{opacity:1},{alignItems:"center"}]}>
                <TransitionView delay={220}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={updateCardHandler}
                    >
                        <SvgXml xml={svgIcons.save} height={55} width={55} fill="#8ddc5c" />
                    </TouchableOpacity>
                </TransitionView>
            </View>
            <View>
                <DoneModal showAlert={showAlert} setShowAlert={setShowAlert} />
            </View>
        </View>
    )
}

export default EditableCardItem;
