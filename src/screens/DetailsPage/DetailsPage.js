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
  Modal,
} from 'react-native';

import { size, type, weight } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import List_btn from './components/List_btn';
import PackageListItem from '../../Components/PakagesListItem';
import constants from '../../res/constants';
import ActionModal from './components/ActionModal';
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.myData,
      isModalVisible: false
    }
  }
  toggleModalVisibility = () => {
    this.setState({ isModalVisible: false })
  };
  onClickBtn = (val) => {
    this.setState({ isModalVisible: true })
  }
  render() {

    return (
      <View >

        <Modal animationType="slide"
          transparent visible={this.state.isModalVisible}
          presentationStyle="overFullScreen"
          onRequestClose={this.toggleModalVisibility}>
          <ActionModal onClose={this.toggleModalVisibility} myData={this.state.data} />
        </Modal>
        <ScrollView style={styles.containerStyle} >
          <View style={styles.upperSection}>
            <View style={styles.upperInnerSection}>
              <Text style={styles.title}>Customer</Text>
            </View>
          </View>
          <View>
            <Text style={styles.nameTxt} >Name : ABC</Text>
          </View>
          <View>
            <PackageListItem onClickBtn={() => { }} data={constants.packageHeader[0]} index={0} useMode={false} />
            <PackageListItem onClickBtn={() => { }} data={this.state.data} index={1} useMode={false} />
          </View>
          <View style={styles.middleSection}>
            <Text>Map Here</Text>
          </View>
          <View style={styles.lowerUpperSection}>
            <View style={styles.btn}>
              <List_btn onClickBtn={this.onClickBtn} data={{ title: (this.state.data.mode == 0 ? 'Collected' : 'DELIVERED'), color: colors.success, inActive: (this.state.data.mode == 1 ? true : false) }} />
            </View>
            <View style={styles.btn}>
              <List_btn onClickBtn={this.onClickBtn} data={{ title: (this.state.data.mode == 0 ? 'Not Collected' : 'Not DELIVERED'), color: colors.header, inActive: (this.state.data.mode == 1 ? true : false) }} />
            </View>
          </View>
          <View style={styles.lowerBottomSection}>
            <View style={styles.input}>
              <Text style={styles.label}>
                DOCKET NO.
              </Text>
              <TextInput style={styles.inputBox} value={'123456789'} />
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>
                WAITING TIME
              </Text>
              <TextInput style={styles.inputBox} value={''} />
            </View>
          </View>
        </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: '5%',
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
  middleSection: {
    height: metrics.screenHeight * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.gray_light,
    marginVertical: size.font_12,

  },
  title: {
    color: colors.white,
    fontSize: size.font_18,
    fontFamily: type.bold,
  },
  lowerUpperSection: {
    height: metrics.screenHeight * 0.07,
    flexDirection: 'row',

  },
  nameTxt: {
    marginBottom: size.font_16,
    marginLeft: size.font_16,
    color: colors.black,
    fontSize: size.font_14,
    fontFamily: type.regular,
  },
  btn: {
    flex: 1,
    width: '100%',
  },
  lowerBottomSection: {
    height: metrics.screenHeight * 0.2,
    justifyContent: 'space-around',
    marginVertical: '12%'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center'
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
    fontFamily: type.regular,
    backgroundColor:colors.secondary
  }

})