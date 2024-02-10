import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { loadingProducers } from '../../services/dataLoading';

export default function Producers() {
  useEffect(() => {
    const retorno = loadingProducers();
    console.log(retorno);

  }, []);

  return <Text>Produtores</Text>
}