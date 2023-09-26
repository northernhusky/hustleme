import React, {useCallback} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Modal,
    TouchableOpacity,
    useColorScheme
} from "react-native";
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";
import { BlurView } from 'expo-blur';
import TransitionView from "../../animation/TransitionView";
import {styles} from "./styles/PrivacyModalStyles"

const PrivacyModal = ({privacyModalVisible, setPrivacyModalVisible}) => {

    const colorScheme = useColorScheme();

    const themeBlurTint = colorScheme === 'light' ? "light" : " dark";
    const themeModalViewStyle = colorScheme === 'light' ? styles.modalView : styles.darkModalView;
    const themeTextStyle = colorScheme === 'light' ? styles.lightDescription : styles.darkDescription;

    const closeModalHandler = useCallback(() => {
        setPrivacyModalVisible(false);
    }, [])

    return(
        <SafeAreaView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={privacyModalVisible}
                    onRequestClose={closeModalHandler}>
                        <BlurView tint={themeBlurTint} intensity={500} style={[styles.modalView, themeModalViewStyle]}>
                            <TransitionView delay={60}>
                                <TouchableOpacity
                                    style={styles.closeButton}
                                    onPress={closeModalHandler}
                                >
                                    <SvgXml xml={svgIcons.close} fill="rgba(110, 102, 120, .6)" height={50} width={50} />
                                </TouchableOpacity>
                            </TransitionView>
                                <ScrollView 
                                    style={styles.scrollView}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <View style={{width: '100%'}}>
                                        <Text style={[styles.description, themeTextStyle]}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non nibh et metus ultrices vehicula. Vivamus mollis commodo odio sit amet porttitor. Ut ultrices porta pretium. Aliquam eu vestibulum erat, faucibus commodo ligula. Morbi ipsum ex, volutpat nec leo ut, ornare hendrerit justo. Nullam a tempor ex, sed maximus justo. Quisque gravida odio nibh, vitae dignissim dui posuere non.
Morbi erat lorem, porta sed dolor et, aliquet facilisis ante. Vestibulum at eleifend ante. Maecenas dui tortor, ultricies vel volutpat et, pulvinar vel velit. Curabitur suscipit ipsum ultricies sapien pellentesque facilisis. Sed at suscipit nunc. Fusce eu sapien metus. Quisque condimentum lectus vel tellus fermentum condimentum nec vitae elit. Nulla sem purus, feugiat sed libero quis, dignissim finibus purus.
Donec ornare dolor ac faucibus tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque sit amet maximus neque, vel tempus massa. Cras est orci, sagittis a leo et, malesuada tempus diam. Aenean non nibh gravida, laoreet sapien varius, volutpat erat. Donec tempor rutrum urna, eu viverra tortor sodales nec. Aenean consectetur erat sed purus venenatis, ac euismod elit tristique. Praesent rhoncus libero nisl, vehicula eleifend nulla commodo at.
Aenean tempus sapien nec mi ornare laoreet. Donec vel risus bibendum, dictum ipsum ac, vestibulum metus. Nunc egestas aliquam neque, ac accumsan augue venenatis in. Suspendisse ac leo malesuada, pretium erat eget, pellentesque enim. Phasellus congue metus non magna faucibus, ac bibendum massa commodo. Phasellus turpis odio, laoreet vitae rhoncus at, bibendum sed libero. Vestibulum varius tincidunt dolor, vel molestie mi. Nulla leo dolor, iaculis in est quis, venenatis pulvinar lectus. Praesent sed hendrerit ex. Nam vel laoreet nulla. Aliquam elementum, tellus vel lobortis maximus, lorem tortor vehicula orci, ac tincidunt arcu augue ut magna. Suspendisse vestibulum neque nunc, eget rutrum nulla sodales et. Nunc elementum dui sed sem pulvinar posuere.
Fusce justo purus, volutpat at bibendum vitae, pretium ac ante. Nunc quam nisl, congue a sapien et, cursus mattis lorem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam mollis tortor euismod sapien congue, ut viverra diam ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas a sollicitudin nisl. Proin at sollicitudin nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut tempor tincidunt metus, id lobortis odio suscipit nec.</Text>
                                    </View>
                                </ScrollView>
                        </BlurView>
                    </Modal>
        </SafeAreaView>
    )
}

export default PrivacyModal;
