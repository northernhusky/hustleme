import React, {useRef, useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {View, Animated, Text, TextInput, useColorScheme, TouchableOpacity} from 'react-native'
import {SvgXml} from "react-native-svg";
import CardItem from './card/CardItem'
import {getCards, searchCards} from "../../actions/card";
import TransitionView from "../animation/TransitionView";
import {svgIcons} from "../../assets/data/svgIcons"
import FlatListAppearAnimation from '../animation/FlatListAppearAnimation';
import {styles} from "./styles/CardListStyles"

const CardList = () => {

    const cards = useSelector(state => state.cards.cards)

    const [refreshing, setRefreshing] = useState(false);

    const [greeting, setGreeting] = useState("")

    const colorScheme = useColorScheme();
    const themeTextStyle = colorScheme === 'light' ? styles.lightText : styles.darkText;
    const themeInputStyle = colorScheme === 'light' ? styles.lightSearchInput : styles.darkSearchInput;
    const svgStyle = colorScheme === 'light' ? "#b8ced4" : "#6b6073"

    const [searchText, setSearchText] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(false)

    const date = new Date();
    const currentTime = date.getHours();

    const findGreet = () => {
        if (currentTime >= 5 && currentTime < 8) {
            setGreeting("Whoa, early bird!")
        } else if (currentTime >= 8 && currentTime < 12) {
            setGreeting("Good Morning!")
        } else if (currentTime >= 12 && currentTime < 18) {
            setGreeting("Good Afternoon!")
        } else if (currentTime >= 18 && currentTime < 22) {
            setGreeting("Good Evening!")
        } else {
            setGreeting("Working late!")
        }
    }

    function searchHandler(searchText) {
        setSearchText(searchText)
            if(searchTimeout != false) {
                clearTimeout(searchTimeout)
            }
        setSearchTimeout(setTimeout(() => {
            dispatch(searchCards(searchText))
        }, 100))
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCards())
        findGreet()
    }, [])

    const scrollY = useRef(new Animated.Value(0)).current;

    const CARD_ITEM_SIZE = 233 + 15;

    const renderItem = ({item, index}) => {
        const inputRange = [
            -233 + 15,
            0,
            CARD_ITEM_SIZE * (index + 0.1),
            CARD_ITEM_SIZE * (index + 2.5)
        ]

        const opacityInputRange = [
            // -1,
            -233 + 15,
            0,
            CARD_ITEM_SIZE * index,
            CARD_ITEM_SIZE * (index + .85)
        ]

        const scale = scrollY.interpolate({
            inputRange: inputRange,
            outputRange:[1, 1, 1, 0]
        })

        const opacity = scrollY.interpolate({
            inputRange:opacityInputRange,
            outputRange:[0.2, 1, 1, 0.15]
        })

        const animationFlip = scrollY.interpolate({
            inputRange: inputRange,
            outputRange:["0deg", "0deg", "0deg", "88deg"]
        })
        
        return <Animated.View style={{transform:[{scale},{rotateX:animationFlip}, {rotateZ:animationFlip}], opacity}}>
                  <CardItem card={item}></CardItem>
               </Animated.View>
    }

    if (cards.length !== 0) {
        return (
        <Animated.View style={{flex: 1}}>
            <FlatListAppearAnimation delay={144} style={{flex: 1}}>
                <Animated.FlatList
                    data={cards}
                    style={{paddingLeft: 15, paddingRight: 15}}
                    renderItem={renderItem}
                    contentInset={{bottom: 70, top: 0}}
                    _keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    onScroll={Animated.event(
                        [{nativeEvent:{contentOffset:{y:scrollY}}}],
                        {useNativeDriver:true}
                    )}
                    ListHeaderComponent={
                        <TransitionView>
                            <View style={{flexDirection: 'row', alignItems: "center", justifyContent:"space-between"}}>
                                <Text style={[styles.text, themeTextStyle]}>{greeting}</Text>
                            </View>
                            <View style={styles.searchSection}>
                                <SvgXml style={{bottom: 18, left: 12, position: "absolute", zIndex: 2}}
                                     xml={svgIcons.search} fill={svgStyle} height={20} width={20}
                                />
                                <TextInput
                                    placeholder="Search"
                                    placeholderTextColor={svgStyle}
                                    clearButtonMode="always"
                                    value={searchText}
                                    onChangeText={(searchText) => searchHandler(searchText)}
                                    style={[styles.searchInput, themeInputStyle]}
                                />
                            </View>
                        </TransitionView>
                    }
                    refreshing={refreshing}
                    onRefresh={() => dispatch(getCards()) && findGreet()}
                />
            </FlatListAppearAnimation>
        </Animated.View>
        )
    } else {
    return(
        <Animated.View style={{flex: 1}}>
        <Animated.FlatList
            style={{paddingLeft: 15, paddingRight: 15}}
            contentInset={{bottom: 70, top: 0}}
            ListHeaderComponent={
                <TransitionView delay={200}>
                    <Text style={[styles.text, themeTextStyle]}>{greeting}</Text>
                    <View style={styles.searchSection}>
                        <SvgXml style={{bottom: 18, left: 12, position: "absolute", zIndex: 2}} xml={svgIcons.search} fill={svgStyle} height={20} width={20} />
                        <TextInput
                            placeholder="Search"
                            placeholderTextColor={svgStyle}
                            clearButtonMode="always"
                            value={searchText}
                            onChangeText={(searchText) => searchHandler(searchText)}
                            style={[styles.searchInput, themeInputStyle]}
                        />
                    </View>
                    <Text style={[styles.noCardsText, themeTextStyle]}>Cards not found.</Text>
                    <View style={{flex: 1, alignItems: "center", marginTop: 15}}>
                        <SvgXml style={{opacity: .6}} xml={svgIcons.noCards} fill={svgStyle} height={40} width={40} />
                    </View>
                </TransitionView>
            }
        />
    </Animated.View>
    );
}};

export default CardList;