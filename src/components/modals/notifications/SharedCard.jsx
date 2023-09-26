import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import ImageCardPopup from './sharedCardItem/ImageCardPopup'
import ColoredCardPopup from './sharedCardItem/ColoredCardPopup'

const SharedCard = ({showAlert, setShowAlert, qrCodeData}) => {

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
                onModalShow={() => setTimeout(() => setShowAlert(false), 2000) }
            >
                <View style={styles.notificationContainer}>
                    {qrCodeData.backgroundImage === "default" ?
                        <ColoredCardPopup
                            qrCodeData={qrCodeData}
                        />
                        :
                        <ImageCardPopup
                            qrCodeData={qrCodeData}
                        />
                    }
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    notificationContainer:{
        top: "-31%",
        // alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    }
})

export default memo(SharedCard);
