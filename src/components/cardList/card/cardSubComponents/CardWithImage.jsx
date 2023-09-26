import React, {memo} from 'react'
import {View, Text, Image, useColorScheme, ImageBackground} from 'react-native'
import {getStyles} from "./styles/ImageBackgroundStyles"

const CardWithImage = ({card, cardBackground, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont}) => {

    const styles = getStyles(card, cardBackground, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont);

    const colorScheme = useColorScheme();
    const themeCardWithBackgroundImage = colorScheme === 'light' ? styles.singleCardWithBackgroundImage : styles.darkSingleCardWithBackgroundImage;

    return (
        <View>
            <ImageBackground
                source={{uri: backgroundImage || card.backgroundImage }}
                imageStyle={{ borderRadius: 22, resizeMode: 'cover'}}
                style={styles.imageBackgroundStyle}
            >
                <View style={[styles.singleCardWithBackgroundImage, themeCardWithBackgroundImage]}>
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
            </ImageBackground>
        </View>
    )
}

export default memo(CardWithImage);
