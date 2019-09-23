import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <Text style={styles.textGreen}>burca passou por aqui muahaha</Text>
      <Text style={styles.textBlue}>burca passou por aqui muahaha</Text>
      <Text style={styles.textRed}>burca passou por aqui muahaha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.blue,
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
});

export default App;
