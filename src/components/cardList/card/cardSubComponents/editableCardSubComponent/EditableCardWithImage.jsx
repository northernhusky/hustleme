import React, {memo} from 'react';
import {Image, ImageBackground, TextInput, useColorScheme, View} from "react-native";
import {getStyles} from "./styles/ImageBackgroundStyles";

const EditableCardWithImage = ({card, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont, 
    name,
    setName,
    role,
    setRole,
    phone,
    setPhone,
    address,
    setAddress,
    email,
    setEmail,
    website,
    setWebsite
}) => {
    const styles = getStyles(card, backgroundImage, bottomFontColor, topFontColor, topFont, bottomFont);

    const colorScheme = useColorScheme();
    const themeCardWithBackgroundImage = colorScheme === 'light' ? styles.singleCardWithBackgroundImage : styles.darkSingleCardWithBackgroundImage;

    return(
        <View>
            <ImageBackground
                source={{uri: backgroundImage || card.backgroundImage}}
                imageStyle={{ borderRadius: 22, resizeMode: 'cover'}}
                style={{width: "100%", height: 233, marginBottom: 15}}
            >
                <View style={[styles.singleCardWithBackgroundImage, themeCardWithBackgroundImage]}>
                    <View style={styles.firstRow}>
                        <TextInput value={name} onChangeText={(name) => setName(name)} style={styles.nameTextColor}/>
                        <Image style={{width: 100, height: 30, resizeMode: 'contain'}} source={{uri: card.logo}} />
                    </View>
                    <View style={styles.secondRow}>
                        <TextInput value={role} onChangeText={(role) => setRole(role)} style={styles.positionTextColor}/>
                        <TextInput value={phone} onChangeText={(phone) => setPhone(phone)} style={styles.phoneTextColor}/>
                    </View>
                    <View style={styles.thirdRow}>
                        <TextInput value={address} onChangeText={(address) => setAddress(address)} style={styles.bottomBlockTextColor}/>
                        <TextInput value={email} onChangeText={(email) => setEmail(email)} style={styles.bottomBlockTextColor}/>
                        <TextInput value={website} onChangeText={(website) => setWebsite(website)} style={styles.bottomBlockTextColor}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default memo(EditableCardWithImage);
