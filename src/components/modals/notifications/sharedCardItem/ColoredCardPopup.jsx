import React, {memo} from 'react'
import {View, Text, Image, useColorScheme} from 'react-native'
import {getStyles} from './styles/ColorBackgroundStyles'

const ColoredCardPopup = ({card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont, qrCodeData}) => {

    const styles = getStyles(card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont, qrCodeData);

    const colorScheme = useColorScheme();
    const themeSingleCardStyle = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;
    const themeCardWithBackground = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;

    return (
        <View>
            <View style={(qrCodeData.backgroundColor) === "default" ? 
                ([styles.singleCard, themeSingleCardStyle]) 
                    : 
                ([styles.cardBackground, themeCardWithBackground])}
            >
                <View style={styles.firstRow}>
                    <Text style={styles.nameTextColor}>{qrCodeData.name}</Text>
                    <Image style={{width: 100, height: 30, resizeMode: 'contain'}} source={{uri: qrCodeData.logo}} />
                </View>
                <View style={styles.secondRow}>
                    <Text style={styles.positionTextColor}>{qrCodeData.position}</Text>
                    <Text style={styles.phoneTextColor}>{qrCodeData.phone}</Text>
                </View>
                <View style={styles.thirdRow}>
                    <Text style={styles.bottomBlockTextColor}>{qrCodeData.address}</Text>
                    <Text style={styles.bottomBlockTextColor}>{qrCodeData.email}</Text>
                    <Text style={styles.bottomBlockTextColor}>{qrCodeData.website}</Text>
                </View>
            </View>
        </View>
    )
}

export default memo(ColoredCardPopup);
