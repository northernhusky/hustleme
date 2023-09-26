import React, {useState} from 'react'
import {
    SafeAreaView,
    View,
    useColorScheme
} from "react-native"
import CardList from "../components/cardList/CardList"
import AddCardOpenModalButton from "../components/buttons/dock-buttons/AddCardOpenModalButton";
import AddCardModal from "../components/modals/addCard/AddCardModal";
import QRCodeScanner from "../components/modals/shareCard/QRCodeScanner";
import ScannerButton from "../components/buttons/dock-buttons/ScannerButton";
import NfcModal from "../components/modals/shareCard/NfcModal"
import NfcButton from '../components/buttons/dock-buttons/NfcButton'
import { BlurView } from 'expo-blur';
import TransitionView from "../components/animation/TransitionView";
import {styles} from "./styles/DashboardStyles"

const Dashboard = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [scannerVisible, setScannerVisible] = useState(false)
    const [nfcVisible, setNfcVisible] = useState(false)

    const colorScheme = useColorScheme();
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeBlurRow = colorScheme === 'light' ? styles.lightBlurRow : styles.darkBlurRow;
    const themeBlurTint = colorScheme === 'light' ? 'light' : 'dark'

    return (
        <SafeAreaView forceInset={{bottom: 'never'}} style={[styles.container, themeContainerStyle]}>

            <AddCardModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <QRCodeScanner scannerVisible={scannerVisible} setScannerVisible={setScannerVisible} />
            <NfcModal nfcVisible={nfcVisible} setNfcVisible={setNfcVisible} />
            
            <CardList />

            <BlurView tint={themeBlurTint} intensity={50} style={[styles.blurRow, themeBlurRow]}>
                <View style={styles.buttonsRow}>
                    <TransitionView delay={144}>
                        <ScannerButton setScannerVisible={setScannerVisible}/>
                    </TransitionView>
                    <TransitionView delay={190}>
                        <AddCardOpenModalButton setModalVisible={setModalVisible}/>
                    </TransitionView>
                    <TransitionView delay={250}>
                        <NfcButton setNfcVisible={setNfcVisible}/>
                    </TransitionView>
                </View>
            </BlurView>

        </SafeAreaView>
    );
};

export default Dashboard;
