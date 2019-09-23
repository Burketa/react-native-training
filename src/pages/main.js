import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Le App',
  };

  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    const {docs} = response.data;

    console.log(docs);

    this.setState({docs});
  };

  renderItem = ({item}) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text>Acessar</Text>
      </TouchableOpacity>
      <Button title="botao" onPress={() => {}}>
        <Text>Acessar</Text>
      </Button>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textGreen}>burca passou por aqui muahaha</Text>
        <Text style={styles.textBlue}>burca passou por aqui muahaha</Text>
        <Text style={styles.textRed}>burca passou por aqui muahaha</Text>
        <View style={styles.box} />

        <FlatList
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
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
