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
  Image,
} from 'react-native';

import { size, weight } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import List_btn from './components/List_btn';



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ id: 1, title: 'Morning Checklists' }, { id: 2, title: 'expenses' }, { id: 3, title: 'loads' }, { id: 4, title: 'Add Jobs' }, { id: 5, title: 'Logout' },]
    }
  }

  onClickBtn = (val) => {
    if (val == 1)
      this.props.navigation.navigate("Truck");
    if (val == 3)
      this.props.navigation.navigate("Packages");
    if (val == 4)
      this.props.navigation.navigate("Job");
    if (val == 5)
      this.props.navigation.navigate('Login')
  }

  render() {
    const renderItem = ({ item }) => {
      return (
        <List_btn onClickBtn={this.onClickBtn} data={item} />
      );
    }
    return (
      <View style={styles.containerStyle}>
        <View style={styles.upperSection}>
          <Image source={require('../../assets/images/logo.png')} style={styles.img} resizeMode='contain' />
        </View>
        <View style={styles.middleSection}>
          <FlatList
            nestedScrollEnabled
            data={this.state.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: metrics.screenHeight,
    backgroundColor: colors.secondary,

  },
  upperSection: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 0.75,
  },
  img: {
    width: '65%',
    height: '65%',
    alignSelf: 'center'
  }
})