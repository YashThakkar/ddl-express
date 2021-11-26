import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import { size, type, weight } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import List_btn from './components/List_btn';
import PackageListItem from '../../Components/PakagesListItem';
import constants from '../../res/constants';
import { Dropdown } from 'react-native-element-dropdown';



const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
export default class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { id: 2, pick: 'IPC', drop: 'FINGLAS', load: '1 Pallets', mode: 0 },
      value: null,
    }
  }
  onClickBtn = (val) => {
    this.setState({ isModalVisible: true })
  }
  render() {

    return (
      <ScrollView >
        <View style={styles.containerStyle}>
          <View style={styles.upperSection}>
            <View style={styles.upperInnerSection}>
              <Text style={styles.title}>Customer</Text>
            </View>
          </View>
          <View>
            <Text style={styles.nameTxt} >Name : ABC</Text>
          </View>
          <View>
            <PackageListItem onClickBtn={this.onClickBtn} data={constants.packageHeader[0]} index={0} useMode={false} />
            <PackageListItem onClickBtn={this.onClickBtn} data={this.state.data} index={1} useMode={false} />
          </View>
          <View style={styles.lowerBottomSection}>
            <View style={styles.input}>
              <Text style={styles.label}>
                Rate
              </Text>
              <TextInput style={styles.inputBox} value={'123456789'} />
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>
                SELECT DRIVER
              </Text>
              <Dropdown
                style={[styles.inputBox,{height:'60%'}]}
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
          </View>
          <View style={styles.btn}>
            <List_btn onClickBtn={this.onClickBtn} data={{ title: "Add Job", color: colors.success, inActive: false }} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: metrics.screenHeight,
    backgroundColor: colors.white,
    paddingHorizontal: '6%',
  },
  upperSection: {
    height: metrics.screenHeight * 0.1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  upperInnerSection: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,

  },
  comboTxt:{
    color: colors.black,
    fontSize: size.font_16,
    fontFamily: type.regular,
},
  title: {
    fontFamily: type.bold,
    color: colors.white,
    fontSize: size.font_18,
  },
  lowerUpperSection: {
    height: metrics.screenHeight * 0.09,
    flexDirection: 'row',

  },
  nameTxt: {
    fontFamily: type.regular,
    marginBottom: size.font_16,
    marginLeft: size.font_16,
    color: colors.black,
    fontSize: size.font_14,
  },
  btn: {
    width: '60%',
    alignSelf:'center'
  },
  lowerBottomSection: {
    height: metrics.screenHeight * 0.3,
    justifyContent: 'space-around',
    marginTop: '15%'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: type.medium,
    flex: 0.5,
    color: colors.black,
    fontSize: size.font_16,
  },
  inputBox: {
    fontFamily: type.regular,
    flex: 0.5,
    //borderWidth: size.font_2 / 2,
    color: colors.black,
    fontSize: size.font_16,
    width: '100%',
    backgroundColor:colors.secondary
  }

})