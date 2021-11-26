import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    FlatList,
    TextInput,
} from 'react-native';

import { size, weight } from '../../../res/fonts';
import metrics from '../../../res/metrics';
import colors from '../../../res/colors';
import List_btn from './List_btn';

import SignatureCapture from 'react-native-signature-capture';

export default class ActionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    onClickBtn = () => {
    }
    _onSaveEvent(result) {
        //result.encoded - for the base64 encoded png
        //result.pathName - for the file path name
        console.log(result);
    }
    _onDragEvent() {
        // This callback will be called when the user enters signature
        console.log("dragged");
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.subContainer}>

                    <View style={styles.input}>
                        <Text style={styles.label}>
                            SIGNATURE
                        </Text>
                        <SignatureCapture
                            style={styles.signBox}
                            ref="sign"
                            onSaveEvent={this._onSaveEvent}
                            onDragEvent={this._onDragEvent}
                            saveImageFileInExtStorage={false}
                            showNativeButtons={false}
                            showTitleLabel={false}
                            backgroundColor={colors.white}
                            strokeColor={colors.black}
                            minStrokeWidth={3}
                            maxStrokeWidth={3}
                            viewMode={"portrait"} />
                    </View>
                    <View style={styles.btn}>
                        <List_btn onClickBtn={this.props.onClose} data={{ title: "SUBMIT", color: colors.white, inActive: false }} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height: metrics.screenHeight,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    subContainer: {
        alignSelf: 'center',
        backgroundColor: colors.gray_light,
        borderColor: colors.gray_dark,
        elevation: 2,

    },
    title: {
        color: colors.primary,
        fontSize: size.font_30,
        fontWeight: weight.bold,
        fontFamily: 'Roboto',
    },

    input: {
        width: metrics.screenWidth * 0.85,
        padding: '3%'
    },
    label: {
        color: colors.black,
        fontSize: size.font_14,
        fontWeight: weight.bold,
        fontFamily: 'Roboto',
    },
    btn: {
        alignSelf: 'center',
        width: metrics.screenWidth * 0.5,
        height: metrics.screenHeight * 0.03,
        marginBottom: '10%'

    },
    signBox: {
        height: metrics.screenHeight * 0.30,
        marginTop:'2%',

    }
})