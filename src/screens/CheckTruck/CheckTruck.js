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

import { size, type, weight } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import List_btn from './components/List_btn';
import PackageListItem from '../../Components/PakagesListItem';
import constants from '../../res/constants';




import { inject, observer } from 'mobx-react'

@inject("store")
@observer
export default class CheckTruck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { id: 2, pick: 'IPC', drop: 'FINGLAS', load: '1 Pallets', mode: 0 },
      value: null,
    }
  }
  onClickBtn = (val) => {
   
  }
  render() {

    return (
      <ScrollView >
        <View style={styles.containerStyle}>
        <View style={styles.upperSection}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.img} resizeMode='contain' />
                </View>
          <View style={styles.middleSection}>
            <Text>Image Here</Text>
          </View>
          <View style={styles.lowerBottomSection}>
            <View style={styles.input}>
              <Text style={styles.label}>
                NIL DEFECTS
              </Text>
              <TextInput style={styles.inputBox} value={''} />
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>
               GENERAL REMARKS
              </Text>
              <TextInput style={styles.inputBox} value={''} />
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>
               MILAGE
              </Text>
              <TextInput style={styles.inputBox} value={''} />
            </View>
          </View>
          <View style={styles.btn}>
            <List_btn onClickBtn={this.onClickBtn} data={{ title: "ACCEPT & FINALISE", color: colors.white, inActive: false }} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: metrics.screenHeight,
    backgroundColor: colors.secondary,
    paddingHorizontal: '6%',
  },
  upperSection: {
    height: metrics.screenHeight * 0.15,
    justifyContent: 'center',
    alignItems: 'center',

  },
  middleSection: {
    height: metrics.screenHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.gray_light,
    marginVertical: size.font_12,

  },
  title: {
    color: colors.primary,
    fontSize: size.font_30,
    fontFamily: type.bold,
  },
  lowerUpperSection: {
    height: metrics.screenHeight * 0.09,
    flexDirection: 'row',
    
  },
  btn: {
    width: '100%',
    marginTop:'4%'
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
    flex: 0.5,
    color: colors.black,
    fontSize: size.font_16,
    fontFamily: type.medium,
  },
  inputBox: {
    flex: 0.5,
    // borderWidth: size.font_2 / 2,
    color: colors.black,
    fontSize: size.font_16,
    width: '100%',
    fontFamily: type.medium,
    backgroundColor:colors.white
  },
  img: {
    width: '70%',
    height: '70%',
    alignSelf: 'center'
}

})