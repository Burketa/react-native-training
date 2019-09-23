import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textGreen}>burca passou por aqui muahaha</Text>
        <Text style={styles.textBlue}>burca passou por aqui muahaha</Text>
        <Text style={styles.textRed}>burca passou por aqui muahaha</Text>
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textGreen: {
    color: '#0F0',
  },
  textBlue: {
    color: '#00F',
  },
  textRed: {
    color: '#F00',
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '#F00',
  },
});
