import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { size, type, weight } from '../../../res/fonts';
import metrics from '../../../res/metrics';
import colors from '../../../res/colors';
import List_btn from './List_btn';
import { inject, observer } from 'mobx-react'
import SignatureCapture from 'react-native-signature-capture';
const data = [
    { label: 'Driver 1', value: 'Driver 1' },
    { label: 'Driver 2', value: 'Driver 2' },
];

@inject("store")
@observer
export default class ActionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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
        const MyData = this.props.myData
        return (
            <View style={styles.containerStyle}>
                <View style={styles.subContainer}>
                    {MyData.mode == 0 &&
                        <View style={styles.input}>
                            <Text style={styles.label}>
                                NAME
                            </Text>
                            <TextInput style={styles.inputBox} value={''} />
                        </View>
                    }
                    {
                        MyData.mode == 0 &&
                        <View style={styles.input}>
                            <Text style={styles.label}>
                                CUSTOMER EMAIL
                            </Text>
                            <TextInput style={styles.inputBox} value={''} />
                        </View>
                    }
                    {
                        MyData.mode == 2 &&
                        <View style={styles.input}>
                            <Text style={styles.label}>
                                Reason
                            </Text>
                            <TextInput style={styles.inputBox} value={''} />
                        </View>
                    }
                    {
                        MyData.mode == 2 &&
                        <View style={styles.input}>
                            <Text style={styles.label}>
                                Return
                            </Text>
                            <TextInput style={styles.inputBox} value={''} />
                        </View>
                    }
                    {
                        MyData.mode == 2 &&
                        <View style={styles.input}>
                            <Text style={styles.label}>
                                Tranfer
                            </Text>
                            <Dropdown
                                style={styles.inputBox}
                                data={data}
                                labelField="label"
                                valueField="value"
                                placeholder="Select Driver"
                                searchPlaceholder=""
                                value={this.state.value}
                                onChange={item => {
                                    this.setState({ value: item.value })
                                }}
                                placeholderStyle={styles.comboTxt}
                                selectedTextStyle={styles.comboTxt}
                                maxHeight={200}

                            />
                        </View>
                    }
                    {
                        MyData.mode != 2 &&
                        <View style={styles.input}>
                            <Text style={styles.label}>
                                SIGNATURE
                            </Text>
                            {/* <TextInput style={[styles.inputBox, { height: metrics.screenHeight * 0.15 }]} value={''} /> */}
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
                    }
                    <View style={styles.btn}>
                        <List_btn onClickBtn={this.props.onClose} data={{ title: "SUBMIT", color: colors.success, inActive: false }} />
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
        elevation: 2,

    },
    comboTxt: {
        color: colors.black,
        fontSize: size.font_16,
        fontFamily: type.bold,
    },
    input: {
        width: metrics.screenWidth * 0.85,
        padding: '3%'
    },
    label: {
        color: colors.black,
        fontSize: size.font_16,
        fontFamily: type.bold,
    },
    inputBox: {
        //borderWidth: size.font_2 / 2,
        color: colors.black,
        backgroundColor: colors.white,
        fontSize: size.font_16,
        marginTop: '3%',
        fontFamily: type.medium,
    },
    btn: {
        alignSelf: 'center',
        width: '50%',
        width: metrics.screenWidth * 0.65,
        height: metrics.screenHeight * 0.03,
        marginBottom: '10%'

    },
    signBox:{
        height: metrics.screenHeight * 0.15,
    }
})