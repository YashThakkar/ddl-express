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
  Modal
} from 'react-native';

import { size, weight } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import PackageListItem from '../../Components/PakagesListItem';
import constants from '../../res/constants';

import List_btn from './components/List_btn';
import ActionModal from './components/ActionModal';


export default class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, pick: 'IPC', drop: 'FINGLAS', load: '4 Pallets', mode: 0 },
        { id: 2, pick: 'IPC', drop: 'FINGLAS', load: '1 Pallets', mode: 0 },
        { id: 3, pick: 'IPC', drop: 'FINGLAS', load: '3 Pallets', mode: 0 },
        { id: 4, pick: 'IPC', drop: 'FINGLAS', load: '4 Pallets', mode: 0 },
        { id: 5, pick: 'MEP', drop: 'FINGLAS', load: '4 Pallets', mode: 0 },
        { id: 6, pick: 'IPC', drop: 'FINGLAS', load: '8 Pallets', mode: 1 },
        { id: 7, pick: 'IPC', drop: 'MEP', load: '3 Pallets', mode: 2 },
        { id: 8, pick: 'IPC', drop: 'FINGLAS', load: '3 Pallets', mode: 3 },
        { id: 9, pick: 'IPC', drop: 'FINGLAS', load: '4 Pallets', mode: 1 },
      ],
      isModalVisible: false
    }
  }

  onClickBtn = (val) => {
    this.props.navigation.navigate("Details", { myData: val })
  }
  toggleModalVisibility = () => {
    this.setState({ isModalVisible: false })
  };
  render() {
    const renderItem = ({ item, index }) => {
      return (
        <PackageListItem onClickBtn={this.onClickBtn} data={item} index={index} useMode={true} />
      );
    }
    return (
      <View style={styles.containerStyle}>
        <Modal animationType="slide"
          transparent visible={this.state.isModalVisible}
          presentationStyle="overFullScreen"
          onRequestClose={this.toggleModalVisibility}>
          <ActionModal onClose={this.toggleModalVisibility} />
        </Modal>
        <View style={styles.middleSection}>
          <FlatList
            nestedScrollEnabled
            data={constants.packageHeader.concat(this.state.data)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.btn}>
          <List_btn onClickBtn={() => this.setState({ isModalVisible: true })} data={{ title: "Load Completed", color: colors.gray_light, inActive: false }} />
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

  middleSection: {
    padding: '6%',
    marginTop: '5%'
  },
  btn: {
    alignSelf: 'center',
    width: '50%',
    width: metrics.screenWidth * 0.65,
    height: metrics.screenHeight * 0.05,
    marginBottom: '10%'

  },
})