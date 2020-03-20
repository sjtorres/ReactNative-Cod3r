import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
  };

  maisUm() {
    this.setState({numero: this.state.numero + 1});
  }

  limpar = () => {
    this.setState({numero: this.props.numeroInicial});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress={() => this.maisUm()}
          onLongPress={this.limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 30,
  },
});
