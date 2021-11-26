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
  FlatList
} from 'react-native';

import { size, type, weight } from '../../res/fonts';
import metrics from '../../res/metrics';
import colors from '../../res/colors';
import List_btn from './components/List_btn';



export default class SelectTruck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: '05 RN 249' }, 
        { id: 2, title: '09 C 123118' }, 
        { id: 3, title: '03 MH 15409' }, 
        { id: 4, title: '04 MH 15117' },]
    }
  }

  onClickBtn = (val) => {
    this.props.navigation.navigate("Check")
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
          <View style={styles.upperInnerSection}>
            <Text style={styles.title}>Select Truck:</Text>
          </View>
        </View>
        <View style={styles.middleSection}>
          <FlatList 
          style={styles.btnList}
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
    backgroundColor: colors.secondary

  },
  upperSection: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  btnList:{
    width:'88%'
  },
  upperInnerSection: {
    width:'88%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  middleSection: {
    flex: 0.8,
    alignItems:'center'
  },
  title: {
    color: colors.white,
    fontSize: size.font_24,
    fontFamily: type.regular,
  }
})