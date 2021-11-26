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

import { size, type, weight } from '../../../res/fonts';
import metrics from '../../../res/metrics';
import colors from '../../../res/colors';



export default class List_btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => { this.props.onClickBtn(this.props.data.title) }} >
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray_light,
    alignSelf: 'center',
    marginVertical: size.font_9,
  },
  btnText:{
    fontSize:size.font_20,
    fontFamily: 'Arial-Regualar',
    color:colors.black
  }
})