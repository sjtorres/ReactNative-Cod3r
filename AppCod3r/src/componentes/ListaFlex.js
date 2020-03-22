import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
  {id: 1, nome: 'Sandro', nota: 10.0},
  {id: 2, nome: 'Patricia', nota: 7.9},
  {id: 3, nome: 'Isabela', nota: 5.4},
  {id: 4, nome: 'Gabriela', nota: 7.6},
  {id: 5, nome: 'Rafael', nota: 6.8},
  {id: 6, nome: 'Wanderson', nota: 9.0},
  {id: 7, nome: 'Priscila', nota: 9.1},
  {id: 8, nome: 'Fabrício', nota: 8.8},
  {id: 9, nome: 'Ângela', nota: 8.8},

  {id: 11, nome: 'Sandro', nota: 10.0},
  {id: 12, nome: 'Patricia', nota: 7.9},
  {id: 13, nome: 'Isabela', nota: 5.4},
  {id: 14, nome: 'Gabriela', nota: 7.6},
  {id: 15, nome: 'Rafael', nota: 6.8},
  {id: 16, nome: 'Wanderson', nota: 9.0},
  {id: 17, nome: 'Priscila', nota: 9.1},
  {id: 18, nome: 'Fabrício', nota: 8.8},
  {id: 19, nome: 'Ângela', nota: 8.8},
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#ddd',
  borderWidth: 0.5,
  borderColor: '#222',
};

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
  </View>
);

export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
