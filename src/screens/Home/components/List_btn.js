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

import { size, weight,type } from '../../../res/fonts';
import metrics from '../../../res/metrics';
import colors from '../../../res/colors';
import { inject, observer } from 'mobx-react'

@inject("store")
@observer
export default class List_btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity disabled={(this.props.data.id ==4&&this.props.store.admin?true:false)} onPress={() => { this.props.onClickBtn(this.props.data.id) }} >
        <View style={styles.containerStyle}>
          <Text style={styles.btnText}>
            {this.props.data.title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: metrics.screenHeight * 0.08,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: size.font_2,
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginVertical: size.font_9,
    borderColor: colors.primary,
  },
  btnText:{
    fontSize:size.font_24,
    fontFamily: type.medium,
    color:colors.black
  }
})