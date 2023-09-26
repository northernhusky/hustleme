import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {SvgXml} from "react-native-svg";
import {svgIcons} from "../../../assets/data/svgIcons";

const DoneModal = ({showAlert, setShowAlert}) => {

    return(
        <View>
            <Modal
                animationIn="slideInDown"
                animationInTiming={500}
                animationOut="slideOutUp"
                animationOutTiming={500}
                isVisible={showAlert}
                hasBackdrop={false}
                swipeDirection="up"
                onSwipeComplete={ () => {
                    setShowAlert(false)
                }}
                onModalShow={() => setTimeout(() => setShowAlert(false), 1000) }
            >
                <View style={styles.notificationContainer}>
                    <SvgXml xml={svgIcons.check} height={40} width={40} fill="#fafafa" />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationContainer:{
        top: "-40%",
        backgroundColor: "#8ddc5c",
        alignItems: "center",
        justifyContent: "center",
        height: "8%",
        borderRadius: 12,
    }
})

export default DoneModal;
