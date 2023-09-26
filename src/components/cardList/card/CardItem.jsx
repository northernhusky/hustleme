import React, {useCallback, useState} from 'react'
import {TouchableOpacity} from "react-native";
import OpenedCardModal from "../../../components/modals/openedCard/OpenedCardModal";
import CardWithImage from '../card/cardSubComponents/CardWithImage'
import CardWithColor from '../card/cardSubComponents/CardWithColor'

const CardItem = ({card}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const openCardHandler = useCallback(() => {
        setModalVisible(true)
    }, [modalVisible])

    return(
        <TouchableOpacity activeOpacity={.88} onPress={openCardHandler}>
            <OpenedCardModal modalVisible={modalVisible} setModalVisible={setModalVisible} card={card} />
            {card.backgroundImage === "default" ?
                <CardWithColor
                    card={card}
                    backgroundColor={card.backgroundColor}
                    topFontColor={card.upperTextColor}
                    bottomFontColor={card.bottomTextColor}
                    topFont={card.upperFontStyle}
                    bottomFont={card.bottomFontStyle}
                />
                :
                <CardWithImage
                    card={card}
                    topFontColor={card.upperTextColor}
                    bottomFontColor={card.bottomTextColor}
                    topFont={card.upperFontStyle}
                    bottomFont={card.bottomFontStyle}
                />
            }
        </TouchableOpacity>
    );
};

export default CardItem;
