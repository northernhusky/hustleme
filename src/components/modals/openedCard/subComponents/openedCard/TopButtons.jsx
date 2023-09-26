import React, {useCallback} from 'react'
import {styles} from "../../styles/OpenedCardStyles"
import {
    View,
    TouchableOpacity,
    Linking,
} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../../../assets/data/svgIcons";
import TransitionView from "../../../../animation/TransitionView"

const TopButtons = ({card}) => {

    const whatsappHandler = useCallback(() => {
        Linking.openURL(`whatsapp://send?text=Hello!&phone=${card.phone}`)
    }, [])

    const phoneHandler = useCallback(() => {
        Linking.openURL(`tel:${card.phone}`)
    }, [])

    const emailHandler = useCallback(() => {
        Linking.openURL(`mailto:${card.email}`)
    }, [])

    const websiteHandler = useCallback(() => {
        Linking.openURL(`https://${card.website}`)
    }, [])

    const linkedInHandler = useCallback(() => {
        Linking.openURL(card.linkedIn)
    }, [])

    return (
        <View style={styles.iconContainer}>
            <TransitionView delay={144}>
                <TouchableOpacity activeOpacity={.7} onPress={whatsappHandler}>
                    <SvgXml
                        xml={svgIcons.whatsapp}
                        fill="#8ddc5c"
                        height={40}
                        width={40}
                    />
                </TouchableOpacity>
            </TransitionView>
            <TransitionView delay={190}>
                <TouchableOpacity activeOpacity={.7} onPress={phoneHandler}>
                    <SvgXml
                        style={{marginLeft:40}}
                        xml={svgIcons.phone}
                        fill="#4bb87f"
                        height={40}
                        width={40}
                    />
                </TouchableOpacity>
            </TransitionView>
            <TransitionView delay={230}>
                <TouchableOpacity activeOpacity={.7} onPress={emailHandler}>
                    <SvgXml
                        style={{marginLeft:40}}
                        xml={svgIcons.email}
                        fill="#03c6fc"
                        height={40}
                        width={40}
                    />
                </TouchableOpacity>
            </TransitionView>
            <TransitionView delay={250}>
                <TouchableOpacity activeOpacity={.7} onPress={websiteHandler}>
                    <SvgXml
                        style={{marginLeft:40}}
                        xml={svgIcons.web}
                        fill="#03c6fc"
                        height={40}
                        width={40}
                    />
                </TouchableOpacity>
            </TransitionView>
                {!card.linkedIn ?
                    null
                 :
                    <TransitionView delay={280}>
                        <TouchableOpacity activeOpacity={.7} onPress={linkedInHandler}>
                            <SvgXml
                                style={{marginLeft:30}}
                                xml={svgIcons.linkedIn}
                                fill="#0E76A8"
                                height={40}
                                width={40}
                            />
                        </TouchableOpacity>
                    </TransitionView>
                }
            </View>
    )
}

export default TopButtons;