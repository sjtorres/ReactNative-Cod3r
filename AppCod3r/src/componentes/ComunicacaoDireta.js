import React from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fontSize: 30}};

function FilhosComProps(props) {
  return React.Children.map(props.children, c =>
    React.cloneElement(c, {...props, ...c.props}),
  );
}

export const Filho = props => (
  <View>
    <Text {...fonte}>
      Filho: {props.nome} {props.sobrenome}
    </Text>
  </View>
);

export const Pai = props => (
  <View>
    <Text {...fonte}>
      Pai: {props.nome} {props.sobrenome}
    </Text>
    {FilhosComProps(props)}
  </View>
);

export const Avo = props => (
  <View>
    <Text {...fonte}>
      Avô: {props.nome} {props.sobrenome}
    </Text>
    <Pai nome="Sandro" sobrenome={props.sobrenome}>
      <Filho nome="Rafael" />
      <Filho nome="Gabriela" />
      <Filho nome="Isabela" />
    </Pai>
    <Pai {...props} nome="Renato">
      <Filho nome="Sandro" />
      <Filho nome="Bruno" />
    </Pai>
  </View>
);

export default Avo;
