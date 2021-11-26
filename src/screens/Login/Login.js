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
    Image
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { size, weight,type } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import List_btn from './components/List_btn';
const data = [
    { label: 'Admin', value: 'Admin' },
    { label: 'User', value: 'User' },
];

import { inject, observer } from 'mobx-react'

@inject("store")
@observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    onClickBtn = (val) => {
        this.props.store.login((this.state.value == "Admin"))
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.upperSection}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.img} resizeMode='contain' />
                </View>
                <View style={styles.middleSection}>
                    <View style={styles.middleInnerSection}>
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
                    <View style={styles.middleInnerSection}>
                        <TextInput style={styles.inputBox} value={'PIN'} placeholder={'PIN'} />
                    </View>
                    <View style={styles.btn}>
                        <List_btn onClickBtn={this.onClickBtn} data={{ title: "Login", color: colors.primary, inActive: false }} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height: metrics.screenHeight,
        backgroundColor: colors.secondary

    },
    upperSection: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleSection: {
        flex: 0.75,
    },
    middleInnerSection: {
        margin: '8%',
        height: '10%'
    },
    inputBox: {
        height: '100%',
        padding: '4%',
        // borderWidth: size.font_2 / 2,
        color: colors.black,
        fontSize: size.font_16,
        width: '100%',
        fontFamily: type.bold,
        backgroundColor:colors.white,
    },
    comboTxt:{
        color: colors.black,
        fontSize: size.font_16,
        fontFamily: type.bold,
    },
    btn: {
        height: metrics.screenHeight * 0.05,
        marginTop: '30%',
        width: '100%',
        alignSelf: 'center'
    },

    img: {
        width: '65%',
        height: '65%',
        alignSelf: 'center'
    }
})