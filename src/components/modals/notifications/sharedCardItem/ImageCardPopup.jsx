import React, {memo} from 'react'
import {View, Text, Image, useColorScheme, ImageBackground} from 'react-native'
import {getStyles} from "./styles/ImageBackgroundStyles"

const ImageCardPopup = ({card, cardBackground, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont, qrCodeData}) => {

    const styles = getStyles(card, cardBackground, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont, qrCodeData);

    const colorScheme = useColorScheme();
    const themeCardWithBackgroundImage = colorScheme === 'light' ? styles.singleCardWithBackgroundImage : styles.darkSingleCardWithBackgroundImage;

    return (
        <View>
            <ImageBackground
                source={{uri: qrCodeData.backgroundImage}}
                imageStyle={{ borderRadius: 22, resizeMode: 'cover'}}
                style={styles.imageBackgroundStyle}
            >
                <View style={[styles.singleCardWithBackgroundImage, themeCardWithBackgroundImage]}>
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
            </ImageBackground>
        </View>
    )
}

export default memo(ImageCardPopup);
