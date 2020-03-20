import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Contador from './componentes/Contador';

export default createDrawerNavigator(
  {
    Contador: {
      screen: () => <Contador numeroInicial={100} />,
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
