import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import TextoSincronizado from './componentes/ComunicaçaoIndireta';
import ListaFlex from './componentes/ListaFlex';

export default createDrawerNavigator(
  {
    ListaFlex: {
      screen: ListaFlex,
      navigationOptions: {title: 'Lista Flex'},
    },
    TextoSincronizado: {
      screen: TextoSincronizado,
      navigationOptions: {title: 'Texto Sincronizado'},
    },
    Avo: {
      screen: () => <Avo nome="Mário" sobrenome="Torres" />,
    },
    Evento: {
      screen: Evento,
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={20} />,
      navigationOptions: {title: 'Validar Props'},
    },
    Platafomas: {
      screen: Plataformas,
    },
    Contador: {
      screen: () => <Contador numeroInicial={1000} />,
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Inverter: {
      screen: () => <Inverter texto={'Sandro Torres'} />,
    },
    ParImpar: {
      screen: () => <ParImpar numero={21} />,
      navigationOptions: {title: 'Par ou Impar'},
    },
    Simples: {
      screen: () => <Simples texto="React-Native" />,
    },
  },
  {drawerWidth: 300},
);
