import React, {memo} from 'react'
import {View, Text, Image, useColorScheme} from 'react-native'
import {getStyles} from './styles/ColorBackgroundStyles'

const CardWithColor = ({card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont}) => {

    const styles = getStyles(card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont);

    const colorScheme = useColorScheme();
    const themeSingleCardStyle = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;
    const themeCardWithBackground = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;

    return (
        <View>
            <View style={(card.backgroundColor) === "default" ? 
                ([styles.singleCard, themeSingleCardStyle]) 
                    : 
                ([styles.cardBackground, themeCardWithBackground])}
            >
                <View style={styles.firstRow}>
                    <Text style={styles.nameTextColor}>{card.name}</Text>
                    <Image style={{width: 100, height: 30, resizeMode: 'contain'}} source={{uri: card.logo}} />
                </View>
                <View style={styles.secondRow}>
                    <Text style={styles.positionTextColor}>{card.position}</Text>
                    <Text style={styles.phoneTextColor}>{card.phone}</Text>
                </View>
                <View style={styles.thirdRow}>
                    <Text style={styles.bottomBlockTextColor}>{card.address}</Text>
                    <Text style={styles.bottomBlockTextColor}>{card.email}</Text>
                    <Text style={styles.bottomBlockTextColor}>{card.website}</Text>
                </View>
            </View>
        </View>
    )
}

export default memo(CardWithColor);
