import React, {memo} from 'react';
import {Image, TextInput, useColorScheme, View} from "react-native";
import { add } from 'react-native-reanimated';
import {getStyles} from "./styles/ColorBackgroundStyles";

const EditableCardWithColor = ({card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont,
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

    const styles = getStyles(card, cardBackground, backgroundColor, bottomFontColor, topFontColor, topFont, bottomFont);

    const colorScheme = useColorScheme();
    const themeSingleCardStyle = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;
    const themeCardWithBackground = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;

    return(
        <View>
            <View style={(card.backgroundColor) === "default" ? ([styles.singleCard, themeSingleCardStyle]) : ([styles.cardBackground, themeCardWithBackground])}>
                <View style={styles.firstRow}>
                    <View style={{flex:1, flexDirection:"row", flexWrap:"wrap", flexShrink:1}}>
                        <TextInput value={name} onChangeText={(name) => setName(name)} style={styles.nameTextColor}/>
                    </View>
                    <View>
                        <Image style={{width: 100, height: 30, resizeMode: 'contain'}} source={{uri: card.logo}}/>
                    </View>
                </View>
                <View style={styles.secondRow}>
                    <TextInput value={role} onChangeText={(role) => setRole(role)} style={styles.positionTextColor}></TextInput>
                    <TextInput value={phone} onChangeText={(phone) => setPhone(phone)} style={styles.phoneTextColor}></TextInput>
                </View>
                <View style={styles.thirdRow}>
                    <TextInput value={address} onChangeText={(address) => setAddress(address)} style={styles.bottomBlockTextColor}/>
                    <TextInput value={email} onChangeText={(email) => setEmail(email)} style={styles.bottomBlockTextColor}/>
                    <TextInput value={website} onChangeText={(website) => setWebsite(website)} style={styles.bottomBlockTextColor}/>
                </View>
            </View>
        </View>
    )
}

export default memo(EditableCardWithColor);
