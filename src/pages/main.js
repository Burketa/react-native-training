import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Le App',
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const {docs} = response.data;

    console.log(docs);
  };

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
