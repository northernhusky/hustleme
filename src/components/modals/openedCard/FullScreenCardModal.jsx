import React, {useState, useEffect, useCallback} from "react";
import {View, Text, useColorScheme, TouchableOpacity, Modal, Image, Dimensions, ImageBackground} from "react-native";
import {BlurView} from "expo-blur";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import Animated, {
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withSpring,
  } from 'react-native-reanimated';
import {Gyroscope} from "expo-sensors"
import {getStyles} from "./styles/FullScreenStyles"
import GestureRecognizer from "react-native-swipe-gestures";

const FullScreenCardModal = ({card, topFont, bottomFont, topFontColor, bottomFontColor, fullScreenModalVisible, setFullScreenModalVisible}) => {

    const {width, height} = Dimensions.get('screen');
    const ITEM_WIDTH = height * 0.5;
    const ITEM_HEIGHT = width * 0.75;

    const colorScheme = useColorScheme();
    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";

    const [backgroundColor, setBackgroundColor] = useState(card.backgroundColor);
    const styles = getStyles(card, topFont, bottomFont, topFontColor, bottomFontColor, backgroundColor, ITEM_HEIGHT,  ITEM_WIDTH);
    const themeSingleCardStyle = colorScheme === 'light' ? styles.lightSingleCard : styles.darkSingleCard;
    const themeCardWithBackgroundImage = colorScheme === 'light' ? styles.singleCardWithBackgroundImage : styles.darkSingleCardWithBackgroundImage;

    const closeFullScreenHandler = useCallback(() => {
        setFullScreenModalVisible(false)
    }, [])

    const gestureSwipeHandler = useCallback(() => {
        setFullScreenModalVisible(false)
    }, [fullScreenModalVisible])

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
    });

    const [subscription, setSubscription] = useState(null);

    const _slow = () => {
        Gyroscope.setUpdateInterval(1000);
    };

    const _fast = () => {
        Gyroscope.setUpdateInterval(16);
    };

    const _subscribe = () => {
        setSubscription(
            Gyroscope.addListener(gyroscopeData => {
        setData(gyroscopeData);
        })
      );
    };

    const _unsubscribe = () => {
      subscription && subscription.remove();
      setSubscription(null);
    };

    const { x, y, z } = data;

    const prev = useSharedValue({x: 0, y: 0})

    const deriveForOuter = useDerivedValue(() => {
        const MAX_X = 50
        const MAX_Y = 50

        let newX = prev.value.x + data.y * 0.5
        let newY = prev.value.y + data.x * 0.5

        if(Math.abs(newX) >= MAX_X) {
            newX = prev.value.x
        }

        if(Math.abs(newY) >= MAX_Y) {
            newY = prev.value.y
        }

        prev.value = {
            x: newX,
            y: newY,
        }

        return {
            x: newX,
            y: newY,
        }
    })

    const deriveForInner = useDerivedValue(() => {
        const MAX_X = 0
        const MAX_Y = 0

        let newX = prev.value.x + data.y * 0
        let newY = prev.value.y + data.x * 0

        if(Math.abs(newX) >= MAX_X) {
            newX = prev.value.x
        }

        if(Math.abs(newY) >= MAX_Y) {
            newY = prev.value.y
        }

        prev.value = {
            x: newX,
            y: newY,
        }

        return {
            x: newX,
            y: newY,
        }
    })

    const CardParallaxOuter = {
        motion: useAnimatedStyle(() => {
            return{
                transform:[
                    {translateX: withSpring(deriveForOuter.value.x)},
                    {translateY: withSpring(deriveForOuter.value.y)},
                ]
            }
        })
    }

    const CardParallaxInner = {
        motion: useAnimatedStyle(() => {
            return{
                transform:[
                    // {translateX: withSpring(deriveForInner.value.y)},
                    // {translateY: withSpring(deriveForInner.value.x*-1)},
                    {translateX: withSpring(0)},
                    {translateY: withSpring(0)},
                ]
            }
        })
    }

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);

    return (
        <GestureRecognizer
            onSwipe={gestureSwipeHandler}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={fullScreenModalVisible}
                style={{flex:1}}

            >
                <BlurView tint={themeBlurTint} intensity={50} style={styles.centeredView}>
                    {card.backgroundImage === "default" ?
                    <Animated.View style={CardParallaxOuter.motion}>
                        <View style={[styles.singleCard, themeSingleCardStyle]}>
                                <View style={styles.firstRow}>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Text style={styles.nameTextColor}>{card.name}</Text>
                                        </Animated.View>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Image style={{width: 150, height: 50, resizeMode: 'contain'}} source={{uri: card.logo}} />
                                        </Animated.View>
                                </View>
                                <View style={styles.secondRow}>
                                    <Animated.View style={CardParallaxInner.motion}>
                                        <Text style={styles.positionTextColor}>{card.position}</Text>
                                    </Animated.View>
                                    <Animated.View style={CardParallaxInner.motion}>
                                        <Text style={styles.phoneTextColor}>{card.phone}</Text>
                                    </Animated.View>
                                </View>
                                <View style={styles.thirdRow}>
                                    <View>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Text style={styles.bottomBlockTextColor}>{card.address}</Text>
                                            <Text style={styles.bottomBlockTextColor}>{card.email}</Text>
                                            <Text style={styles.bottomBlockTextColor}>{card.website}</Text>
                                        </Animated.View>
                                    </View>
                                    <TouchableOpacity
                                        onPress={closeFullScreenHandler}
                                        style={{opacity:.3}}
                                    >
                                        <SvgXml xml={svgIcons.exitFullScreen} height={40} width={40} fill="grey"/>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </Animated.View>
                    :
                    <Animated.View style={CardParallaxOuter.motion}>
                        <ImageBackground
                            source={{uri: card.backgroundImage}}
                            imageStyle={styles.imageStyle}
                            style={styles.imageBackgroundStyle}
                        >
                            <View style={[styles.singleCard, themeCardWithBackgroundImage]}>
                                    <View style={styles.firstRow}>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Text style={styles.nameTextColor}>{card.name}</Text>
                                        </Animated.View>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Image style={{width: 150, height: 50, resizeMode: 'contain'}} source={{uri: card.logo}} />
                                        </Animated.View>
                                    </View>
                                    <View style={styles.secondRow}>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Text style={styles.positionTextColor}>{card.position}</Text>
                                        </Animated.View>
                                        <Animated.View style={CardParallaxInner.motion}>
                                            <Text style={styles.phoneTextColor}>{card.phone}</Text>
                                        </Animated.View>
                                    </View>
                                    <View style={styles.thirdRow}>
                                        <View>
                                            <Animated.View style={CardParallaxInner.motion}>
                                                <Text style={styles.bottomBlockTextColor}>{card.address}</Text>
                                                <Text style={styles.bottomBlockTextColor}>{card.email}</Text>
                                                <Text style={styles.bottomBlockTextColor}>{card.website}</Text>
                                            </Animated.View>
                                        </View>

                                        <TouchableOpacity
                                            onPress={closeFullScreenHandler}
                                            style={{opacity:.8}}
                                        >
                                            <SvgXml xml={svgIcons.fullScreen} height={40} width={40} fill="lightblue"/>
                                        </TouchableOpacity>
                                    </View>
                            </View>
                            </ImageBackground>
                         </Animated.View>
                    }
                </BlurView>
            </Modal>
        </GestureRecognizer>
    )
}

export default FullScreenCardModal;
