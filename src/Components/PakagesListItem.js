import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    useColorScheme,
    View,
    TouchableOpacity,
    Button
} from 'react-native';

import { size, type, weight } from '../res/fonts';
import metrics from '../res/metrics';
import colors from '../res/colors';

function getColor(index, mode, useMode) {
    if (index == 0)
        return colors.header;
    if (mode != 0 && useMode) {
        if (mode == 1)
            return colors.success;
        else if (mode == 2)
            return colors.warning;
        else if (mode == 3)
            return colors.danger;
    }
    else {
        if (index % 2)
            return colors.gray_medium;
        else
            return colors.gray_light;
    }
    return colors.white;
}



export default class PackageListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { data, index, useMode } = this.props;
        return (
            <TouchableOpacity onPress={() => { this.props.onClickBtn(data) }} >
                <View style={[styles.containerStyle, { backgroundColor: getColor(index, data.mode, useMode) }]}>
                    <View style={styles.cell}>
                        <Text style={(index == 0 ? styles.cellText2 : styles.cellText1)}>
                            {data.pick.toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={(index == 0 ? styles.cellText2 : styles.cellText1)}>
                            {data.drop.toUpperCase()}
                        </Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={(index == 0 ? styles.cellText2 : styles.cellText1)}>
                            {data.load.toUpperCase()}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        height: metrics.screenHeight * 0.07,
        flexDirection: 'row'
    },
    cellText1: {
        fontSize: size.font_16,
        color: colors.black,
        fontFamily: type.bold2
    },
    cellText2: {
        fontSize: size.font_18,
        color: colors.white,
        fontFamily: type.medium
    },
    cell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: size.font_5,
    }
})