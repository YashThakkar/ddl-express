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
    const {data} = this.props
    return (
      <TouchableOpacity disabled={data.inActive} onPress={() => { this.props.onClickBtn(data.title) }} >
        <View style={[styles.containerStyle,{backgroundColor:data.color,opacity:(data.inActive?0.6:1)}]}>
          <Text style={styles.btnText}>
            {data.title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    height: metrics.screenHeight*0.06,
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: size.font_14,
    borderColor: colors.primary,
    borderWidth: size.font_2/2,
  },
  btnText:{
    fontSize:size.font_20,
    fontFamily: type.bold2,
    color:colors.black
  }
})