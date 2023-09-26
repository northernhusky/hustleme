import React, {useState, useCallback} from 'react'
import {
    View,
    Modal,
    Image,
    useColorScheme,
    TouchableOpacity, FlatList, Dimensions
} from 'react-native';
import {BlurView} from "expo-blur";
import TransitionView from "../../../animation/TransitionView";
import {svgIcons} from "../../../../assets/data/svgIcons";
import CloseModalButton from "../../../buttons/CloseModalButton";
import {getCards, updateCardBackgroundImage, updateCard} from "../../../../actions/card";
import {useDispatch} from "react-redux";
import {SvgXml} from "react-native-svg";
import CardWithImage from '../../../cardList/card/cardSubComponents/CardWithImage'
import CardWithColor from '../../../cardList/card/cardSubComponents/CardWithColor'
import {styles} from "./styles/ChooseImageStyles"
import {BackgroundList} from "../../../../assets/backgrounds/BackgroundList";
import * as Haptics from 'expo-haptics';

const ChooseImageModal = ({card, chooseImageVisible, setChooseImageVisible , editCardModalVisible, setEditCardModalVisible}) => {

    const { height } = Dimensions.get('screen');
    const EXAMPLES_BLOCK_HEIGHT = (height - 233 - 30 - 205) * 0.87;

    const dispatch = useDispatch()

    const [backgroundImage, setBackgroundImage] = useState(card.backgroundImage)
    const [backgroundColor, setBackgroundColor] = useState("default")
    const [backgroundIsImage, setBackgroundIsImage] = useState(false)

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const themeModalViewStyle = colorScheme === 'light' ? styles.modalView : styles.darkModalView;

    const updateBackgroundImage = useCallback(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        setBackgroundIsImage(true)
        dispatch(updateCard(card, backgroundColor))
        dispatch(updateCardBackgroundImage(card, backgroundImage));
        setChooseImageVisible(!chooseImageVisible)
        dispatch(getCards())
        setEditCardModalVisible(!editCardModalVisible)
        dispatch(getCards())
        dispatch(getCards())
    }, [card, backgroundColor, backgroundImage, chooseImageVisible, editCardModalVisible])
   
    const renderItem = ({item}) => {
        return <TouchableOpacity
                    onPress={() => {
                        setBackgroundIsImage(true)
                        setBackgroundImage(item.design)}
                    }
                >
                    <Image source={{uri:item.design}} style={styles.exampleCardImage}/>
                </TouchableOpacity>
    }

    return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={chooseImageVisible}
            >
                <BlurView
                    tint={themeBlurTint} intensity={2000}
                    style={[styles.modalView, themeModalViewStyle]}
                >
                    <TransitionView delay={60}>
                        <CloseModalButton setModalVisible={setChooseImageVisible} />
                    </TransitionView>

                    <TransitionView style={{marginTop: 10, width: "110%"}} delay={90}>
                            {backgroundIsImage === true || card.backgroundImage !== "default" ?
                                <CardWithImage
                                    card={card}
                                    backgroundImage={backgroundImage}
                                />
                                :
                                <CardWithColor
                                    style={{width: 340}}
                                    card={card}
                                    backgroundColor={card.backgroundColor}
                                />
                            }
                        </TransitionView>

                            <View style={{flexDirection:"row",justifyContent:"center", marginTop:10, height:EXAMPLES_BLOCK_HEIGHT}}>
                                <TransitionView delay={230} style={{justifyContent:"center"}}>

                                    <FlatList
                                        data={BackgroundList}
                                        renderItem={renderItem}
                                        keyExtractor={item => item.id}
                                        horizontal={false}
                                        numColumns={2}
                                        initialNumToRender={6}
                                        showsVerticalScrollIndicator={false}
                                    />

                                </TransitionView>
                            </View>

                            <View style={{alignItems:"center"}}>
                                <TransitionView delay={250}>
                                    <TouchableOpacity
                                        style={styles.saveButton}
                                        onPress={updateBackgroundImage}
                                    >
                                        <SvgXml xml={svgIcons.save} height={55} width={55} fill="#8ddc5c" />
                                    </TouchableOpacity>
                                </TransitionView>
                            </View>
                    </BlurView>
            </Modal>
        </View>
    )
}

export default ChooseImageModal
